import { Analytics } from "@vercel/analytics/next"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google"
import { Providers } from "@/components/providers"
import { profile, about } from "@/lib/data"
import "./globals.css"

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] })
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] })
const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://github.com/Zenda0610"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — ${profile.role.en}`,
    template: `%s — ${profile.name}`,
  },
  description: about.intro.en,
  keywords: ["Full Stack Developer", "Next.js", "React", "TypeScript", "Node.js", profile.name],
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  alternates: {
    canonical: "/",
    languages: { es: "/", en: "/" },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${profile.name} — ${profile.role.en}`,
    description: about.intro.en,
    siteName: profile.name,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: `${profile.name} — ${profile.role.en}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role.en}`,
    description: about.intro.en,
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#111417" },
  ],
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role.en,
  url: siteUrl,
  email: `mailto:${profile.email}`,
  image: `${siteUrl}${profile.avatar}`,
  sameAs: [profile.socials.github, profile.socials.linkedin, profile.socials.x].filter(Boolean),
  knowsAbout: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Web Performance", "Accessibility"],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} bg-background scroll-smooth`}
    >
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="font-sans antialiased">
        <a
          href="#top"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Skip to content
        </a>
        <Providers>{children}</Providers>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
