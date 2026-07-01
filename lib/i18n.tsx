"use client"

import { createContext, useContext, useEffect, useState, useCallback } from "react"
import type { Locale } from "./data"

/** UI microcopy (labels, buttons, section titles). Content lives in data.ts */
const dict = {
  nav: {
    about: { es: "Sobre mí", en: "About" },
    stack: { es: "Tecnologías", en: "Stack" },
    experience: { es: "Experiencia", en: "Experience" },
    projects: { es: "Proyectos", en: "Projects" },
    services: { es: "Servicios", en: "Services" },
    education: { es: "Educación", en: "Education" },
    contact: { es: "Contacto", en: "Contact" },
  },
  hero: {
    viewProjects: { es: "Ver proyectos", en: "View projects" },
    downloadCv: { es: "Descargar CV", en: "Download CV" },
    contact: { es: "Contactarme", en: "Get in touch" },
    scroll: { es: "Desplázate", en: "Scroll" },
  },
  sections: {
    aboutTitle: { es: "Sobre mí", en: "About me" },
    aboutKicker: { es: "Quién soy", en: "Who I am" },
    stackTitle: { es: "Tecnologías", en: "Tech stack" },
    stackKicker: { es: "Con qué trabajo", en: "What I work with" },
    expTitle: { es: "Experiencia", en: "Experience" },
    expKicker: { es: "Mi trayectoria", en: "My journey" },
    projectsTitle: { es: "Proyectos destacados", en: "Featured projects" },
    projectsKicker: { es: "Trabajo seleccionado", en: "Selected work" },
    servicesTitle: { es: "Servicios", en: "Services" },
    servicesKicker: { es: "Cómo puedo ayudarte", en: "How I can help" },
    eduTitle: { es: "Educación", en: "Education" },
    eduKicker: { es: "Formación", en: "Background" },
    certsTitle: { es: "Certificaciones", en: "Certifications" },
    githubTitle: { es: "Actividad en GitHub", en: "GitHub activity" },
    githubKicker: { es: "En código abierto", en: "In the open" },
    testimonialsTitle: { es: "Testimonios", en: "Testimonials" },
    testimonialsKicker: { es: "Lo que dicen", en: "What people say" },
    faqTitle: { es: "Preguntas frecuentes", en: "FAQ" },
    faqKicker: { es: "Antes de escribir", en: "Before you write" },
    contactTitle: { es: "Trabajemos juntos", en: "Let's work together" },
    contactKicker: { es: "Contacto", en: "Contact" },
  },
  stack: {
    years: { es: "años", en: "yrs" },
    year: { es: "año", en: "yr" },
  },
  projects: {
    searchPlaceholder: { es: "Buscar proyectos...", en: "Search projects..." },
    all: { es: "Todos", en: "All" },
    noResults: { es: "No se encontraron proyectos.", en: "No projects found." },
    viewDetails: { es: "Ver detalles", en: "View details" },
    liveDemo: { es: "Demo en vivo", en: "Live demo" },
    code: { es: "Código", en: "Code" },
    problem: { es: "Problema que resuelve", en: "Problem it solves" },
    features: { es: "Funcionalidades", en: "Key features" },
    challenges: { es: "Retos técnicos", en: "Technical challenges" },
    learnings: { es: "Aprendizajes", en: "Learnings" },
    architecture: { es: "Arquitectura", en: "Architecture" },
    stack: { es: "Stack", en: "Stack" },
    close: { es: "Cerrar", en: "Close" },
    status: {
      live: { es: "En producción", en: "Live" },
      wip: { es: "En desarrollo", en: "In progress" },
      archived: { es: "Archivado", en: "Archived" },
    },
  },
  contact: {
    name: { es: "Nombre", en: "Name" },
    email: { es: "Correo", en: "Email" },
    subject: { es: "Asunto", en: "Subject" },
    message: { es: "Mensaje", en: "Message" },
    send: { es: "Enviar mensaje", en: "Send message" },
    sending: { es: "Enviando...", en: "Sending..." },
    success: { es: "¡Mensaje enviado! Te responderé pronto.", en: "Message sent! I'll get back to you soon." },
    error: { es: "Algo salió mal. Inténtalo de nuevo.", en: "Something went wrong. Please try again." },
    required: { es: "Este campo es obligatorio", en: "This field is required" },
    invalidEmail: { es: "Correo no válido", en: "Invalid email" },
    location: { es: "Ubicación", en: "Location" },
  },
  footer: {
    rights: { es: "Todos los derechos reservados.", en: "All rights reserved." },
    built: { es: "Diseñado y construido por", en: "Designed and built by" },
    backToTop: { es: "Volver arriba", en: "Back to top" },
  },
  a11y: {
    toggleTheme: { es: "Cambiar tema", en: "Toggle theme" },
    toggleLang: { es: "Cambiar idioma", en: "Toggle language" },
    openMenu: { es: "Abrir menú", en: "Open menu" },
    closeMenu: { es: "Cerrar menú", en: "Close menu" },
  },
} as const

type Ctx = {
  locale: Locale
  setLocale: (l: Locale) => void
  toggleLocale: () => void
  /** translate localized objects from data.ts */
  t: (obj: { es: string; en: string }) => string
  /** access UI dictionary */
  dict: typeof dict
}

const LanguageContext = createContext<Ctx | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("es")

  useEffect(() => {
    const stored = typeof window !== "undefined" ? (localStorage.getItem("locale") as Locale | null) : null
    if (stored === "es" || stored === "en") {
      setLocaleState(stored)
    } else if (typeof navigator !== "undefined" && navigator.language.startsWith("en")) {
      setLocaleState("en")
    }
  }, [])

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l)
    if (typeof window !== "undefined") {
      localStorage.setItem("locale", l)
      document.documentElement.lang = l
    }
  }, [])

  const toggleLocale = useCallback(() => {
    setLocale(locale === "es" ? "en" : "es")
  }, [locale, setLocale])

  const t = useCallback((obj: { es: string; en: string }) => obj[locale], [locale])

  return (
    <LanguageContext.Provider value={{ locale, setLocale, toggleLocale, t, dict }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider")
  return ctx
}
