"use client"

import { Mail } from "lucide-react"
import { Github, Linkedin, Twitter } from "@/components/brand-icons"
import { useLanguage } from "@/lib/i18n"
import { profile } from "@/lib/data"

export function Footer() {
  const { dict, t } = useLanguage()
  const year = new Date().getFullYear()
  const initials = profile.name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-10 md:flex-row md:justify-between md:px-6">
        <a href="#top" className="flex items-center gap-2 text-sm font-semibold">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-primary font-mono text-primary-foreground">
            {initials}
          </span>
          {profile.name}
        </a>

        <p className="order-last text-center text-xs text-muted-foreground md:order-none">
          © {year} {profile.name}. {t(dict.footer.rights)}
        </p>

        <div className="flex items-center gap-2">
          {profile.socials.github && (
            <FooterLink href={profile.socials.github} label="GitHub">
              <Github className="h-4 w-4" />
            </FooterLink>
          )}
          {profile.socials.linkedin && (
            <FooterLink href={profile.socials.linkedin} label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </FooterLink>
          )}
          {profile.socials.x && (
            <FooterLink href={profile.socials.x} label="X">
              <Twitter className="h-4 w-4" />
            </FooterLink>
          )}
          <FooterLink href={`mailto:${profile.email}`} label="Email">
            <Mail className="h-4 w-4" />
          </FooterLink>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="grid h-9 w-9 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
    >
      {children}
    </a>
  )
}
