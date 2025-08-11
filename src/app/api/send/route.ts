import { Resend } from "resend";
import EmailTemplate from "./EmailTemplate";
import { NextRequest } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json();
  try {
    const { data, error } = await resend.emails.send({
      from: "contact-form@zeros.com.ar",
      to: ["zerossoftware@gmail.com"],
      subject: `Form subsmission from ${name}`,
      react: EmailTemplate({
        name,
        email,
        message,
      }),
    });

    if (error) {
      console.log(error);
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    console.log(error);
    return Response.json({ error }, { status: 500 });
  }
}
