"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import { Search } from "lucide-react"
import { useLanguage } from "@/lib/i18n"
import { projects as allProjects, type Project } from "@/lib/data"
import { SectionHeading } from "./section-heading"
import { Reveal } from "./reveal"
import { ProjectCard } from "./project-card"
import { ProjectModal } from "./project-modal"

export function Projects() {
  const { dict, t } = useLanguage()
  const [query, setQuery] = useState("")
  const [activeTech, setActiveTech] = useState<string>("all")
  const [selected, setSelected] = useState<Project | null>(null)

  const techs = useMemo(() => {
    const set = new Set<string>()
    allProjects.forEach((p) => p.tech.forEach((tech) => set.add(tech)))
    return ["all", ...Array.from(set).sort()]
  }, [])

  const filtered = useMemo(() => {
    return allProjects.filter((p) => {
      const matchesTech = activeTech === "all" || p.tech.includes(activeTech)
      const q = query.trim().toLowerCase()
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        t(p.summary).toLowerCase().includes(q) ||
        p.tech.some((tech) => tech.toLowerCase().includes(q))
      return matchesTech && matchesQuery
    })
  }, [query, activeTech, t])

  return (
    <section id="projects" className="scroll-mt-20 border-y border-border bg-card/30 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Reveal>
          <SectionHeading kicker={t(dict.sections.projectsKicker)} title={t(dict.sections.projectsTitle)} />
        </Reveal>

        <Reveal className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="relative w-full md:max-w-xs">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t(dict.projects.searchPlaceholder)}
              aria-label={t(dict.projects.searchPlaceholder)}
              className="w-full rounded-lg border border-border bg-card py-2.5 pl-9 pr-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-ring/40"
            />
          </div>

          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by technology">
            {techs.map((tech) => (
              <button
                key={tech}
                type="button"
                onClick={() => setActiveTech(tech)}
                aria-pressed={activeTech === tech}
                className={
                  "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring " +
                  (activeTech === tech
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground")
                }
              >
                {tech === "all" ? t(dict.projects.all) : tech}
              </button>
            ))}
          </div>
        </Reveal>

        {filtered.length === 0 ? (
          <p className="py-16 text-center text-muted-foreground">{t(dict.projects.noResults)}</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2">
            {filtered.map((project, i) => (
              <Reveal key={project.slug} delay={(i % 2) * 80}>
                <ProjectCard project={project} onOpen={() => setSelected(project)} />
              </Reveal>
            ))}
          </div>
        )}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
