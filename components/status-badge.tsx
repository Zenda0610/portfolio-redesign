"use client"

import { useLanguage } from "@/lib/i18n"
import type { Project } from "@/lib/data"

const styles: Record<Project["status"], string> = {
  live: "bg-primary/90 text-primary-foreground",
  wip: "bg-accent text-accent-foreground",
  archived: "bg-secondary text-secondary-foreground",
}

export function StatusBadge({ status }: { status: Project["status"] }) {
  const { dict, t } = useLanguage()
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium backdrop-blur ${styles[status]}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current opacity-80" />
      {t(dict.projects.status[status])}
    </span>
  )
}
