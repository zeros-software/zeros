import { NextRequest, NextResponse } from "next/server"
import { Resend, type WebhookEventPayload } from "resend"

const forwardTo = "zerossoftware@gmail.com"
const forwardFrom = "inbox@zeros.com.ar"

export async function POST(request: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY
  const webhookSecret = process.env.RESEND_WEBHOOK_SECRET

  if (!apiKey || !webhookSecret) {
    console.error("Inbound email service is not configured")
    return NextResponse.json(
      { error: "Inbound email service not configured" },
      { status: 500 }
    )
  }

  const payload = await request.text()
  const resend = new Resend(apiKey)
  const webhookId = request.headers.get("svix-id")
  const webhookTimestamp = request.headers.get("svix-timestamp")
  const webhookSignature = request.headers.get("svix-signature")

  if (!webhookId || !webhookTimestamp || !webhookSignature) {
    return NextResponse.json(
      { error: "Missing webhook signature headers" },
      { status: 400 }
    )
  }

  let event: WebhookEventPayload
  try {
    event = resend.webhooks.verify({
      payload,
      headers: {
        id: webhookId,
        timestamp: webhookTimestamp,
        signature: webhookSignature,
      },
      webhookSecret,
    })
  } catch (error) {
    console.error("Inbound webhook verification error:", error)
    return NextResponse.json({ error: "Invalid webhook" }, { status: 400 })
  }

  if (event.type !== "email.received") {
    return NextResponse.json({ ok: true })
  }

  const { data, error } = await resend.emails.receiving.forward(
    {
      emailId: event.data.email_id,
      to: forwardTo,
      from: forwardFrom,
    },
    { idempotencyKey: webhookId }
  )

  if (error) {
    console.error("Error forwarding received email:", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ ok: true, forwarded: data })
}
