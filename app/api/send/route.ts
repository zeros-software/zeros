import { Resend } from "resend"
import { QuoteEmail } from "@/components/emails/quote-email"
import { NextRequest } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, message } = await request.json()

    if (!name || !email || !message) {
      return Response.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      )
    }

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
