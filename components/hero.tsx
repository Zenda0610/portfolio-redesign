"use client"

import Image from "next/image"
import { ArrowDown, ArrowRight, Download, Mail } from "lucide-react"
import { Github, Linkedin, Twitter } from "@/components/brand-icons"
import { useLanguage } from "@/lib/i18n"
import { profile } from "@/lib/data"

export function Hero() {
  const { dict, t } = useLanguage()

  return (
    <section id="top" className="relative overflow-hidden">
      {/* Decorative background: subtle grid + soft glow (no filler blobs) */}
      <div className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" aria-hidden="true" />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--primary), transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto flex min-h-[92vh] max-w-6xl flex-col items-center justify-center px-4 py-28 text-center md:px-6">
        <div className="reveal is-visible flex flex-col items-center gap-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 text-sm text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            {t(profile.availability)}
          </span>

          <div className="relative animate-float-slow">
            <Image
              src={profile.avatar || "/placeholder.svg"}
              alt={`${profile.name} — ${t(profile.role)}`}
              width={128}
              height={128}
              priority
              className="h-28 w-28 rounded-full border-2 border-border object-cover shadow-xl md:h-32 md:w-32"
            />
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-6xl md:text-7xl">
              {profile.name}
            </h1>
            <p className="font-serif text-2xl italic text-primary md:text-3xl">{t(profile.role)}</p>
          </div>

          <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">{t(profile.tagline)}</p>

          <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              {t(dict.hero.viewProjects)}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={t(profile.cv)}
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card/50 px-5 py-3 text-sm font-medium transition-colors hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <Download className="h-4 w-4" />
              {t(dict.hero.downloadCv)}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              {t(dict.hero.contact)}
            </a>
          </div>

          <div className="mt-2 flex items-center gap-2">
            {profile.socials.github && (
              <SocialLink href={profile.socials.github} label="GitHub">
                <Github className="h-5 w-5" />
              </SocialLink>
            )}
            {profile.socials.linkedin && (
              <SocialLink href={profile.socials.linkedin} label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </SocialLink>
            )}
            {profile.socials.x && (
              <SocialLink href={profile.socials.x} label="X">
                <Twitter className="h-5 w-5" />
              </SocialLink>
            )}
            <SocialLink href={`mailto:${profile.email}`} label="Email">
              <Mail className="h-5 w-5" />
            </SocialLink>
          </div>
        </div>

        <a
          href="#about"
          className="absolute bottom-8 flex flex-col items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
          aria-label={t(dict.hero.scroll)}
        >
          <span>{t(dict.hero.scroll)}</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </a>
      </div>
    </section>
  )
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="grid h-10 w-10 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
    >
      {children}
    </a>
  )
}
