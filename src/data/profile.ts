export interface Strength {
  title: string
  description: string
}

export interface ProfileData {
  name: string
  role: string
  tagline: string
  location: string
  availability: string
  email: string
  linkedin: string
  github: string
  portfolioUrl: string
  cvPath: string
  generalCvPath: string
  photoPath: string
  heroSubtitle: string
  aboutParagraphs: string[]
  strengths: Strength[]
  competencies: string[]
  languages: string[]
  others: string[]
  seekingStatement: string
}

export const profile: ProfileData = {
  name: 'David López Sotelo',
  role: 'Desarrollador Full Stack · IA aplicada y automatización',
  tagline: 'Desarrollo Full Stack · Integración de IA · RAG · Automatización',
  location: 'Bilbao / Bizkaia',
  availability: 'Disponibilidad completa · Presencial · Híbrido · Remoto',
  email: 'lopezsotelo77@gmail.com',
  linkedin: 'https://www.linkedin.com/in/david-lopez-sotelo-256a70154/',
  github: 'https://github.com/David-LS-Bilbao',
  portfolioUrl: 'https://david.davlos.es/',
  cvPath: '/CV_David_Lopez_Sotelo_IA_Automatizacion.pdf',
  generalCvPath: '/CV_David_Lopez_Sotelo.pdf',
  photoPath: '/foto_prof2.png',
  heroSubtitle:
    'Desarrollo aplicaciones web e integro APIs y modelos de IA para crear soluciones útiles. Combino mi formación técnica con más de 27 años gestionando un negocio y sus procesos.',
  aboutParagraphs: [
    'Soy desarrollador Full Stack con formación en Desarrollo de Aplicaciones Multiplataforma, desarrollo web y el Máster de Desarrollo con IA de BIG school. Trabajo con React, TypeScript, Node.js, APIs REST, PostgreSQL y Docker, e incorporo LLMs y RAG en proyectos como Verity News, mi proyecto final del máster. También tengo base en Android con Kotlin, Jetpack Compose y Firebase.',
    'Actualmente curso los módulos nuevos del máster sobre agentes de IA, MCP, Agent Skills y orquestación, ampliando mi formación en integración de herramientas y desarrollo con IA.',
    'Antes de dedicarme al software, gestioné durante más de 27 años un negocio de hostelería. Coordinaba equipos, proveedores, compras, clientes y la operativa diaria. Esa experiencia me ayuda a entender cómo trabaja un negocio, identificar problemas y priorizar soluciones prácticas.',
    'Me interesa desarrollar aplicaciones e integraciones que ayuden a organizar información, automatizar tareas y mejorar procesos. Busco incorporarme a un equipo técnico donde aportar esta visión de negocio y seguir creciendo en desarrollo e IA aplicada.',
  ],
  strengths: [
    {
      title: 'Comprensión del negocio',
      description: 'Experiencia directa con clientes, proveedores, equipos y procesos de una pequeña empresa.',
    },
    {
      title: 'Desarrollo e integración',
      description: 'Aplicaciones web, APIs y bases de datos, con IA integrada en proyectos como Verity News.',
    },
    {
      title: 'Responsabilidad y comunicación',
      description: 'Experiencia organizando prioridades, resolviendo incidencias y explicando soluciones con claridad.',
    },
  ],
  competencies: [
    'Resolución de problemas',
    'Aprendizaje autónomo',
    'Proactividad',
    'Atención al detalle',
    'Trabajo en equipo',
    'Adaptabilidad',
    'Comunicación clara',
    'Gestión de presión',
  ],
  languages: ['Español nativo', 'Inglés técnico B2'],
  others: ['Carnet A, A1 y B', 'Vehículo propio'],
  seekingStatement:
    'Busco oportunidades de desarrollo Full Stack, integración de herramientas e IA aplicada a procesos empresariales. Disponibilidad completa para incorporación presencial, híbrida o remota.',
}
