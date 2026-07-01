"use client"

import { useLanguage } from "@/lib/i18n"
import { techStack } from "@/lib/data"
import { SectionHeading } from "./section-heading"
import { Reveal } from "./reveal"

export function TechStack() {
  const { dict, t } = useLanguage()

  return (
    <section id="stack" className="scroll-mt-20 border-y border-border bg-card/30 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Reveal>
          <SectionHeading kicker={t(dict.sections.stackKicker)} title={t(dict.sections.stackTitle)} />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {techStack.map((cat, i) => (
            <Reveal key={cat.id} delay={i * 60}>
              <div className="group h-full rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40">
                <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  {t(cat.title)}
                </h3>
                <ul className="flex flex-col gap-4">
                  {cat.skills.map((skill) => (
                    <li key={skill.name}>
                      <div className="mb-1.5 flex items-baseline justify-between gap-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="font-mono text-xs text-muted-foreground">
                          {skill.years} {t(skill.years === 1 ? dict.stack.year : dict.stack.years)}
                        </span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary" role="presentation">
                        <div
                          className="h-full rounded-full bg-primary transition-[width] duration-700 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
