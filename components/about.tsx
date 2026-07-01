"use client"

import { Check } from "lucide-react"
import { useLanguage } from "@/lib/i18n"
import { about } from "@/lib/data"
import { SectionHeading } from "./section-heading"
import { Reveal } from "./reveal"

export function About() {
  const { dict, t } = useLanguage()

  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 md:px-6 md:py-28">
      <Reveal>
        <SectionHeading kicker={t(dict.sections.aboutKicker)} title={t(dict.sections.aboutTitle)} />
      </Reveal>

      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <Reveal className="flex flex-col gap-6 text-lg leading-relaxed text-muted-foreground">
          <p className="text-pretty">{t(about.intro)}</p>
          <p className="text-pretty">{t(about.story)}</p>
          <blockquote className="border-l-2 border-primary pl-5 text-pretty italic text-foreground">
            {t(about.philosophy)}
          </blockquote>
          <p className="text-pretty text-base">
            <span className="font-medium text-foreground">
              {t({ es: "Intereses:", en: "Interests:" })}{" "}
            </span>
            {t(about.interests)}
          </p>
        </Reveal>

        <Reveal delay={100} className="flex flex-col gap-6">
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {about.strengths.map((s) => (
              <li key={s.en} className="flex items-center gap-3 text-sm">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-accent text-accent-foreground">
                  <Check className="h-3.5 w-3.5" />
                </span>
                {t(s)}
              </li>
            ))}
          </ul>

          <div className="grid grid-cols-2 gap-3">
            {about.stats.map((stat) => (
              <div key={stat.value} className="rounded-xl border border-border bg-card p-4">
                <div className="text-3xl font-semibold tracking-tight text-primary">{stat.value}</div>
                <div className="mt-1 text-xs text-muted-foreground">{t(stat.label)}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
