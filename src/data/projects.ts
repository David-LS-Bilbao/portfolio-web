export type ProjectStatus = 'Disponible' | 'En desarrollo'

export interface Project {
  id: string
  title: string
  type: string
  stack: string[]
  description: string
  highlights: string[]
  repoUrl: string
  demoUrl: string
  apiUrl?: string
  image: string
  status: ProjectStatus
  tags: string[]
  featured?: boolean
  teamProject?: boolean
  role?: string
  layout?: 'wide'
}

export const projects: Project[] = [
  {
    id: 'verity-news',
    title: 'Verity News',
    type: 'Proyecto final Máster IA · Full Stack + IA',
    stack: [
      'TypeScript',
      'React/Next.js',
      'Node.js',
      'PostgreSQL',
      'Prisma',
      'pgvector',
      'Docker',
      'LLMs',
      'RAG',
    ],
    description:
      'Plataforma full stack con IA para analizar credibilidad, sesgo y fiabilidad de noticias mediante LLMs, RAG y búsqueda semántica.',
    highlights: [
      'Proyecto final del máster de desarrollo de software con IA.',
      'Arquitectura modular/Clean-Hexagonal.',
      'Búsqueda semántica y análisis con IA.',
      'Despliegue online en subdominio propio.',
    ],
    repoUrl: 'TODO_EDITABLE_REPO_VERITY',
    demoUrl: 'https://verity.davlos.es/',
    apiUrl: '',
    image: '/projects/verity-news.png',
    status: 'Disponible',
    tags: ['Proyecto final', 'IA', 'Full Stack'],
    featured: true,
    teamProject: false,
    role: 'Desarrollo full stack, arquitectura e integración de IA aplicada.',
    layout: 'wide',
  },
  {
    id: 'quotematic-web',
    title: 'QuoteMatic Web',
    type: 'Proyecto full stack propio',
    stack: ['React', 'Node.js', 'Express', 'API REST', 'Base de datos', 'VPS'],
    description:
      'Aplicación web full stack para gestionar y mostrar frases por autores y situaciones, con frontend desplegado, API REST propia y backend conectado a base de datos.',
    highlights: [
      'Proyecto propio desplegado en VPS.',
      'Frontend web y backend/API REST.',
      'Gestión de frases, autores y situaciones.',
      'Buen ejemplo de producto web completo.',
    ],
    repoUrl: 'TODO_EDITABLE_REPO_QUOTEMATIC',
    demoUrl: 'https://quotematicweb.davlos.es/',
    apiUrl: 'TODO_EDITABLE_API_QUOTEMATIC',
    image: '/projects/quotematic-web.png',
    status: 'Disponible',
    tags: ['Full Stack'],
    featured: true,
    teamProject: false,
    role: 'Desarrollo full stack, despliegue y mantenimiento.',
  },
  {
    id: 'plangune',
    title: 'PlanGune',
    type: 'Proyecto final bootcamp · Multidisciplinar · Full Stack',
    stack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'APIs REST', 'Docker', 'VPS'],
    description:
      'Plataforma web para descubrir planes familiares en Euskadi, desarrollada como proyecto final del bootcamp en colaboración con equipos de Full Stack, Data Science, Marketing Digital y Ciberseguridad.',
    highlights: [
      'Proyecto final multidisciplinar del bootcamp.',
      'Colaboración con equipos de Data Science, Marketing Digital y Ciberseguridad.',
      'Desarrollo full stack dentro del equipo técnico.',
      'Integración frontend-backend y consumo de API.',
      'Enfoque mobile-first para familias y negocios.',
      'Despliegue online en subdominio propio.',
    ],
    repoUrl: 'TODO_EDITABLE_REPO_PLANGUNE',
    demoUrl: 'https://plangune.davlos.es/',
    apiUrl: '',
    image: '/projects/plangune.png',
    status: 'Disponible',
    tags: ['Proyecto grupal', 'Full Stack'],
    featured: true,
    teamProject: true,
    role: 'Desarrollo Full Stack dentro del equipo técnico, colaborando en frontend, backend, integración y despliegue.',
    layout: 'wide',
  },
  {
    id: 'nutricoach',
    title: 'NutriCoach',
    type: 'Proyecto grupal Full Stack',
    stack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'APIs REST', 'IA generativa'],
    description:
      'Aplicación full stack de hábitos saludables y nutrición, desarrollada como proyecto grupal, con frontend desplegado y funcionalidades orientadas a registro, seguimiento y generación de recomendaciones.',
    highlights: [
      'Proyecto grupal full stack.',
      'Trabajo en equipo con flujo Git/GitHub.',
      'Frontend y backend desplegados.',
      'Producto orientado a hábitos saludables.',
    ],
    repoUrl: 'TODO_EDITABLE_REPO_NUTRICOACH',
    demoUrl: 'https://nutricoach.davlos.es/',
    apiUrl: '',
    image: '/projects/nutricoach.png',
    status: 'Disponible',
    tags: ['Proyecto grupal', 'IA', 'Full Stack'],
    featured: true,
    teamProject: true,
    role: 'Colaborador en desarrollo full stack dentro del equipo.',
  },
  {
    id: 'jobit-platform',
    title: 'JobIT Platform',
    type: 'Proyecto personal en desarrollo · Career Tech · SDD/TDD',
    stack: [
      'TypeScript',
      'Next.js',
      'React',
      'Node.js',
      'PostgreSQL',
      'Prisma',
      'Docker',
      'Arquitectura modular',
      'SDD/TDD',
    ],
    description:
      'Plataforma full stack modular de empleo tech orientada primero al candidato. El objetivo es centralizar perfil profesional, CV vivo, skills, proyectos, búsqueda de ofertas, oportunidades guardadas y explicación básica de encaje con ofertas.',
    highlights: [
      'Diseño candidate-first para perfiles tech.',
      'Arquitectura modular en monorepo full stack.',
      'Backend por dominios, PostgreSQL/Prisma y despliegue previsto en VPS.',
      'Enfoque SDD/TDD, documentación, seguridad, privacidad y testing desde el inicio.',
      'Evolución futura hacia JobIT Radar, IA aplicada, comunidad y validación como producto.',
    ],
    repoUrl: 'https://github.com/David-LS-Bilbao/JobIT-platform',
    demoUrl: '',
    apiUrl: '',
    image: '/projects/jobit-platform.png',
    status: 'En desarrollo',
    tags: ['Full Stack'],
    featured: false,
    teamProject: false,
    role: 'Diseño de producto, arquitectura, documentación técnica y desarrollo full stack progresivo.',
  },
  {
    id: 'pymetask',
    title: 'PymeTask',
    type: 'Android · Proyecto final DAM',
    stack: ['Kotlin', 'Jetpack Compose', 'Firebase', 'Firestore', 'MVVM'],
    description:
      'Aplicación Android orientada a pequeños negocios para gestionar contactos, tareas, notas, movimientos, archivos, estadísticas y dashboard.',
    highlights: [
      'Proyecto final DAM orientado a pequeños negocios.',
      'Arquitectura MVVM.',
      'Firebase Auth, Firestore y Storage.',
      'App basada en necesidades reales de pequeños negocios.',
    ],
    repoUrl: 'https://github.com/David-LS-Bilbao/PymeTask',
    demoUrl: 'TODO_EDITABLE_DEMO_PYMETASK',
    apiUrl: '',
    image: '/projects/pymetask.png',
    status: 'En desarrollo',
    tags: ['Proyecto final', 'Mobile'],
    featured: false,
    teamProject: false,
  },
  {
    id: 'davlos-control-plane',
    title: 'DAVLOS Control-Plane',
    type: 'DevOps personal · Automatización · VPS',
    stack: ['Python', 'Shell', 'Linux', 'Docker', 'VPS', 'n8n', 'Telegram bot', 'Ollama'],
    description:
      'Proyecto personal de automatización y administración de VPS mediante scripts, runbooks, agentes locales, integración con Telegram, n8n y herramientas de IA local.',
    highlights: [
      'Administración de servidor VPS.',
      'Automatización con Python/Shell.',
      'Documentación operativa y runbooks.',
      'Base para futura TUI/CLI de administración.',
    ],
    repoUrl: 'https://github.com/David-LS-Bilbao/davlos-control-plane',
    demoUrl: 'TODO_EDITABLE_DEMO_CONTROL_PLANE',
    apiUrl: '',
    image: '/projects/davlos-control-plane.png',
    status: 'En desarrollo',
    tags: ['DevOps'],
    featured: false,
    teamProject: false,
  },
]
