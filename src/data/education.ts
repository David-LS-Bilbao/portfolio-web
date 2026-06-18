export interface Education {
  title: string
  institution: string
  hours: string
  grade?: string
  details: string
}

export const education: Education[] = [
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
  {
    title: 'Experto en Desarrollo de Software con Inteligencia Artificial',
    institution: 'BIG School / Universidad Isabel I',
    hours: '150 h / 6 ECTS',
    details:
      'Ingeniería y arquitectura de software, fundamentos de IA, calidad, cloud, seguridad y desarrollo potenciado por IA.',
  },
]
