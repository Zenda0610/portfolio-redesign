"use client"

import Image from "next/image"
import { ArrowUpRight, Github } from "lucide-react"
import { useLanguage } from "@/lib/i18n"
import type { Project } from "@/lib/data"
import { StatusBadge } from "./status-badge"

export function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  const { dict, t } = useLanguage()

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl">
      <button
        type="button"
        onClick={onOpen}
        className="relative aspect-video w-full overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        aria-label={`${t(dict.projects.viewDetails)}: ${project.title}`}
      >
        <Image
          src={project.image || "/placeholder.svg"}
          alt={`${project.title} — ${t(project.summary)}`}
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3">
          <StatusBadge status={project.status} />
        </span>
      </button>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <span className="text-xs font-medium uppercase tracking-wider text-primary">{t(project.category)}</span>
            <h3 className="mt-0.5 text-lg font-semibold">{project.title}</h3>
          </div>
        </div>

        <p className="text-sm leading-relaxed text-muted-foreground">{t(project.summary)}</p>

        <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
          {project.tech.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-border bg-secondary px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 pt-2">
          <button
            type="button"
            onClick={onOpen}
            className="inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            {t(dict.projects.viewDetails)}
            <ArrowUpRight className="h-4 w-4" />
          </button>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} — ${t(dict.projects.code)}`}
              className="ml-auto text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
