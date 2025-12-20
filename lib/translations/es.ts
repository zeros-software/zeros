export const es = {
  // Header
  nav: {
    services: "Servicios",
    contact: "Contacto",
    getQuote: "Pedir presupuesto",
    openMenu: "Abrir menu",
    home: "Inicio de Zeros",
  },

  // Hero
  hero: {
    builtFor: "Ayudamos a",
    words: ["escalar", "crecer", "acelerar", "tu equipo"],
    description:
      "Zeros desarrolla software para empresas que construyen a escala. Soluciones web, mobile y blockchain que funcionan.",
  },

  // About
  about: {
    title: "Quienes somos",
    description:
      "Somos un equipo de desarrolladores y disenadores, con base en Buenos Aires,",
    argentina: "Argentina",
    descriptionEnd:
      ", que transforma software en tus negocios e ideas, convirtiendo lo que esta en tu mente en codigo y diseno.",
  },

  // Services
  services: {
    title: "Nuestros servicios",
    items: [
      {
        number: "01",
        title: "Desarrollo Web",
        description:
          "Aplicaciones full-stack con React, Next.js, Node.js y bases de datos modernas.",
      },
      {
        number: "02",
        title: "Desarrollo Mobile",
        description:
          "Apps nativas para iOS y Android, ademas de soluciones multiplataforma con React Native.",
      },
      {
        number: "03",
        title: "Blockchain",
        description:
          "Contratos inteligentes, protocolos DeFi y aplicaciones descentralizadas.",
      },
      {
        number: "04",
        title: "Marca & Diseno",
        description: "Identidad visual, diseno UI/UX y sistemas de diseno.",
      },
    ],
  },

  // CTA
  cta: {
    title: "Hablemos de tu proyecto",
  },

  // Footer
  footer: {
    copyright: "Zeros — Buenos Aires, Argentina",
  },

  // Language selector
  language: {
    label: "Idioma",
    en: "Ingles",
    es: "Espanol",
  },

  // Quote page
  quote: {
    title: "Contanos sobre tu proyecto",
    subtitle: "Dejanos saber como podemos ayudarte a alcanzar tus objetivos.",
    form: {
      message: "Que te gustaria construir?",
      messagePlaceholder: "Describe tu proyecto, objetivos y cualquier requerimiento especifico...",
      name: "Tu nombre",
      namePlaceholder: "Juan Perez",
      email: "Tu email",
      emailPlaceholder: "juan@empresa.com",
      company: "Empresa (opcional)",
      companyPlaceholder: "Acme S.A.",
      continue: "Continuar",
      back: "Volver",
      send: "Enviar mensaje",
      sending: "Enviando...",
    },
    success: {
      title: "Mensaje enviado!",
      description: "Gracias por contactarnos. Te responderemos dentro de las 24 horas.",
      backHome: "Volver al inicio",
    },
    error: {
      title: "Algo salio mal",
      description: "Por favor intenta de nuevo o escribinos directamente a hello@zeros.com.ar",
      retry: "Intentar de nuevo",
    },
  },
} as const;
