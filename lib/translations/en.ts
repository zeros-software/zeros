export const en = {
  // Header
  nav: {
    services: "Services",
    contact: "Contact",
    getQuote: "Get a quote",
    openMenu: "Open menu",
    home: "Zeros home",
  },

  // Hero
  hero: {
    builtFor: "Built for",
    words: ["Scale", "Growth", "Speed", "You"],
    description:
      "Zeros delivers production-ready software for companies building at scale. Web, mobile, and blockchain solutions that work.",
  },

  // About
  about: {
    title: "Who are we",
    description:
      "We are a team of developers and designers, based in Buenos Aires,",
    argentina: "Argentina",
    descriptionEnd:
      ", who factors software into your businesses and ideas, transforming what's in your mind to code and design.",
  },

  // Services
  services: {
    title: "Our services",
    items: [
      {
        number: "01",
        title: "Web Development",
        description:
          "Full-stack applications with React, Next.js, Node.js, and modern databases.",
      },
      {
        number: "02",
        title: "Mobile Development",
        description:
          "Native iOS and Android apps, plus cross-platform solutions with React Native.",
      },
      {
        number: "03",
        title: "Blockchain",
        description:
          "Smart contracts, DeFi protocols, and decentralized applications.",
      },
      {
        number: "04",
        title: "Brand & Design",
        description: "Visual identity, UI/UX design, and design systems.",
      },
    ],
  },

  // CTA
  cta: {
    title: "Let's talk about your project",
  },

  // Footer
  footer: {
    copyright: "Zeros — Buenos Aires, Argentina",
  },

  // Language selector
  language: {
    label: "Language",
    en: "English",
    es: "Spanish",
  },

  // Quote page
  quote: {
    title: "Tell us about your project",
    subtitle: "Let us know how we can help you achieve your goals.",
    form: {
      message: "What would you like to build?",
      messagePlaceholder: "Describe your project, goals, and any specific requirements...",
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
      description: "Thanks for reaching out. We'll get back to you within 24 hours.",
      backHome: "Back to home",
    },
    error: {
      title: "Something went wrong",
      description: "Please try again or email us directly at hello@zeros.com.ar",
      retry: "Try again",
    },
  },
} as const
