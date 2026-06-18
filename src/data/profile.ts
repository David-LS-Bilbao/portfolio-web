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
  role: 'Full Stack & Mobile Developer',
  tagline: 'Full Stack Developer | React · Node.js · TypeScript · APIs REST | Android/Kotlin · IA aplicada',
  location: 'Bilbao / Bizkaia',
  availability: 'Disponibilidad completa · Presencial · Híbrido · Remoto',
  email: 'lopezsotelo77@gmail.com',
  linkedin: 'https://www.linkedin.com/in/david-lopez-sotelo-256a70154/',
  github: 'https://github.com/David-LS-Bilbao',
  portfolioUrl: 'TODO_EDITABLE_PORTFOLIO_URL',
  cvPath: '/CV_David_Lopez_Sotelo.pdf',
  photoPath: '/foto_prof2.png',
  heroSubtitle:
    'Desarrollo aplicaciones web, APIs REST y apps móviles con enfoque práctico, producto real e IA aplicada al desarrollo.',
  aboutParagraphs: [
    'Soy desarrollador Full Stack con formación en Desarrollo de Aplicaciones Multiplataforma, bootcamp de Desarrollo Web Full Stack y especialización en desarrollo de software con Inteligencia Artificial.',
    'Trabajo principalmente con React, TypeScript, Node.js, Express, APIs REST, PostgreSQL, Prisma y Docker. También tengo base en Android con Kotlin, Jetpack Compose y Firebase.',
    'Antes de dedicarme al desarrollo software, gestioné durante más de 27 años un negocio de hostelería, coordinando equipos, proveedores, clientes, compras, caja y operativa diaria. Esa experiencia me ha dado una forma de trabajar práctica: analizar el problema, buscar información, priorizar y encontrar soluciones útiles incluso bajo presión.',
    'Me interesa construir productos digitales con sentido real: aplicaciones web, herramientas internas, automatizaciones, proyectos con IA aplicada y soluciones que ayuden a organizar procesos o tomar mejores decisiones.',
    'Actualmente busco oportunidades como Full Stack Developer, con disponibilidad completa para trabajar en modalidad presencial, híbrida o remota.',
  ],
  strengths: [
    {
      title: 'Mentalidad de producto',
      description: 'Entiendo problemas reales y los convierto en soluciones útiles.',
    },
    {
      title: 'Base full stack + mobile',
      description: 'React, Node.js, APIs REST, PostgreSQL, Kotlin y Firebase.',
    },
    {
      title: 'Experiencia profesional real',
      description: '+27 años gestionando negocio, equipo, presión y responsabilidad.',
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
    'Busco oportunidades como Full Stack Developer en modalidad presencial, híbrida o remota.',
}
