/**
 * ============================================================
 *  PORTFOLIO CONTENT — SINGLE SOURCE OF TRUTH
 * ============================================================
 *  David Leonardo Martínez (@Zenda0610)
 *  Desarrollador de Software | Full Stack & Automatización
 * ============================================================
 */

export type Locale = "es" | "en"
export type Localized = Record<Locale, string>

export const profile = {
  name: "David Leonardo Martínez",
  role: {
    es: "Desarrollador de Software",
    en: "Software Developer",
  } satisfies Localized,
  tagline: {
    es: "Construyo aplicaciones web robustas, flujos de automatización e integraciones con Inteligencia Artificial.",
    en: "I build robust web applications, automated workflows and AI-driven integrations.",
  } satisfies Localized,
  location: {
    es: "Ocaña, Norte de Santander, Colombia (Remoto)",
    en: "Ocaña, Norte de Santander, Colombia (Remote)",
  } satisfies Localized,
  availability: {
    es: "Disponible para nuevas oportunidades laborales",
    en: "Available for new professional opportunities",
  } satisfies Localized,
  avatar: "/avatar.png",
  email: "davidlealperez522@gmail.com",
  phone: "+57 312 000 0000",
  whatsapp: "573120000000",
  cv: {
    es: "/cv-david-martinez-es.pdf",
    en: "/cv-david-martinez-en.pdf",
  } satisfies Localized,
  githubUser: "Zenda0610",
  socials: {
    github: "https://github.com/Zenda0610",
    linkedin: "https://linkedin.com/in/david-leonardo-martinez",
    x: "https://github.com/Zenda0610",
    dribbble: "",
  },
}

export const about = {
  intro: {
    es: "Soy desarrollador y estudiante de desarrollo de software con base en Colombia. Me apasiona resolver problemas reales mediante código limpio, integraciones con LLMs (Google Gemini) y automatización de procesos con herramientas como n8n.",
    en: "I am a software developer and software engineering student based in Colombia. I am passionate about solving real-world challenges through clean code, LLM integrations (Google Gemini) and process automation with tools like n8n.",
  } satisfies Localized,
  story: {
    es: "Mi trayectoria comenzó explorando los fundamentos de la algoritmia y la lógica de programación. Rápidamente evolucioné hacia el desarrollo Full Stack moderno y la arquitectura de soluciones automatizadas, conectando frontends interactivos con APIs REST, bases de datos relacionales y agentes de IA.",
    en: "My journey started exploring algorithmic fundamentals and programming logic. I quickly transitioned into modern Full Stack engineering and automated solution architecture, connecting interactive frontends with REST APIs, relational databases and AI agents.",
  } satisfies Localized,
  philosophy: {
    es: "Aplico una metodología continua: Explorar, Aplicar, Analizar y Optimizar. Prefiero la claridad y la solidez antes que la complejidad innecesaria.",
    en: "I follow a continuous methodology: Explore, Apply, Analyze and Optimize. I prioritize clarity and resilience over unnecessary complexity.",
  } satisfies Localized,
  strengths: [
    { es: "Desarrollo Full Stack (Node.js, Express, React)", en: "Full Stack Development (Node.js, Express, React)" },
    { es: "Automatización de Procesos (n8n, Webhooks)", en: "Process Automation (n8n, Webhooks)" },
    { es: "Integración de IA Generativa (Google Gemini API)", en: "Generative AI Integration (Google Gemini API)" },
    { es: "Manipulación Avanzada del DOM (Vanilla JavaScript)", en: "Advanced DOM Manipulation (Vanilla JavaScript)" },
    { es: "Diseño y Consumo de APIs REST", en: "REST API Design & Consumption" },
    { es: "Modelado y Gestión de Bases de Datos", en: "Database Modeling & Management" },
  ] satisfies Localized[],
  interests: {
    es: "Inteligencia Artificial aplicada, arquitectura de software, automatización empresarial, DX y open source.",
    en: "Applied Artificial Intelligence, software architecture, enterprise automation, DX and open source.",
  } satisfies Localized,
  stats: [
    { value: "10+", label: { es: "Soluciones y módulos desarrollados", en: "Developed solutions & modules" } },
    { value: "4+", label: { es: "Sistemas web completos", en: "Complete web systems" } },
    { value: "100%", label: { es: "Enfoque práctico y orientado a valor", en: "Hands-on & value-driven focus" } },
    { value: "24/7", label: { es: "Compromiso de aprendizaje continuo", en: "Continuous learning mindset" } },
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
      { name: "JavaScript (ES6+)", level: 92, years: 2 },
      { name: "HTML5 & CSS3 Avanzado", level: 95, years: 2 },
      { name: "React", level: 82, years: 1 },
      { name: "Next.js", level: 80, years: 1 },
      { name: "Tailwind CSS", level: 88, years: 1 },
    ],
  },
  {
    id: "backend",
    title: { es: "Backend & APIs", en: "Backend & APIs" },
    skills: [
      { name: "Node.js", level: 88, years: 2 },
      { name: "Express.js", level: 90, years: 2 },
      { name: "Python", level: 82, years: 2 },
      { name: "REST APIs & JWT", level: 90, years: 2 },
    ],
  },
  {
    id: "automation-ai",
    title: { es: "Automatización & IA", en: "Automation & AI" },
    skills: [
      { name: "n8n Workflows", level: 92, years: 1 },
      { name: "Google Gemini AI SDK", level: 88, years: 1 },
      { name: "Webhooks & APIs Externas", level: 90, years: 2 },
      { name: "Prompt Engineering Estructurado", level: 85, years: 1 },
    ],
  },
  {
    id: "databases",
    title: { es: "Bases de Datos", en: "Databases" },
    skills: [
      { name: "PostgreSQL", level: 82, years: 1 },
      { name: "MySQL", level: 85, years: 2 },
      { name: "JSON Local Persistence", level: 90, years: 2 },
      { name: "Google Sheets API", level: 88, years: 1 },
    ],
  },
  {
    id: "tools",
    title: { es: "Herramientas & Entorno", en: "Tools & Environment" },
    skills: [
      { name: "Git & GitHub", level: 88, years: 2 },
      { name: "Postman", level: 85, years: 2 },
      { name: "Linux / Bash", level: 75, years: 1 },
      { name: "VS Code", level: 95, years: 2 },
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
    company: "Proyectos Independientes & Soluciones de Software",
    role: { es: "Desarrollador Full Stack & Automatización", en: "Full Stack & Automation Developer" },
    period: { es: "2023 — Presente", en: "2023 — Present" },
    current: true,
    description: {
      es: "Diseño, arquitectura e implementación de aplicaciones web interactivas, integración de modelos de lenguaje y automatización de flujos de trabajo empresariales.",
      en: "Design, architecture and implementation of interactive web applications, LLM integrations and enterprise workflow automation.",
    },
    achievements: [
      { es: "Desarrollé LogicRank AI: motor de evaluación adaptativa con Node.js, Express y Google Gemini.", en: "Built LogicRank AI: adaptive evaluation engine using Node.js, Express and Google Gemini." },
      { es: "Creé TalentAI: sistema automatizado de screening de CVs con n8n, OpenRouter y Google Sheets.", en: "Engineered TalentAI: automated CV screening platform powered by n8n, OpenRouter and Google Sheets." },
      { es: "Diseñé SmartQueue: plataforma de gestión de turnos conectada a PostgreSQL vía webhooks de n8n.", en: "Designed SmartQueue: appointment scheduling system integrated with PostgreSQL via n8n webhooks." },
    ],
    tech: ["Node.js", "Express", "Next.js", "Google Gemini", "n8n", "PostgreSQL", "Python"],
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
    slug: "logicrank-ai",
    title: "LogicRank AI",
    category: { es: "Full Stack & Inteligencia Artificial", en: "Full Stack & Artificial Intelligence" },
    summary: {
      es: "Sistema de evaluación adaptativa de razonamiento lógico impulsado por Google Gemini.",
      en: "Adaptive logical reasoning evaluation platform powered by Google Gemini.",
    },
    problem: {
      es: "Las evaluaciones estandarizadas tradicionales tienen dificultad fija, desmotivando al estudiante y sin ofrecer retroalimentación cognitiva personalizada.",
      en: "Traditional standardized exams feature fixed difficulty, causing student disengagement without actionable cognitive feedback.",
    },
    description: {
      es: "Plataforma cliente-servidor con backend en Express, autenticación JWT y generación dinámica de preguntas mediante Google Gemini 2.5 Flash. Calibra la dificultad en tiempo real según rachas de aciertos o fallos.",
      en: "Client-server platform with an Express backend, JWT authentication, and dynamic question generation using Google Gemini 2.5 Flash. It calibrates difficulty in real-time based on consecutive answer streaks.",
    },
    image: "/projects/ai-chat.png",
    featured: true,
    status: "live",
    tech: ["Node.js", "Express.js", "Google Gemini AI", "JWT", "JavaScript (ES6+)", "CSS3"],
    features: [
      { es: "Motor adaptativo dinámico (CAT) de 10 niveles", en: "10-level dynamic adaptive test engine (CAT)" },
      { es: "Generación estructurada JSON con Google Gemini", en: "Structured JSON generation with Google Gemini" },
      { es: "Banco local de respaldo con modo offline resiliente", en: "Local fallback question bank with resilient offline mode" },
      { es: "Dashboard docente con métricas por curso y ranking", en: "Instructor dashboard with course metrics and rankings" },
    ],
    challenges: {
      es: "Garantizar que las respuestas del LLM cumplieran siempre el formato JSON estricto y crear un fallback sin degradar la experiencia de examen.",
      en: "Ensuring LLM responses strictly adhere to structured JSON and implementing a graceful fallback without interrupting the exam flow.",
    },
    learnings: {
      es: "Dominio de responseMimeType en Gemini SDK, manejo seguro de sesiones JWT y arquitectura de adaptabilidad pedagógica.",
      en: "Mastery of responseMimeType in Gemini SDK, secure JWT session handling and pedagogical adaptability architecture.",
    },
    architecture: {
      es: "Arquitectura multicapa en Express (Rutas, Middleware, Adaptador de Base de Datos y Servicio de IA), con SPA modular en frontend.",
      en: "Multitier Express architecture (Routes, Middleware, Persistence Adapter and AI Service), with a modular SPA frontend.",
    },
    github: "https://github.com/Zenda0610/Evaluaci-nDeRazonamientoLogicoInteligente",
  },
  {
    slug: "talentai-ats",
    title: "TalentAI ATS",
    category: { es: "Automatización & IA", en: "Automation & AI" },
    summary: {
      es: "Plataforma de reclutamiento y clasificación inteligente de hojas de vida con n8n.",
      en: "Intelligent recruitment and CV scoring platform powered by n8n workflows.",
    },
    problem: {
      es: "Los reclutadores invierten incontables horas revisando manualmente postulaciones sin criterios unificados de preselección.",
      en: "Recruiters spend countless hours manually reviewing resumes without unified screening criteria.",
    },
    description: {
      es: "Sistema web conectado a flujos de trabajo en n8n que procesa archivos curriculares en Base64, realiza análisis semántico con IA (OpenRouter) y sincroniza datos en Google Sheets y Telegram.",
      en: "Web system connected to n8n workflows that processes Base64 resumes, performs semantic AI analysis (OpenRouter), and syncs records with Google Sheets and Telegram.",
    },
    image: "/projects/saas-dashboard.png",
    featured: true,
    status: "live",
    tech: ["n8n Workflows", "OpenRouter AI", "Google Sheets API", "Telegram Bot API", "JavaScript"],
    features: [
      { es: "Lectura y carga de CVs en formato Base64", en: "Base64 resume parsing and upload pipeline" },
      { es: "Scoring y feedback automático de candidatos", en: "Automated candidate scoring and AI feedback" },
      { es: "Sincronización bidireccional con Google Sheets", en: "Bidirectional sync with Google Sheets" },
      { es: "Notificaciones instantáneas vía bot de Telegram", en: "Instant alerts via Telegram Bot integration" },
    ],
    challenges: {
      es: "Mapear flujos condicionales de decisión en n8n y estructurar la comunicación asíncrona entre el cliente web y los webhooks.",
      en: "Mapping conditional decision flows in n8n and orchestrating asynchronous communication between client webhooks.",
    },
    learnings: {
      es: "Diseño de flujos Low-Code orientados a eventos, integración de APIs REST de terceros y manejo seguro de webhooks.",
      en: "Event-driven Low-Code workflow design, third-party REST API integrations and secure webhook consumption.",
    },
    architecture: {
      es: "Frontend desacoplado consumiendo webhooks de n8n, enrutamiento condicional y persistencia en Google Sheets.",
      en: "Decoupled frontend triggering n8n webhooks, conditional routing logic and Google Sheets persistence.",
    },
    github: "https://github.com/Zenda0610/Examenn8n",
  },
  {
    slug: "javascript-dom-lab",
    title: "Vanilla JavaScript Lab",
    category: { es: "Frontend & DOM", en: "Frontend & DOM" },
    summary: {
      es: "Catálogo interactivo de 10 utilidades y componentes construidos con JavaScript nativo.",
      en: "Interactive catalog of 10 components and widgets built with native JavaScript.",
    },
    problem: {
      es: "La sobredependencia de frameworks dificulta a menudo comprender el ciclo de vida real de eventos del DOM y optimizar el rendimiento nativo.",
      en: "Over-reliance on heavy frameworks often obscures understanding of core DOM lifecycle events and native performance.",
    },
    description: {
      es: "Monorepositorio modular con 10 soluciones prácticas: buscador con autocompletado, selector de tema oscuro con persistencia, generador dinámico, validación de formularios en tiempo real y lightbox.",
      en: "Modular monorepo with 10 practical solutions: autocomplete search, dark mode with persistence, dynamic generator, real-time form validation and lightbox.",
    },
    image: "/projects/ecommerce.png",
    featured: true,
    status: "live",
    tech: ["JavaScript (ES6+)", "HTML5 Semántico", "CSS3 Moderno", "LocalStorage", "DOM API"],
    features: [
      { es: "10 módulos completamente desacoplados y funcionales", en: "10 fully decoupled, functional modules" },
      { es: "Persistencia de estado en cliente con LocalStorage", en: "Client-side state persistence with LocalStorage" },
      { es: "Validación de formularios reactiva en tiempo real", en: "Reactive real-time form validation" },
      { es: "Cero dependencias externas o librerías pesadas", en: "Zero external dependencies or bloated libraries" },
    ],
    challenges: {
      es: "Implementar filtrado y búsqueda eficiente sin recurrir a paquetes externos, manteniendo el código limpio y reusable.",
      en: "Implementing efficient filtering and search algorithms without external libraries while maintaining clean code.",
    },
    learnings: {
      es: "Dominio exhaustivo del árbol DOM, delegación de eventos, manipulación de clases CSS y diseño accesible.",
      en: "Deep mastery of the DOM tree, event delegation, CSS class manipulation and accessible UI patterns.",
    },
    architecture: {
      es: "Monorepositorio con portal central index y módulos independientes con sus propios contratos HTML/CSS/JS.",
      en: "Monorepo featuring a central index launcher and independent modules with distinct HTML/CSS/JS boundaries.",
    },
    github: "https://github.com/Zenda0610/TrabajoJavaScript",
  },
  {
    slug: "smartqueue-turnos",
    title: "SmartQueue — Turnos y Citas",
    category: { es: "Automatización & Bases de Datos", en: "Automation & Databases" },
    summary: {
      es: "Sistema web de reserva y asignación de turnos conectado a PostgreSQL mediante n8n.",
      en: "Online appointment and queue management web app integrated with PostgreSQL via n8n.",
    },
    problem: {
      es: "Procesos manuales de atención presencial que provocan tiempos de espera excesivos y descontrol en la asignación de cupos.",
      en: "Manual in-person queues causing excessive wait times and lack of visibility into slot allocation.",
    },
    description: {
      es: "Aplicación frontend de registro con validaciones dinámicas, generación de códigos únicos y canalización a PostgreSQL para trazabilidad completa del servicio.",
      en: "Frontend booking app with dynamic validation, unique ticket code generation, and pipeline into PostgreSQL for end-to-end service traceability.",
    },
    image: "/projects/fintech.png",
    status: "live",
    tech: ["HTML5", "CSS3", "JavaScript", "n8n Webhooks", "PostgreSQL"],
    features: [
      { es: "Generación de tickets numerados (SQ-YYYY-XXXX)", en: "Unique ticket code generation (SQ-YYYY-XXXX)" },
      { es: "Validación estricta de formularios y fechas futuras", en: "Strict form and future date validations" },
      { es: "Inserción transaccional directa en base de datos", en: "Direct transactional insertion into PostgreSQL" },
    ],
    challenges: {
      es: "Estructurar la inserción segura en PostgreSQL mediante el nodo relacional de n8n sin exponer credenciales de base de datos en el cliente.",
      en: "Structuring secure PostgreSQL insertions via n8n's relational node without exposing credentials on the client.",
    },
    learnings: {
      es: "Arquitecturas serverless ligeras, desacoplamiento de capas y diseño de formularios centrados en el usuario.",
      en: "Lightweight serverless architectures, layer decoupling and user-centric form design.",
    },
    architecture: {
      es: "Frontend estático que se comunica con n8n mediante HTTP POST Webhook, el cual ejecuta las mutaciones SQL en PostgreSQL.",
      en: "Static frontend communicating with n8n via HTTP POST Webhook, which handles SQL mutations in PostgreSQL.",
    },
    github: "https://github.com/Zenda0610/Automatizaci-nn8n",
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
    id: "webapps",
    icon: "LayoutDashboard",
    title: { es: "Aplicaciones Web Full Stack", en: "Full Stack Web Applications" },
    description: {
      es: "Desarrollo de aplicaciones completas con React, Next.js, Node.js y Express con arquitectura limpia.",
      en: "End-to-end applications built with React, Next.js, Node.js and Express with clean architecture.",
    },
  },
  {
    id: "automation",
    icon: "Workflow",
    title: { es: "Automatización de Procesos (n8n)", en: "Process Automation (n8n)" },
    description: {
      es: "Diseño de flujos automatizados que conectan servicios en la nube, bases de datos y notificaciones.",
      en: "Automated workflow design connecting cloud services, databases and notifications.",
    },
  },
  {
    id: "ai-integration",
    icon: "Lightbulb",
    title: { es: "Integración de IA (LLMs)", en: "AI Integration (LLMs)" },
    description: {
      es: "Incorporación de modelos como Google Gemini en sistemas existentes con salidas JSON y prompts optimizados.",
      en: "Embedding models like Google Gemini into production systems with JSON schemas and optimized prompts.",
    },
  },
  {
    id: "apis",
    icon: "Server",
    title: { es: "Desarrollo de APIs REST", en: "REST API Development" },
    description: {
      es: "APIs seguras, modulares y bien documentadas con autenticación JWT y buenas prácticas de persistencia.",
      en: "Secure, modular and well-documented APIs with JWT authentication and solid persistence patterns.",
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
    title: { es: "Tecnología en Desarrollo de Software", en: "Software Development Technology" },
    place: "Colombia",
    period: { es: "En curso", en: "In progress" },
    description: {
      es: "Formación integral en ingeniería de software, algoritmia, bases de datos, desarrollo web y arquitecturas modernas.",
      en: "Comprehensive training in software engineering, algorithms, databases, web development and modern architectures.",
    },
  },
  {
    title: { es: "Formación Continua en Desarrollo Web & Automatización", en: "Continuous Learning in Web Dev & Automation" },
    place: "Autodidacta / Cursos Especializados",
    period: { es: "2023 — Presente", en: "2023 — Present" },
    description: {
      es: "Especialización en ecosistema JavaScript/TypeScript, integración de modelos de Inteligencia Artificial y flujos con n8n.",
      en: "Specialization in JavaScript/TypeScript ecosystem, AI model integration and n8n workflow engineering.",
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
  { title: "Desarrollo Web Full Stack con JavaScript", issuer: "Ecosistema Tech", year: "2024", url: "https://github.com/Zenda0610" },
  { title: "Automatización de Procesos Empresariales con n8n", issuer: "Certificación Práctica", year: "2024", url: "https://github.com/Zenda0610" },
  { title: "Algoritmia y Lógica de Programación", issuer: "Formación Académica", year: "2023", url: "https://github.com/Zenda0610" },
]

export type Testimonial = {
  name: string
  role: Localized
  quote: Localized
  avatar?: string
}

export const testimonials: Testimonial[] = [
  {
    name: "Comunidad Académica & Colaboradores",
    role: { es: "Revisión de Pares Técnicos", en: "Peer Review" },
    quote: {
      es: "David demuestra una notable capacidad de aprendizaje acelerado y un compromiso riguroso con la entrega de soluciones funcionales y bien estructuradas.",
      en: "David demonstrates a remarkable fast-learning capability and a rigorous commitment to delivering well-structured, working software.",
    },
  },
]

export type Faq = {
  question: Localized
  answer: Localized
}

export const faqs: Faq[] = [
  {
    question: { es: "¿Qué tipo de proyectos desarrollas principalmente?", en: "What kind of projects do you primarily develop?" },
    answer: {
      es: "Desarrollo aplicaciones web Full Stack modernas (React/Next.js/Node.js), integraciones con APIs de Inteligencia Artificial (Google Gemini) y flujos de automatización de procesos empresariales con n8n.",
      en: "I develop modern Full Stack web applications (React/Next.js/Node.js), integrations with AI APIs (Google Gemini) and business workflow automation pipelines with n8n.",
    },
  },
  {
    question: { es: "¿Estás disponible para trabajar de forma remota?", en: "Are you available for remote work?" },
    answer: {
      es: "Sí, estoy 100% disponible para roles remotos o híbridos en equipos de desarrollo en cualquier zona horaria de América o Europa.",
      en: "Yes, I am 100% available for remote or hybrid positions across any time zone in the Americas or Europe.",
    },
  },
  {
    question: { es: "¿Cómo puedo contactarte para una entrevista técnica?", en: "How can I contact you for a technical interview?" },
    answer: {
      es: "Puedes enviarme un correo directo a davidlealperez522@gmail.com o conectar a través de mi perfil de GitHub (@Zenda0610) y LinkedIn.",
      en: "You can send an email directly to davidlealperez522@gmail.com or connect through my GitHub profile (@Zenda0610) and LinkedIn.",
    },
  },
]
