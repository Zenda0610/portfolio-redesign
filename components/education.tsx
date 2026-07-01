"use client"

import { Award, ExternalLink, GraduationCap } from "lucide-react"
import { useLanguage } from "@/lib/i18n"
import { certifications, education } from "@/lib/data"
import { SectionHeading } from "./section-heading"
import { Reveal } from "./reveal"

export function Education() {
  const { dict, t } = useLanguage()

  return (
    <section id="education" className="scroll-mt-20 border-y border-border bg-card/30 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Reveal>
          <SectionHeading kicker={t(dict.sections.eduKicker)} title={t(dict.sections.eduTitle)} />
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Education timeline */}
          <div>
            <ol className="relative flex flex-col gap-8 border-l border-border pl-6">
              {education.map((item, i) => (
                <Reveal as="li" key={item.place} delay={i * 80} className="relative">
                  <span
                    className="absolute -left-[31px] top-1 grid h-6 w-6 place-items-center rounded-full border border-border bg-background text-primary"
                    aria-hidden="true"
                  >
                    <GraduationCap className="h-3.5 w-3.5" />
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">{t(item.period)}</span>
                  <h3 className="mt-1 text-base font-semibold">{t(item.title)}</h3>
                  <p className="text-sm text-primary">{item.place}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{t(item.description)}</p>
                </Reveal>
              ))}
            </ol>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              {t(dict.sections.certsTitle)}
            </h3>
            <ul className="flex flex-col gap-3">
              {certifications.map((cert, i) => (
                <Reveal as="li" key={cert.title} delay={i * 60}>
                  <a
                    href={cert.url || "#"}
                    target={cert.url ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/40"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent text-accent-foreground">
                      <Award className="h-5 w-5" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium">{cert.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {cert.issuer} · {cert.year}
                      </p>
                    </div>
                    {cert.url && (
                      <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                    )}
                  </a>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
