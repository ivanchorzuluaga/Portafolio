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
  level: number; // 1-100
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
    github: "https://github.com/ivanrzuluaga",
    linkedin: "https://linkedin.com/in/ivanzuluaga",
    email: "mailto:ivancho.r.zuluaga@gmail.com",
  },
};

export const projects: Project[] = [
  {
    id: "1",
    title: "Model Force",
    description:
      "Aplicacion web para la gestion de Modelos Webcam, pago de nominas, estadisticas, historial de pagos, entre otras funcionalidades de automatizacion de procesos.",
    technologies: [
      "Django",
      "Python",
      "django-rest-framework",
      "PostgreSQL",
      "Vite",
      "React",
      "Tailwind CSS",
    ],
    images: [
      "/ModelForce/MF1.png",
      "/ModelForce/MF2.png",
      "/ModelForce/MF3.png",
      "/ModelForce/MF4.png",
    ],
    github: "https://github.com/ivanrzuluaga",
    featured: true,
  },
  {
    id: "2",
    title: "Model Network",
    description: "Landing Page para la empresa ModelNetwork, con el proposito de captar clientes y mostrar los servicios que ofrece.",
    technologies: ["Vite", "Tailwind CSS", "React"],
    images: ["/ModelNetwork/LDMN1.png", "/ModelNetwork/LDMN2.png", "/ModelNetwork/LDMN3.png"],
    github: "https://github.com/ivanrzuluaga",
    featured: true,
  },
  {
    id: "3",
    title: "Training",
    description: "Landing Page para la empresa Training, con el proposito de captar clientes y mostrar los servicios que ofrece.",
    technologies: ["Vite", "Tailwind CSS", "React"],
    images: ["/GYM/LDGYM1.png", "/GYM/LDGYM2.png", "/GYM/LDGYM3.png","/GYM/LDGYM4.png"],
    github: "https://github.com/ivanrzuluaga",
    featured: true,
  },
  {
    id: "4",
    title: "Concursos Model Network",
    description: "Landing Page para los concursos de Model Network, con el proposito de mostrar la posiccion de los concursantes.",
    technologies: ["Vite", "Tailwind CSS", "React","api-rest"],
    images: ["/Concurso/CMN1.png", "/Concurso/CMN2.png", "/Concurso/CMN3.png"],
    github: "https://github.com/ivanrzuluaga",
    featured: true,
  },
];

export const experience: Experience[] = [
  {
    id: "1",
    company: "F5 instelligence",
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
  { name: "React", level: 90, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "JavaScript", level: 95, category: "frontend" },

  // Backend
  { name: "Node.js", level: 88, category: "backend" },
  { name: "PostgreSQL", level: 85, category: "backend" },
  { name: "Express", level: 82, category: "backend" },

  // Tools
  { name: "Git", level: 90, category: "tools" },
  { name: "Docker", level: 75, category: "tools" },
  { name: "Linux", level: 80, category: "tools" },
];
