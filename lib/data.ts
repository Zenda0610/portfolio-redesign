/**
 * ============================================================
 *  PORTFOLIO CONTENT — SINGLE SOURCE OF TRUTH
 * ============================================================
 *  Edit everything about "you" here. Text fields that differ
 *  by language use the shape { es: string; en: string }.
 *  Replace the sample data with your real information.
 * ============================================================
 */

export type Locale = "es" | "en"
export type Localized = Record<Locale, string>

export const profile = {
  name: "Alex Rivera",
  // Shown in the hero, rotating between languages
  role: {
    es: "Desarrollador Full Stack",
    en: "Full Stack Developer",
  } satisfies Localized,
  tagline: {
    es: "Construyo productos web rápidos, accesibles y escalables de principio a fin.",
    en: "I build fast, accessible and scalable web products from end to end.",
  } satisfies Localized,
  location: {
    es: "Ciudad de México, MX (remoto)",
    en: "Mexico City, MX (remote)",
  } satisfies Localized,
  availability: {
    es: "Disponible para nuevos proyectos",
    en: "Available for new projects",
  } satisfies Localized,
  avatar: "/avatar.png",
  email: "hello@alexrivera.dev",
  phone: "+52 55 0000 0000",
  whatsapp: "5255000000000", // digits only, international format
  cv: {
    es: "/cv-alex-rivera-es.pdf",
    en: "/cv-alex-rivera-en.pdf",
  } satisfies Localized,
  githubUser: "vercel",
  socials: {
    github: "https://github.com/vercel",
    linkedin: "https://linkedin.com/in/example",
    x: "https://x.com/example",
    dribbble: "",
  },
}

export const about = {
  intro: {
    es: "Soy un desarrollador full stack con más de 5 años creando aplicaciones web que combinan un diseño cuidado con una ingeniería sólida. Me apasiona el punto donde el producto, la experiencia de usuario y el rendimiento se encuentran.",
    en: "I'm a full stack developer with 5+ years building web applications that blend thoughtful design with solid engineering. I love the intersection of product, user experience and performance.",
  } satisfies Localized,
  story: {
    es: "Empecé escribiendo HTML y CSS por curiosidad y terminé enamorándome de resolver problemas complejos con código limpio. Hoy trabajo de extremo a extremo: desde el modelado de datos y las APIs hasta interfaces pulidas y accesibles.",
    en: "I started writing HTML and CSS out of curiosity and ended up falling in love with solving complex problems through clean code. Today I work end to end: from data modeling and APIs to polished, accessible interfaces.",
  } satisfies Localized,
  philosophy: {
    es: "Creo en el software simple, medible y mantenible. Menos magia, más claridad. La mejor arquitectura es la que tu equipo puede entender y evolucionar.",
    en: "I believe in software that is simple, measurable and maintainable. Less magic, more clarity. The best architecture is the one your team can understand and evolve.",
  } satisfies Localized,
  strengths: [
    { es: "Arquitectura escalable", en: "Scalable architecture" },
    { es: "Rendimiento y Core Web Vitals", en: "Performance & Core Web Vitals" },
    { es: "Accesibilidad (WCAG)", en: "Accessibility (WCAG)" },
    { es: "Diseño de APIs", en: "API design" },
    { es: "UI/UX de producto", en: "Product UI/UX" },
    { es: "Mentoría técnica", en: "Technical mentoring" },
  ] satisfies Localized[],
  interests: {
    es: "Sistemas de diseño, edge computing, IA aplicada, DX y código abierto.",
    en: "Design systems, edge computing, applied AI, DX and open source.",
  } satisfies Localized,
  stats: [
    { value: "5+", label: { es: "Años de experiencia", en: "Years of experience" } },
    { value: "40+", label: { es: "Proyectos entregados", en: "Projects delivered" } },
    { value: "20+", label: { es: "Clientes satisfechos", en: "Happy clients" } },
    { value: "99", label: { es: "Puntaje Lighthouse", en: "Lighthouse score" } },
  ] as { value: string; label: Localized }[],
}

export type SkillCategory = {
  id: string
  title: Localized
  skills: { name: string; level: number; years: number }[]
}

export const techStack: SkillCategory[] = [
  {
    id: "frontend",
    title: { es: "Frontend", en: "Frontend" },
    skills: [
      { name: "React", level: 95, years: 5 },
      { name: "Next.js", level: 92, years: 4 },
      { name: "TypeScript", level: 90, years: 4 },
      { name: "Tailwind CSS", level: 93, years: 3 },
      { name: "Vue", level: 70, years: 2 },
    ],
  },
  {
    id: "backend",
    title: { es: "Backend", en: "Backend" },
    skills: [
      { name: "Node.js", level: 90, years: 5 },
      { name: "Python", level: 78, years: 3 },
      { name: "Go", level: 65, years: 2 },
      { name: "GraphQL", level: 80, years: 3 },
      { name: "tRPC", level: 82, years: 2 },
    ],
  },
  {
    id: "databases",
    title: { es: "Bases de datos", en: "Databases" },
    skills: [
      { name: "PostgreSQL", level: 88, years: 4 },
      { name: "MongoDB", level: 75, years: 3 },
      { name: "Redis", level: 78, years: 3 },
      { name: "Prisma", level: 85, years: 3 },
    ],
  },
  {
    id: "cloud",
    title: { es: "Cloud", en: "Cloud" },
    skills: [
      { name: "Vercel", level: 92, years: 4 },
      { name: "AWS", level: 78, years: 3 },
      { name: "Cloudflare", level: 74, years: 2 },
    ],
  },
  {
    id: "devops",
    title: { es: "DevOps", en: "DevOps" },
    skills: [
      { name: "Docker", level: 80, years: 3 },
      { name: "GitHub Actions", level: 85, years: 3 },
      { name: "Kubernetes", level: 60, years: 1 },
    ],
  },
  {
    id: "tools",
    title: { es: "Herramientas", en: "Tools" },
    skills: [
      { name: "Git", level: 95, years: 5 },
      { name: "Jest / Vitest", level: 82, years: 3 },
      { name: "Playwright", level: 76, years: 2 },
    ],
  },
  {
    id: "design",
    title: { es: "Diseño", en: "Design" },
    skills: [
      { name: "Figma", level: 84, years: 4 },
      { name: "Design Systems", level: 80, years: 3 },
    ],
  },
]

export type Experience = {
  company: string
  role: Localized
  period: Localized
  current?: boolean
  description: Localized
  achievements: Localized[]
  tech: string[]
}

export const experience: Experience[] = [
  {
    company: "Northwind Labs",
    role: { es: "Senior Full Stack Developer", en: "Senior Full Stack Developer" },
    period: { es: "2023 — Presente", en: "2023 — Present" },
    current: true,
    description: {
      es: "Lidero el desarrollo de la plataforma SaaS principal y su sistema de diseño.",
      en: "Leading development of the core SaaS platform and its design system.",
    },
    achievements: [
      { es: "Reduje el tiempo de carga (LCP) un 45% migrando a Next.js App Router.", en: "Cut load time (LCP) by 45% migrating to the Next.js App Router." },
      { es: "Diseñé un sistema de diseño usado por 6 equipos.", en: "Built a design system used by 6 teams." },
      { es: "Mentoré a 4 desarrolladores junior.", en: "Mentored 4 junior developers." },
    ],
    tech: ["Next.js", "TypeScript", "PostgreSQL", "AWS"],
  },
  {
    company: "Pixel Foundry",
    role: { es: "Full Stack Developer", en: "Full Stack Developer" },
    period: { es: "2021 — 2023", en: "2021 — 2023" },
    description: {
      es: "Desarrollé aplicaciones web a medida para clientes de e-commerce y fintech.",
      en: "Built custom web applications for e-commerce and fintech clients.",
    },
    achievements: [
      { es: "Entregué 15+ proyectos con un 98% de satisfacción del cliente.", en: "Delivered 15+ projects with 98% client satisfaction." },
      { es: "Implementé CI/CD que redujo los despliegues a minutos.", en: "Implemented CI/CD that reduced deploys to minutes." },
    ],
    tech: ["React", "Node.js", "MongoDB", "Docker"],
  },
  {
    company: "Freelance",
    role: { es: "Desarrollador Web", en: "Web Developer" },
    period: { es: "2020 — 2021", en: "2020 — 2021" },
    description: {
      es: "Diseñé y construí sitios y landing pages de alto rendimiento para pymes.",
      en: "Designed and built high-performance sites and landing pages for SMBs.",
    },
    achievements: [
      { es: "Aumenté las conversiones de clientes hasta un 30%.", en: "Increased client conversions by up to 30%." },
    ],
    tech: ["React", "Tailwind", "Figma"],
  },
]

export type Project = {
  slug: string
  title: string
  category: Localized
  summary: Localized
  problem: Localized
  description: Localized
  image: string
  featured?: boolean
  status: "live" | "wip" | "archived"
  tech: string[]
  features: Localized[]
  challenges: Localized
  learnings: Localized
  architecture: Localized
  demo?: string
  github?: string
}

export const projects: Project[] = [
  {
    slug: "saas-dashboard",
    title: "Northwind Analytics",
    category: { es: "Aplicación Web", en: "Web App" },
    summary: {
      es: "Panel de analítica en tiempo real para equipos de producto.",
      en: "Real-time analytics dashboard for product teams.",
    },
    problem: {
      es: "Los equipos no tenían una vista unificada de sus métricas clave y perdían horas exportando datos manualmente.",
      en: "Teams lacked a unified view of key metrics and wasted hours exporting data manually.",
    },
    description: {
      es: "Plataforma que agrega eventos de múltiples fuentes y los visualiza en dashboards personalizables con actualizaciones en vivo.",
      en: "A platform that aggregates events from multiple sources and visualizes them in customizable, live-updating dashboards.",
    },
    image: "/projects/saas-dashboard.png",
    featured: true,
    status: "live",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "Tailwind CSS"],
    features: [
      { es: "Dashboards personalizables por drag & drop", en: "Drag & drop customizable dashboards" },
      { es: "Actualizaciones en tiempo real vía WebSockets", en: "Real-time updates via WebSockets" },
      { es: "Control de acceso por roles", en: "Role-based access control" },
    ],
    challenges: {
      es: "Mantener consultas rápidas sobre millones de eventos sin degradar la experiencia en vivo.",
      en: "Keeping queries fast over millions of events without degrading the live experience.",
    },
    learnings: {
      es: "Aprendí a diseñar cachés de lectura con Redis y a paginar de forma eficiente en el edge.",
      en: "Learned to design read caches with Redis and paginate efficiently at the edge.",
    },
    architecture: {
      es: "App Router + Server Actions, capa de datos con Prisma, cache con Redis y streaming de UI.",
      en: "App Router + Server Actions, data layer with Prisma, Redis caching and UI streaming.",
    },
    demo: "https://example.com",
    github: "https://github.com/vercel",
  },
  {
    slug: "ecommerce",
    title: "Aurora Store",
    category: { es: "E-commerce", en: "E-commerce" },
    summary: {
      es: "Tienda headless con checkout optimizado y CMS.",
      en: "Headless store with an optimized checkout and CMS.",
    },
    problem: {
      es: "Una marca necesitaba una tienda rápida y editable sin depender de plantillas rígidas.",
      en: "A brand needed a fast, editable store without relying on rigid templates.",
    },
    description: {
      es: "Storefront headless con catálogo dinámico, carrito persistente y pagos integrados.",
      en: "Headless storefront with a dynamic catalog, persistent cart and integrated payments.",
    },
    image: "/projects/ecommerce.png",
    featured: true,
    status: "live",
    tech: ["Next.js", "Stripe", "Tailwind CSS", "PostgreSQL"],
    features: [
      { es: "Checkout con Stripe", en: "Stripe checkout" },
      { es: "Búsqueda y filtros instantáneos", en: "Instant search and filters" },
      { es: "CMS para editar productos", en: "CMS to edit products" },
    ],
    challenges: {
      es: "Lograr un LCP por debajo de 1.5s con imágenes de producto de alta calidad.",
      en: "Achieving an LCP under 1.5s with high-quality product images.",
    },
    learnings: {
      es: "Optimización de imágenes, prefetching inteligente y estrategias de caché por ruta.",
      en: "Image optimization, smart prefetching and per-route caching strategies.",
    },
    architecture: {
      es: "Arquitectura headless, ISR para catálogo y Server Actions para el carrito.",
      en: "Headless architecture, ISR for the catalog and Server Actions for the cart.",
    },
    demo: "https://example.com",
    github: "https://github.com/vercel",
  },
  {
    slug: "ai-chat",
    title: "Sage AI",
    category: { es: "IA", en: "AI" },
    summary: {
      es: "Asistente conversacional con streaming y herramientas.",
      en: "Conversational assistant with streaming and tools.",
    },
    problem: {
      es: "Los usuarios necesitaban respuestas contextualizadas sobre su propia documentación.",
      en: "Users needed contextual answers about their own documentation.",
    },
    description: {
      es: "Chat con RAG sobre documentos privados, respuestas en streaming y herramientas personalizadas.",
      en: "Chat with RAG over private documents, streaming responses and custom tools.",
    },
    image: "/projects/ai-chat.png",
    featured: true,
    status: "wip",
    tech: ["Next.js", "AI SDK", "TypeScript", "PostgreSQL"],
    features: [
      { es: "Respuestas en streaming", en: "Streaming responses" },
      { es: "RAG sobre documentos", en: "RAG over documents" },
      { es: "Herramientas (tool calling)", en: "Tool calling" },
    ],
    challenges: {
      es: "Diseñar un pipeline de embeddings eficiente y una UI de streaming fluida.",
      en: "Designing an efficient embeddings pipeline and a smooth streaming UI.",
    },
    learnings: {
      es: "Buenas prácticas de RAG, control de costos de tokens y UX de IA.",
      en: "RAG best practices, token cost control and AI UX.",
    },
    architecture: {
      es: "AI SDK + Route Handlers con streaming, embeddings en Postgres (pgvector).",
      en: "AI SDK + Route Handlers with streaming, embeddings in Postgres (pgvector).",
    },
    demo: "https://example.com",
    github: "https://github.com/vercel",
  },
  {
    slug: "fintech",
    title: "Ledger Mobile",
    category: { es: "Fintech", en: "Fintech" },
    summary: {
      es: "App de finanzas personales con presupuestos inteligentes.",
      en: "Personal finance app with smart budgets.",
    },
    problem: {
      es: "Las personas querían entender sus gastos sin hojas de cálculo.",
      en: "People wanted to understand their spending without spreadsheets.",
    },
    description: {
      es: "Aplicación que categoriza transacciones automáticamente y sugiere presupuestos.",
      en: "An app that automatically categorizes transactions and suggests budgets.",
    },
    image: "/projects/fintech.png",
    status: "archived",
    tech: ["React Native", "Node.js", "PostgreSQL"],
    features: [
      { es: "Categorización automática", en: "Automatic categorization" },
      { es: "Presupuestos y alertas", en: "Budgets and alerts" },
    ],
    challenges: {
      es: "Sincronización segura de datos financieros sensibles.",
      en: "Securely syncing sensitive financial data.",
    },
    learnings: {
      es: "Seguridad de datos, encriptación y diseño mobile-first.",
      en: "Data security, encryption and mobile-first design.",
    },
    architecture: {
      es: "API en Node.js, cifrado en reposo y sincronización offline-first.",
      en: "Node.js API, encryption at rest and offline-first sync.",
    },
    github: "https://github.com/vercel",
  },
]

export type Service = {
  id: string
  title: Localized
  description: Localized
  icon: string
}

export const services: Service[] = [
  {
    id: "landing",
    icon: "Rocket",
    title: { es: "Landing Pages", en: "Landing Pages" },
    description: {
      es: "Páginas rápidas y optimizadas para conversión.",
      en: "Fast pages optimized for conversion.",
    },
  },
  {
    id: "webapps",
    icon: "LayoutDashboard",
    title: { es: "Aplicaciones Web", en: "Web Applications" },
    description: {
      es: "Productos full stack escalables y mantenibles.",
      en: "Scalable, maintainable full stack products.",
    },
  },
  {
    id: "apis",
    icon: "Server",
    title: { es: "APIs", en: "APIs" },
    description: {
      es: "APIs REST y GraphQL seguras y bien documentadas.",
      en: "Secure, well-documented REST and GraphQL APIs.",
    },
  },
  {
    id: "ecommerce",
    icon: "ShoppingCart",
    title: { es: "E-commerce", en: "E-commerce" },
    description: {
      es: "Tiendas headless con pagos y CMS.",
      en: "Headless stores with payments and CMS.",
    },
  },
  {
    id: "automation",
    icon: "Workflow",
    title: { es: "Automatización", en: "Automation" },
    description: {
      es: "Flujos e integraciones que ahorran tiempo.",
      en: "Workflows and integrations that save time.",
    },
  },
  {
    id: "performance",
    icon: "Gauge",
    title: { es: "Optimización", en: "Optimization" },
    description: {
      es: "Mejoro Core Web Vitals y velocidad de carga.",
      en: "I improve Core Web Vitals and load speed.",
    },
  },
  {
    id: "consulting",
    icon: "Lightbulb",
    title: { es: "Consultoría", en: "Consulting" },
    description: {
      es: "Arquitectura, revisiones de código y estrategia técnica.",
      en: "Architecture, code reviews and technical strategy.",
    },
  },
]

export type TimelineItem = {
  title: Localized
  place: string
  period: Localized
  description: Localized
}

export const education: TimelineItem[] = [
  {
    title: { es: "Ingeniería en Sistemas Computacionales", en: "B.Sc. in Computer Science" },
    place: "Universidad Nacional",
    period: { es: "2016 — 2020", en: "2016 — 2020" },
    description: {
      es: "Enfoque en ingeniería de software y estructuras de datos.",
      en: "Focus on software engineering and data structures.",
    },
  },
  {
    title: { es: "Bootcamp Full Stack", en: "Full Stack Bootcamp" },
    place: "Code Academy",
    period: { es: "2020", en: "2020" },
    description: {
      es: "Programa intensivo de desarrollo web moderno.",
      en: "Intensive modern web development program.",
    },
  },
]

export type Certification = {
  title: string
  issuer: string
  year: string
  url?: string
}

export const certifications: Certification[] = [
  { title: "AWS Certified Developer – Associate", issuer: "Amazon Web Services", year: "2024", url: "https://example.com" },
  { title: "Professional Cloud Developer", issuer: "Google Cloud", year: "2023", url: "https://example.com" },
  { title: "Meta Front-End Developer", issuer: "Meta", year: "2022", url: "https://example.com" },
]

export type Testimonial = {
  name: string
  role: Localized
  quote: Localized
  avatar?: string
}

export const testimonials: Testimonial[] = [
  {
    name: "María González",
    role: { es: "Product Manager, Northwind", en: "Product Manager, Northwind" },
    quote: {
      es: "Alex convierte requerimientos complejos en productos claros y rápidos. Un profesional excepcional.",
      en: "Alex turns complex requirements into clear, fast products. An exceptional professional.",
    },
  },
  {
    name: "James Carter",
    role: { es: "CTO, Pixel Foundry", en: "CTO, Pixel Foundry" },
    quote: {
      es: "Su atención al rendimiento y a la accesibilidad elevó el nivel de todo el equipo.",
      en: "His attention to performance and accessibility raised the bar for the whole team.",
    },
  },
  {
    name: "Sofía Ramírez",
    role: { es: "Founder, Aurora", en: "Founder, Aurora" },
    quote: {
      es: "Entregó nuestra tienda antes de tiempo y con una calidad impecable.",
      en: "Delivered our store ahead of schedule and with impeccable quality.",
    },
  },
]

export type Faq = {
  question: Localized
  answer: Localized
}

export const faqs: Faq[] = [
  {
    question: { es: "¿Trabajas de forma remota?", en: "Do you work remotely?" },
    answer: {
      es: "Sí, trabajo con clientes de todo el mundo de forma 100% remota, adaptándome a tu zona horaria.",
      en: "Yes, I work with clients worldwide, fully remote, adapting to your time zone.",
    },
  },
  {
    question: { es: "¿Cómo es tu proceso de trabajo?", en: "What is your work process?" },
    answer: {
      es: "Descubrimiento, diseño, desarrollo iterativo con entregas semanales y despliegue continuo.",
      en: "Discovery, design, iterative development with weekly deliveries and continuous deployment.",
    },
  },
  {
    question: { es: "¿Ofreces mantenimiento?", en: "Do you offer maintenance?" },
    answer: {
      es: "Sí, ofrezco planes de soporte y mantenimiento continuo tras el lanzamiento.",
      en: "Yes, I offer ongoing support and maintenance plans after launch.",
    },
  },
  {
    question: { es: "¿Cuánto cuesta un proyecto?", en: "How much does a project cost?" },
    answer: {
      es: "Depende del alcance. Escríbeme y te preparo una propuesta a medida sin compromiso.",
      en: "It depends on scope. Reach out and I'll prepare a tailored, no-commitment proposal.",
    },
  },
]
