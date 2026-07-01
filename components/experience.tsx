"use client"

import { ArrowUpRight } from "lucide-react"
import { useLanguage } from "@/lib/i18n"
import { experience } from "@/lib/data"
import { SectionHeading } from "./section-heading"
import { Reveal } from "./reveal"

export function Experience() {
  const { dict, t } = useLanguage()

  return (
    <section id="experience" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 md:px-6 md:py-28">
      <Reveal>
        <SectionHeading kicker={t(dict.sections.expKicker)} title={t(dict.sections.expTitle)} />
      </Reveal>

      <ol className="relative flex flex-col gap-10 border-l border-border pl-6 md:pl-8">
        {experience.map((job, i) => (
          <Reveal as="li" key={job.company} delay={i * 80} className="relative">
            <span
              className="absolute -left-[31px] top-1.5 grid h-3.5 w-3.5 place-items-center rounded-full border-2 border-primary bg-background md:-left-[39px]"
              aria-hidden="true"
            >
              {job.current && <span className="h-1.5 w-1.5 rounded-full bg-primary" />}
            </span>

            <div className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold">{t(job.role)}</h3>
                <span className="font-mono text-xs text-muted-foreground">{t(job.period)}</span>
              </div>
              <div className="mt-0.5 flex items-center gap-1.5 text-sm font-medium text-primary">
                {job.company}
                {job.current && (
                  <span className="rounded-full bg-accent px-2 py-0.5 text-[10px] uppercase tracking-wide text-accent-foreground">
                    {t({ es: "Actual", en: "Current" })}
                  </span>
                )}
              </div>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t(job.description)}</p>

              <ul className="mt-4 flex flex-col gap-2">
                {job.achievements.map((a) => (
                  <li key={a.en} className="flex gap-2 text-sm text-muted-foreground">
                    <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{t(a)}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {job.tech.map((techName) => (
                  <span
                    key={techName}
                    className="rounded-md border border-border bg-secondary px-2.5 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {techName}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  )
}
