"use server"

export type ContactState = {
  ok: boolean
  message: "success" | "error" | null
  fieldErrors?: Partial<Record<"name" | "email" | "subject" | "message", boolean>>
}

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function submitContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim()
  const email = String(formData.get("email") ?? "").trim()
  const subject = String(formData.get("subject") ?? "").trim()
  const message = String(formData.get("message") ?? "").trim()
  // Honeypot: bots fill hidden fields; humans don't.
  const honeypot = String(formData.get("company") ?? "").trim()

  const fieldErrors = {
    name: !name,
    email: !email || !emailRe.test(email),
    subject: !subject,
    message: message.length < 10,
  }

  if (Object.values(fieldErrors).some(Boolean) || honeypot) {
    return { ok: false, message: honeypot ? "success" : "error", fieldErrors }
  }

  try {
    // ────────────────────────────────────────────────────────────
    // Wire your email provider here (Resend, Nodemailer, etc.) or
    // save to a database. Example with Resend:
    //
    //   import { Resend } from "resend"
    //   const resend = new Resend(process.env.RESEND_API_KEY)
    //   await resend.emails.send({
    //     from: "portfolio@yourdomain.com",
    //     to: "hello@alexrivera.dev",
    //     subject: `[Portfolio] ${subject}`,
    //     replyTo: email,
    //     text: `${name} <${email}>\n\n${message}`,
    //   })
    // ────────────────────────────────────────────────────────────
    console.log("[v0] Contact submission:", { name, email, subject })
    return { ok: true, message: "success" }
  } catch {
    return { ok: false, message: "error" }
  }
}
