export const en = {
  nav: {
    services: "Services",
    work: "Experience",
    contact: "Contact",
    getQuote: "Let's talk",
    openMenu: "Open menu",
    home: "Zeros, home",
  },

  hero: {
    badge: "Software Factory · Buenos Aires",
    line1: "We build software",
    rotatingWords: ["designed", "thought through", "ready"],
    line3: "to scale.",
    description:
      "We are a team of developers and designers that turns ideas into product. Production-grade web, mobile, and blockchain — with excellence standards.",
    cta: "Start a project",
    secondary: "See our work",
  },

  experience: {
    label: "Experience",
    title: "Companies that trusted us to build.",
    description:
      "We work shoulder to shoulder with founders and teams across very different industries. These are some of the products we helped bring to life.",
    viewProject: "View project",
    projects: [
      {
        client: "Santo Restaurants",
        year: "2026",
        sector: "Hospitality · AI",
        title: "Complete digital ecosystem for a luxury restaurant group",
        description:
          "AI-powered operating system, multi-location booking platform, digital payroll with biometric e-signing, and a voice-controlled personal assistant for the founder. All integrated into an ecosystem running Santo's daily operations across CDMX and Los Angeles.",
        tags: ["AI OS", "Web App", "Digital Payroll", "Voice AI"],
        href: "https://santorestaurants.com",
      },
      {
        client: "MedStock",
        year: "2026",
        sector: "HealthTech",
        title: "Smart medication management for geriatric facilities",
        description:
          "Platform that optimizes medication administration, tracks stock in real time, and keeps families informed. Designed alongside nursing and geriatric professionals.",
        tags: ["Web App", "Real-time", "Notifications", "AI"],
        href: "https://medstock.com.ar",
      },
      {
        client: "Guardians of the Ball",
        year: "2025",
        sector: "SportTech · Web3",
        title: "A football metaverse on blockchain",
        description:
          "Hyper-realistic platform connecting fans, clubs, and brands. Digital stadiums, live events, and a loyalty program Guardians ID.",
        tags: ["Blockchain", "NFTs", "Metaverse"],
        href: "https://guardiansoftheball.com",
      },
    ],
  },

  services: {
    label: "What we do",
    title: "A single factory for your entire product cycle.",
    description:
      "From concept to deploy. We accompany every stage with a small, senior, and committed team.",
    items: [
      {
        id: "01",
        title: "Web Development",
        description: "",
      },
      {
        id: "02",
        title: "Mobile Development",
        description: "",
      },
      {
        id: "03",
        title: "Blockchain",
        description: "",
      },
      {
        id: "04",
        title: "Brand & Design",
        description: "",
      },
    ],
  },

  footer: {
    label: "Contact",
    title: "Let's talk about your next project.",
    description:
      "Tell us what you have in mind. We'll get back to you with a clear, no-nonsense proposal.",
    copyright: "Buenos Aires, Argentina",
    navLabel: "Footer navigation",
  },

  language: {
    label: "Language",
    en: "English",
    es: "Spanish",
  },

  quote: {
    title: "Tell us about your project",
    subtitle: "Let us know how we can help you achieve your goals.",
    form: {
      message: "What would you like to build?",
      messagePlaceholder:
        "Describe your project, goals, and any specific requirements...",
      name: "Your name",
      namePlaceholder: "John Doe",
      email: "Your email",
      emailPlaceholder: "john@company.com",
      company: "Company (optional)",
      companyPlaceholder: "Acme Inc.",
      continue: "Continue",
      back: "Back",
      send: "Send message",
      sending: "Sending...",
    },
    success: {
      title: "Message sent!",
      description:
        "Thanks for reaching out. We'll get back to you within 24 hours.",
      backHome: "Back to home",
    },
    error: {
      title: "Something went wrong",
      description:
        "Please try again or email us directly at hello@zeros.com.ar",
      retry: "Try again",
    },
  },
} as const
