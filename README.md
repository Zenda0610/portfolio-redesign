# Portafolio Personal — David Leonardo Martínez

[![Next.js](https://img.shields.io/badge/Next.js-15%2F14_App_Router-000000?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

Sitio web de portafolio personal moderno y accesible, diseñado para exhibir proyectos de ingeniería de software, integraciones con Inteligencia Artificial, flujos de automatización y habilidades técnicas.

---

## ✨ Características Principales

- **Arquitectura Moderna Next.js (App Router):** Server Components para máximo rendimiento de renderizado inicial y Client Components optimizados para interactividad.
- **Tipado Estricto de Datos:** 100% construido en TypeScript con definiciones de tipos exhaustivas para perfiles, proyectos y experiencias.
- **Internacionalización Dinámica (i18n):** Alternador fluido de idiomas (Español / Inglés) sin recargas de página mediante contexto React (`lib/i18n.tsx`).
- **Diseño Responsivo y Temas:** Modo oscuro y claro nativo con `next-themes`, paleta de colores HSL armoniosa y animaciones fluidas con Tailwind CSS.
- **Fuente Única de Verdad (`lib/data.ts`):** Todo el contenido (biografía, stack técnico, proyectos, métricas y enlaces) está centralizado y desacoplado de la presentación visual.
- **Integración en Tiempo Real con GitHub:** Widgets dinámicos sincronizados con la API de GitHub (`@Zenda0610`) para estadísticas de commits, lenguajes más utilizados y rachas activas.
- **Formulario de Contacto Seguro:** Implementación con Server Actions (`app/actions.ts`), validación de datos en servidor, protección honeypot anti-spam y estados reactivos.
- **SEO y Accesibilidad:** Metadatos OpenGraph completos, Schema.org JSON-LD estructurado, `robots.ts`, `sitemap.ts` y conformidad con pautas WCAG.

---

## 🏗️ Estructura del Proyecto

```text
portfolio-redesign/
├── app/
│   ├── actions.ts              # Server Actions para el formulario de contacto
│   ├── globals.css             # Configuración y tokens de estilos globales
│   ├── layout.tsx              # Layout raíz con providers, SEO y Schema.org
│   ├── page.tsx                # Composición principal de secciones del portafolio
│   ├── robots.ts               # Configuración para motores de búsqueda
│   └── sitemap.ts              # Generación dinámica del mapa del sitio
├── components/
│   ├── ui/                     # Primitivas accesibles (Button, Dialog, etc.)
│   ├── hero.tsx                # Sección principal con llamadas a la acción
│   ├── about.tsx               # Biografía, filosofía y fortalezas clave
│   ├── tech-stack.tsx          # Habilidades técnicas categorizadas con barras de nivel
│   ├── projects.tsx            # Galería de proyectos con filtros y estado
│   ├── project-modal.tsx       # Detalle técnico modal de cada proyecto
│   ├── experience.tsx          # Línea temporal de trayectoria y logros
│   ├── education.tsx           # Formación académica y certificaciones
│   ├── github-stats.tsx        # Métricas interactivas en vivo desde GitHub
│   ├── contact.tsx             # Formulario interactivo y canales directos
│   ├── navbar.tsx              # Barra de navegación fija con selector de idioma y tema
│   └── footer.tsx              # Pie de página con créditos y enlaces
├── lib/
│   ├── data.ts                 # Fuente única de verdad del contenido (ES / EN)
│   ├── i18n.tsx                # Contexto y hook para internacionalización
│   └── utils.ts                # Utilidades de clases con clsx y tailwind-merge
├── public/                     # Imágenes de proyectos, avatares e iconos
├── .env.example                # Plantilla de variables de entorno
├── .gitignore                  # Exclusión de node_modules, .next y archivos temporales
├── package.json                # Dependencias y scripts
└── README.md                   # Documentación técnica
```

---

## 🛠️ Tecnologías y Dependencias

- **Framework:** Next.js (App Router, Server Actions)
- **Lenguaje:** TypeScript 5.7
- **Estilos:** Tailwind CSS 4, PostCSS, Lucide React (iconografía)
- **Tema:** `next-themes` (Dark/Light mode)
- **Analíticas:** `@vercel/analytics`

---

## 🚀 Proyectos Destacados en el Portafolio

1. **LogicRank AI:** Sistema adaptativo de razonamiento lógico impulsado por Google Gemini 2.5 Flash, backend en Express.js y autenticación JWT.
2. **TalentAI ATS:** Plataforma de reclutamiento inteligente que automatiza la preselección de candidatos con n8n, OpenRouter y Google Sheets.
3. **Vanilla JavaScript Lab:** Monorepositorio pedagógico con 10 componentes interactivos construidos exclusivamente con JavaScript nativo y DOM API.
4. **SmartQueue:** Sistema de reservas y turnos en línea con validación en tiempo real conectado a PostgreSQL mediante webhooks de n8n.

---

## ⚙️ Instalación y Ejecución Local

### 1. Clonar el repositorio
```bash
git clone https://github.com/Zenda0610/portfolio-redesign.git
cd portfolio-redesign
```

### 2. Instalar dependencias
```bash
npm install
# o con pnpm:
pnpm install
```

### 3. Configurar variables de entorno
```bash
cp .env.example .env.local
```

### 4. Ejecutar el servidor de desarrollo
```bash
npm run dev
# o con pnpm:
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## 📦 Despliegue en Producción

El proyecto está optimizado para desplegarse instantáneamente en **Vercel**:

```bash
npm run build
npm start
```

---

**Autor:** David Leonardo Martínez ([@Zenda0610](https://github.com/Zenda0610))  
*Desarrollador de Software | Especializado en Desarrollo Web Full Stack y Automatización*
