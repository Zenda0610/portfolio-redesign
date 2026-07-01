"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { useLanguage } from "@/lib/i18n"
import { faqs } from "@/lib/data"
import { SectionHeading } from "./section-heading"
import { Reveal } from "./reveal"

export function Faq() {
  const { dict, t } = useLanguage()
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="mx-auto max-w-3xl scroll-mt-20 px-4 py-20 md:px-6 md:py-28">
      <Reveal>
        <SectionHeading kicker={t(dict.sections.faqKicker)} title={t(dict.sections.faqTitle)} align="center" />
      </Reveal>

      <div className="flex flex-col gap-3">
        {faqs.map((faq, i) => {
          const isOpen = open === i
          return (
            <Reveal key={faq.en ? i : i} delay={i * 50}>
              <div className="overflow-hidden rounded-xl border border-border bg-card">
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-trigger-${i}`}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-medium transition-colors hover:bg-secondary/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  >
                    {t(faq.question)}
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                </h3>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${i}`}
                  className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{t(faq.answer)}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
