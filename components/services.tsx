"use client"

import {
  Gauge,
  LayoutDashboard,
  Lightbulb,
  Rocket,
  Server,
  ShoppingCart,
  Workflow,
  type LucideIcon,
} from "lucide-react"
import { useLanguage } from "@/lib/i18n"
import { services } from "@/lib/data"
import { SectionHeading } from "./section-heading"
import { Reveal } from "./reveal"

const icons: Record<string, LucideIcon> = {
  Rocket,
  LayoutDashboard,
  Server,
  ShoppingCart,
  Workflow,
  Gauge,
  Lightbulb,
}

export function Services() {
  const { dict, t } = useLanguage()

  return (
    <section id="services" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 md:px-6 md:py-28">
      <Reveal>
        <SectionHeading kicker={t(dict.sections.servicesKicker)} title={t(dict.sections.servicesTitle)} />
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => {
          const Icon = icons[service.icon] ?? Rocket
          return (
            <Reveal key={service.id} delay={(i % 3) * 60}>
              <div className="group flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-accent-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold">{t(service.title)}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{t(service.description)}</p>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
