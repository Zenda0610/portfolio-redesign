"use client"

import { Quote } from "lucide-react"
import { useLanguage } from "@/lib/i18n"
import { testimonials } from "@/lib/data"
import { SectionHeading } from "./section-heading"
import { Reveal } from "./reveal"

export function Testimonials() {
  const { dict, t } = useLanguage()

  return (
    <section className="scroll-mt-20 border-y border-border bg-card/30 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Reveal>
          <SectionHeading kicker={t(dict.sections.testimonialsKicker)} title={t(dict.sections.testimonialsTitle)} />
        </Reveal>

        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <Reveal key={item.name} delay={i * 80}>
              <figure className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-6">
                <Quote className="h-6 w-6 text-primary" aria-hidden="true" />
                <blockquote className="flex-1 text-pretty leading-relaxed text-foreground">
                  {t(item.quote)}
                </blockquote>
                <figcaption className="flex items-center gap-3 border-t border-border pt-4">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-accent font-mono text-sm text-accent-foreground">
                    {item.name
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")}
                  </span>
                  <div>
                    <div className="text-sm font-medium">{item.name}</div>
                    <div className="text-xs text-muted-foreground">{t(item.role)}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
