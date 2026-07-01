"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Menu, Moon, Sun, X } from "lucide-react"
import { useLanguage } from "@/lib/i18n"
import { profile } from "@/lib/data"
import { cn } from "@/lib/utils"

const sections = ["about", "stack", "experience", "projects", "services", "education", "contact"] as const

export function Navbar() {
  const { dict, t, locale, toggleLocale } = useLanguage()
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string>("")

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: "-45% 0px -50% 0px" },
    )
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const initials = profile.name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "glass border-b border-border/60" : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 md:px-6" aria-label="Primary">
        <a
          href="#top"
          className="flex items-center gap-2 rounded-md text-sm font-semibold tracking-tight focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          <span className="grid h-8 w-8 place-items-center rounded-md bg-primary font-mono text-primary-foreground">
            {initials}
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {sections.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={cn(
                  "rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
                  active === id && "text-foreground",
                )}
                aria-current={active === id ? "true" : undefined}
              >
                {t(dict.nav[id])}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={toggleLocale}
            className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            aria-label={t(dict.a11y.toggleLang)}
          >
            {locale.toUpperCase()}
          </button>
          <button
            type="button"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="grid h-9 w-9 place-items-center rounded-md text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            aria-label={t(dict.a11y.toggleTheme)}
          >
            {mounted && resolvedTheme === "dark" ? (
              <Sun className="h-[18px] w-[18px]" />
            ) : (
              <Moon className="h-[18px] w-[18px]" />
            )}
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-md text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring lg:hidden"
            aria-label={open ? t(dict.a11y.closeMenu) : t(dict.a11y.openMenu)}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="glass border-t border-border/60 lg:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4">
            {sections.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2.5 text-base text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {t(dict.nav[id])}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
