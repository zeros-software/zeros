import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Hr,
} from "@react-email/components"

interface QuoteEmailProps {
  name: string
  email: string
  company?: string
  message: string
}

export function QuoteEmail({ name, email, company, message }: QuoteEmailProps) {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>New Quote Request</Heading>
          <Text style={subheading}>
            You have received a new quote request from the Zeros website.
          </Text>
          <Hr style={hr} />
          <Section style={section}>
            <Text style={label}>Name</Text>
            <Text style={value}>{name}</Text>
          </Section>
          <Section style={section}>
            <Text style={label}>Email</Text>
            <Text style={value}>{email}</Text>
          </Section>
          {company && (
            <Section style={section}>
              <Text style={label}>Company</Text>
              <Text style={value}>{company}</Text>
            </Section>
          )}
          <Hr style={hr} />
          <Section style={section}>
            <Text style={label}>Message</Text>
            <Text style={messageStyle}>{message}</Text>
          </Section>
          <Hr style={hr} />
          <Text style={footer}>
            Reply directly to this email to respond to {name}.
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

const main = {
  backgroundColor: "#0a0a0a",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
}

const container = {
  margin: "0 auto",
  padding: "40px 20px",
  maxWidth: "560px",
}

const heading = {
  color: "#ffffff",
  fontSize: "28px",
  fontWeight: "700",
  margin: "0 0 8px",
}

const subheading = {
  color: "#888888",
  fontSize: "16px",
  margin: "0 0 32px",
}

const hr = {
  borderColor: "#333333",
  margin: "24px 0",
}

const section = {
  marginBottom: "16px",
}

const label = {
  color: "#666666",
  fontSize: "12px",
  fontWeight: "600",
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
  margin: "0 0 4px",
}

const value = {
  color: "#ffffff",
  fontSize: "16px",
  margin: "0",
}

const messageStyle = {
  color: "#ffffff",
  fontSize: "16px",
  lineHeight: "1.6",
  margin: "0",
  whiteSpace: "pre-wrap" as const,
}

const footer = {
  color: "#666666",
  fontSize: "14px",
  margin: "0",
}
