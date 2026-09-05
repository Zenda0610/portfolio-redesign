"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { ExternalLink, X } from "lucide-react"
import { Github } from "@/components/brand-icons"
import { useLanguage } from "@/lib/i18n"
import type { Project } from "@/lib/data"
import { StatusBadge } from "./status-badge"

export function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const { dict, t } = useLanguage()
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!project) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    closeRef.current?.focus()
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center overflow-y-auto bg-background/70 p-0 backdrop-blur-sm sm:items-center sm:p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div
        className="relative w-full max-w-2xl overflow-hidden rounded-t-2xl border border-border bg-card shadow-2xl sm:rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-video w-full">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={`${project.title} — ${t(project.summary)}`}
            fill
            sizes="(max-width: 640px) 100vw, 42rem"
            className="object-cover"
          />
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label={t(dict.projects.close)}
            className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-background/80 text-foreground backdrop-blur transition-colors hover:bg-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            <X className="h-5 w-5" />
          </button>
          <span className="absolute left-3 top-3">
            <StatusBadge status={project.status} />
          </span>
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-6">
          <span className="text-xs font-medium uppercase tracking-wider text-primary">{t(project.category)}</span>
          <h3 id="project-modal-title" className="mt-1 text-2xl font-semibold">
            {project.title}
          </h3>
          <p className="mt-3 leading-relaxed text-muted-foreground">{t(project.description)}</p>

          <Detail label={t(dict.projects.problem)}>{t(project.problem)}</Detail>

          <div className="mt-5">
            <h4 className="mb-2 text-sm font-semibold text-foreground">{t(dict.projects.features)}</h4>
            <ul className="flex flex-col gap-1.5">
              {project.features.map((f) => (
                <li key={f.en} className="flex gap-2 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {t(f)}
                </li>
              ))}
            </ul>
          </div>

          <Detail label={t(dict.projects.architecture)}>{t(project.architecture)}</Detail>
          <Detail label={t(dict.projects.challenges)}>{t(project.challenges)}</Detail>
          <Detail label={t(dict.projects.learnings)}>{t(project.learnings)}</Detail>

          <div className="mt-5">
            <h4 className="mb-2 text-sm font-semibold text-foreground">{t(dict.projects.stack)}</h4>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-border bg-secondary px-2.5 py-1 font-mono text-xs text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                <ExternalLink className="h-4 w-4" />
                {t(dict.projects.liveDemo)}
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
              >
                <Github className="h-4 w-4" />
                {t(dict.projects.code)}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function Detail({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mt-5">
      <h4 className="mb-1.5 text-sm font-semibold text-foreground">{label}</h4>
      <p className="text-sm leading-relaxed text-muted-foreground">{children}</p>
    </div>
  )
}
