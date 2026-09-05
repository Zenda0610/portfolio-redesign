"use client"

import { useActionState, useEffect, useRef, useState } from "react"
import { useFormStatus } from "react-dom"
import { CheckCircle2, Mail, MapPin, MessageCircle, Send, XCircle } from "lucide-react"
import { Github, Linkedin } from "@/components/brand-icons"
import { useLanguage } from "@/lib/i18n"
import { profile } from "@/lib/data"
import { submitContact, type ContactState } from "@/app/actions"
import { SectionHeading } from "./section-heading"
import { Reveal } from "./reveal"

const initialState: ContactState = { ok: false, message: null }

export function Contact() {
  const { dict, t } = useLanguage()
  const [state, formAction] = useActionState(submitContact, initialState)
  const formRef = useRef<HTMLFormElement>(null)
  const [toast, setToast] = useState<"success" | "error" | null>(null)

  useEffect(() => {
    if (state.message === "success") {
      setToast("success")
      formRef.current?.reset()
    } else if (state.message === "error") {
      setToast("error")
    }
    if (state.message) {
      const timeout = setTimeout(() => setToast(null), 4000)
      return () => clearTimeout(timeout)
    }
  }, [state])

  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 md:px-6 md:py-28">
      <Reveal>
        <SectionHeading kicker={t(dict.sections.contactKicker)} title={t(dict.sections.contactTitle)} />
      </Reveal>

      <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        {/* Contact channels */}
        <Reveal className="flex flex-col gap-4">
          <ContactLink icon={<Mail className="h-5 w-5" />} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
          <ContactLink
            icon={<MessageCircle className="h-5 w-5" />}
            label="WhatsApp"
            value={`+${profile.whatsapp}`}
            href={`https://wa.me/${profile.whatsapp}`}
          />
          <ContactLink icon={<Github className="h-5 w-5" />} label="GitHub" value={profile.socials.github.replace(/^https?:\/\//, "")} href={profile.socials.github} />
          <ContactLink icon={<Linkedin className="h-5 w-5" />} label="LinkedIn" value={profile.socials.linkedin.replace(/^https?:\/\//, "")} href={profile.socials.linkedin} />
          <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-4">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent text-accent-foreground">
              <MapPin className="h-5 w-5" />
            </span>
            <div>
              <div className="text-xs text-muted-foreground">{t(dict.contact.location)}</div>
              <div className="text-sm font-medium">{t(profile.location)}</div>
            </div>
          </div>
        </Reveal>

        {/* Form */}
        <Reveal delay={100}>
          <form ref={formRef} action={formAction} className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6">
            {/* Honeypot (hidden from users & screen readers) */}
            <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

            <div className="grid gap-4 sm:grid-cols-2">
              <Field name="name" label={t(dict.contact.name)} error={state.fieldErrors?.name ? t(dict.contact.required) : undefined} />
              <Field name="email" type="email" label={t(dict.contact.email)} error={state.fieldErrors?.email ? t(dict.contact.invalidEmail) : undefined} />
            </div>
            <Field name="subject" label={t(dict.contact.subject)} error={state.fieldErrors?.subject ? t(dict.contact.required) : undefined} />
            <Field name="message" label={t(dict.contact.message)} textarea error={state.fieldErrors?.message ? t(dict.contact.required) : undefined} />

            <SubmitButton />
          </form>
        </Reveal>
      </div>

      {/* Toast */}
      <div aria-live="polite" className="pointer-events-none fixed bottom-6 left-1/2 z-[70] -translate-x-1/2">
        {toast && (
          <div
            className={`pointer-events-auto flex items-center gap-2 rounded-lg border px-4 py-3 text-sm shadow-lg glass ${
              toast === "success" ? "border-primary/40 text-foreground" : "border-destructive/40 text-foreground"
            }`}
          >
            {toast === "success" ? (
              <CheckCircle2 className="h-4 w-4 text-primary" />
            ) : (
              <XCircle className="h-4 w-4 text-destructive" />
            )}
            {toast === "success" ? t(dict.contact.success) : t(dict.contact.error)}
          </div>
        )}
      </div>
    </section>
  )
}

function SubmitButton() {
  const { dict, t } = useLanguage()
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
    >
      <Send className="h-4 w-4" />
      {pending ? t(dict.contact.sending) : t(dict.contact.send)}
    </button>
  )
}

function Field({
  name,
  label,
  type = "text",
  textarea = false,
  error,
}: {
  name: string
  label: string
  type?: string
  textarea?: boolean
  error?: string
}) {
  const base =
    "w-full rounded-lg border bg-background px-3 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-ring/40"
  return (
    <div className={textarea ? "flex flex-col gap-1.5" : "flex flex-col gap-1.5"}>
      <label htmlFor={name} className="text-sm font-medium">
        {label}
      </label>
      {textarea ? (
        <textarea
          id={name}
          name={name}
          rows={5}
          aria-invalid={!!error}
          aria-describedby={error ? `${name}-error` : undefined}
          className={`${base} resize-y ${error ? "border-destructive" : "border-border"}`}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          aria-invalid={!!error}
          aria-describedby={error ? `${name}-error` : undefined}
          className={`${base} ${error ? "border-destructive" : "border-border"}`}
        />
      )}
      {error && (
        <span id={`${name}-error`} className="text-xs text-destructive">
          {error}
        </span>
      )}
    </div>
  )
}

function ContactLink({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode
  label: string
  value: string
  href: string
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/40"
    >
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent text-accent-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        {icon}
      </span>
      <div className="min-w-0">
        <div className="text-xs text-muted-foreground">{label}</div>
        <div className="truncate text-sm font-medium">{value}</div>
      </div>
    </a>
  )
}
