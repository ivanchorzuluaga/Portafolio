export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  images?: string[]; // Array de imágenes adicionales del proyecto
  link?: string;
  github?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Skill {
  name: string;
  level: number; // 1-5
  category: "frontend" | "backend" | "tools" | "design";
}

export const personalInfo = {
  name: "Ivan Zuluaga",
  title: "Developer",
  tagline: "Construyendo en la era digital",
  email: "ivancho.r.zuluaga@gmail.com",
  location: "Medellin, Colombia",
  bio: "Desarrollador enfocado en crear soluciones prácticas y eficientes.",
  social: {
    github: "https://github.com/ivanchorzuluaga",
    linkedin: "https://linkedin.com/in/ivanzuluaga",
    email: "mailto:ivancho.r.zuluaga@gmail.com",
  },
};

export const projects: Project[] = [
  {
    id: "1",
    title: "Silbatazo",
    description:
      "Plataforma web para conectar árbitros con organizadores de partidos deportivos. Permite solicitar servicios de arbitraje, gestionar asignaciones y automatizar la comunicación entre usuarios con roles diferenciados (administradores, árbitros y clientes). Incluye notificaciones en tiempo real, automatización de mensajes por WhatsApp y correo mediante la API de Meta, dashboards administrativos, arquitectura basada en APIs y optimización SEO. Actualmente cuenta con 21 árbitros registrados y se proyecta gestionar ~200 partidos mensuales tras el lanzamiento.",
    technologies: [
      "React",
      "Python",
      "Django",
      "API REST",
      "PostgreSQL",
      "Docker",
      "Vercel",
      "Meta API",
    ],
    github: "https://github.com/ivanchorzuluaga",
    featured: true,
  },
  {
    id: "2",
    title: "Model Force",
    description:
      "Sistema para la gestión financiera de un estudio de modelaje. Optimiza el cálculo y liquidación de pagos para ~200 modelos por quincena, reduciendo el proceso de 8 horas a 10 minutos. Incluye registro de ingresos diarios, dashboards administrativos, generación de reportes y exportación en Excel/PDF, además de un sistema de roles para administración, sedes, contabilidad y modelos. En producción, desplegado en VPS configurado y administrado por mí.",
    technologies: ["React", "Python", "Django", "API REST", "PostgreSQL", "VPS"],
    github: "https://github.com/ivanchorzuluaga",
    featured: true,
  },
  {
    id: "3",
    title: "365 Trade",
    description:
      "Plataforma web de monitoreo de rentabilidad para una empresa de trading. Permitía a los clientes consultar su rentabilidad diaria mediante dashboards interactivos y gráficos analíticos. Soportó hasta 55 usuarios activos con datos financieros actualizados desde archivos cargados por el administrador. Incluía visualización de métricas y panel administrativo para la gestión de datos.",
    technologies: ["React", "Python", "Django", "API REST", "PostgreSQL"],
    github: "https://github.com/ivanchorzuluaga",
    featured: true,
  },
  {
    id: "4",
    title: "Sitios web para negocios y emprendimientos",
    description:
      "Diseño y desarrollo de sitios web personalizados para negocios y emprendimientos enfocados en presencia digital, captación de clientes y experiencias modernas. Implementación de interfaces responsivas, optimización SEO y paneles administrativos para gestión de contenido.",
    technologies: ["React", "Python", "Django", "API REST", "PostgreSQL"],
    github: "https://github.com/ivanchorzuluaga",
    featured: true,
  },
];

export const experience: Experience[] = [
  {
    id: "1",
    company: "F5 intelligence",
    position: "CEO | Full Stack Developer",
    period: "2022 - Presente",
    description:
      "Desarrollo de aplicaciones web. Implementación de soluciones mensionadas en la seccion de proyectos. F5 intelligence es mi empresa freelance donde realizo proyectos para clientes externos.",
    technologies: ["React", "Django", "Python", "django-rest-framework", "PostgreSQL", "Vite", "Tailwind CSS", "bun",],
  },
  {
    id: "2",
    company: "ARUS",
    position: "Analista operación de Datos",
    period: "2020 - 2022",
    description: "Entrenamiento de Redes Neuronales (deep learning y machine learning). Desarrollar aplicaciones con el lenguaje Python para automatizar procesos del área AIA.\nColaborador en desarrollo de aplicaciones para automatizar procesos del area AIA.",
    technologies: ["Python", "deep learning", "machine learning", "React", "Tailwind", "Html5", "JavaScript"],
  },
];

export const skills: Skill[] = [
  // Frontend
  { name: "React", level: 5, category: "frontend" },
  { name: "TypeScript", level: 4, category: "frontend" },
  { name: "JavaScript", level: 5, category: "frontend" },
  { name: "Tailwind CSS", level: 5, category: "frontend" },
  { name: "Astro", level: 4, category: "frontend" },

  // Backend
  { name: "PostgreSQL", level: 4, category: "backend" },
  { name: "Python", level: 4, category: "backend" },
  { name: "Django", level: 4, category: "backend" },
  { name: "API REST", level: 5, category: "backend" },

  // Tools
  { name: "Git", level: 5, category: "tools" },
  { name: "Docker", level: 4, category: "tools" },
  { name: "Linux", level: 4, category: "tools" },
  { name: "Vercel", level: 4, category: "tools" },
  { name: "VPS / Deploy", level: 4, category: "tools" },

  // IA
  { name: "Codex", level: 4, category: "design" },
  { name: "Open Code", level: 3, category: "design" },
  { name: "Cursor", level: 4, category: "design" },
  { name: "Skills IA", level: 3, category: "design" },
  { name: "Integración de IA", level: 4, category: "design" },
  { name: "Automatización con IA", level: 4, category: "design" },
  { name: "Prompting / Flujos IA", level: 4, category: "design" },
];
