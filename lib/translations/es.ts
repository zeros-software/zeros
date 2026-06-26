export const es = {
  nav: {
    services: "Servicios",
    work: "Experiencia",
    contact: "Contacto",
    getQuote: "Hablemos",
    openMenu: "Abrir menú",
    home: "Zeros, inicio",
  },

  hero: {
    badge: "Software Factory · Buenos Aires",
    line1: "Construimos software",
    rotatingWords: ["pensado", "diseñado", "listo"],
    line3: "para escalar.",
    description:
      "Somos un equipo de desarrolladores y diseñadores que transforma ideas en producto. Web, mobile y blockchain de nivel producción, con estándares de excelencia.",
    cta: "Iniciar un proyecto",
    secondary: "Ver nuestro trabajo",
  },

  experience: {
    label: "Experiencia",
    title: "Empresas que confiaron en nosotros para construir.",
    description:
      "Trabajamos hombro a hombro con founders y equipos en industrias muy distintas. Estos son algunos de los productos que ayudamos a hacer realidad.",
    viewProject: "Ver proyecto",
    projects: [
      {
        client: "Santo Restaurants",
        year: "2026",
        sector: "Hospitality · AI",
        title: "Ecosistema digital completo para un grupo gastronómico de lujo",
        description:
          "Sistema operativo con IA, plataforma de reservas multi-sede, firma digital de nómina con evidencia biométrica, y asistente personal con voz para el founder. Todo integrado en un ecosistema que corre las operaciones diarias de Santo en CDMX y Los Ángeles.",
        tags: ["AI OS", "Web App", "Nómina Digital", "Voice AI"],
        href: "https://santorestaurants.com",
      },
      {
        client: "MedStock",
        year: "2026",
        sector: "HealthTech",
        title: "Gestión inteligente de medicación para geriátricos",
        description:
          "Plataforma que optimiza la administración de medicamentos, controla el stock en tiempo real y mantiene informadas a las familias. Diseñada junto a profesionales de enfermería y geriatría.",
        tags: ["Web App", "Tiempo real", "Notificaciones", "IA"],
        href: "https://medstock.com.ar",
      },
      {
        client: "Guardians of the Ball",
        year: "2025",
        sector: "SportTech · Web3",
        title: "Un metaverso del fútbol sobre blockchain",
        description:
          "Plataforma hiper-realista que conecta fans, clubes y marcas. Estadios digitales, eventos en vivo y un programa de fidelidad Guardians ID.",
        tags: ["Blockchain", "NFTs", "Metaverso"],
        href: "https://guardiansoftheball.com",
      },
    ],
  },

  services: {
    label: "Qué hacemos",
    title: "Una sola fábrica para todo el ciclo de tu producto.",
    description:
      "Del concepto al deploy. Acompañamos cada etapa con un equipo chico, senior y comprometido.",
    items: [
      {
        id: "01",
        title: "Desarrollo Web",
        description: "",
      },
      {
        id: "02",
        title: "Desarrollo Mobile",
        description: "",
      },
      {
        id: "03",
        title: "Blockchain",
        description: "",
      },
      {
        id: "04",
        title: "Marca & Diseño",
        description: "",
      },
    ],
  },

  footer: {
    label: "Contacto",
    title: "Hablemos de tu próximo proyecto.",
    description:
      "Contanos qué tenés en mente. Te respondemos con una propuesta clara y sin vueltas.",
    copyright: "Buenos Aires, Argentina",
    navLabel: "Pie de página",
  },

  language: {
    label: "Idioma",
    en: "Inglés",
    es: "Español",
  },

  quote: {
    title: "Contanos sobre tu proyecto",
    subtitle: "Dejanos saber cómo podemos ayudarte a alcanzar tus objetivos.",
    form: {
      message: "¿Qué te gustaría construir?",
      messagePlaceholder:
        "Describí tu proyecto, objetivos y cualquier requerimiento específico...",
      name: "Tu nombre",
      namePlaceholder: "Juan Pérez",
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
      title: "¡Mensaje enviado!",
      description:
        "Gracias por contactarnos. Te responderemos dentro de las 24 horas.",
      backHome: "Volver al inicio",
    },
    error: {
      title: "Algo salió mal",
      description:
        "Por favor intentá de nuevo o escribinos directamente a hello@zeros.com.ar",
      retry: "Intentar de nuevo",
    },
  },
} as const
