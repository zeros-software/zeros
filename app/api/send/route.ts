import { Resend } from "resend"
import { QuoteEmail } from "@/components/emails/quote-email"
import { NextRequest } from "next/server"

function isValidEmail(email: string) {
  if (email.length > 254 || email.includes("..")) return false

  const [localPart, domain, ...extraParts] = email.split("@")

  return (
    extraParts.length === 0 &&
    Boolean(localPart) &&
    localPart.length <= 64 &&
    /^[^\s@]+$/.test(localPart) &&
    /^[^\s@]+\.[^\s@]+$/.test(domain ?? "")
  )
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const name = typeof body.name === "string" ? body.name.trim() : ""
    const email = typeof body.email === "string" ? body.email.trim() : ""
    const company = typeof body.company === "string" ? body.company.trim() : ""
    const message = typeof body.message === "string" ? body.message.trim() : ""

    if (!name || !email || !message) {
      return Response.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      )
    }

    if (!isValidEmail(email)) {
      return Response.json(
        { error: "Please provide a valid email address" },
        { status: 400 }
      )
    }

    if (!process.env.RESEND_API_KEY) {
      return Response.json(
        { error: "Email service not configured" },
        { status: 500 }
      )
    }

    const resend = new Resend(process.env.RESEND_API_KEY)
    const { data, error } = await resend.emails.send({
      from: "contact-form@zeros.com.ar",
      to: ["zerossoftware@gmail.com"],
      replyTo: email,
      subject: `Quote request from ${name}${company ? ` (${company})` : ""}`,
      react: QuoteEmail({
        name,
        email,
        company,
        message,
      }),
    })

    if (error) {
      console.error("Resend error:", error)
      return Response.json({ error: error.message }, { status: 500 })
    }

    return Response.json({ success: true, id: data?.id })
  } catch (error) {
    console.error("API error:", error)
    return Response.json(
      { error: "Failed to send email" },
      { status: 500 }
    )
  }
}
