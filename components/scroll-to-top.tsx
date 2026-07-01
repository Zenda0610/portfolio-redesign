"use client"

import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

export function ScrollToTop() {
  const { dict, t } = useLanguage()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label={t(dict.footer.backToTop)}
      className={`fixed bottom-6 right-6 z-40 grid h-11 w-11 place-items-center rounded-full border border-border bg-card text-foreground shadow-lg transition-all duration-300 hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  )
}
