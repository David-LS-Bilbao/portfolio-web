export interface Education {
  title: string
  institution: string
  hours: string
  grade?: string
  details: string
  certification?: string
  ongoing?: string
}

export const education: Education[] = [
  {
    title: 'Máster de Desarrollo con IA',
    institution: 'BIG school',
    hours: 'Finalizado · Certificación universitaria: 150 h / 6 ECTS',
    certification: 'Experto en Desarrollo de Software con Inteligencia Artificial, Universidad Isabel I. Certificado expedido el 14 de mayo de 2026.',
    details: 'Ingeniería y arquitectura de software, integración de IA, calidad, seguridad y despliegue. Proyecto final: Verity News, con LLMs, RAG y búsqueda semántica.',
    ongoing: 'Actualización en curso: agentes de IA, MCP, AGENTS.md, Agent Skills y orquestación.',
  },
  {
    title: 'Bootcamp Desarrollo Web Full Stack',
    institution: 'The Bridge',
    hours: '490 h',
    details:
      'HTML/CSS, JavaScript, Git/GitHub, Node.js, Express, APIs REST, SQL/NoSQL, JWT, testing, WebSockets, cloud/devops y proyecto grupal.',
  },
  {
    title: 'Técnico Superior en Desarrollo de Aplicaciones Multiplataforma',
    institution: 'ILERNA',
    hours: '2000 h',
    grade: 'Calificación final 9,041',
    details:
      'Programación, bases de datos, interfaces, desarrollo móvil, servicios/procesos, ERP/CRM, proyecto final y FCT apta.',
  },
]
