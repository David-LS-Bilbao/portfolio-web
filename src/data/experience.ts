export interface Experience {
  role: string
  company: string
  location: string
  dates: string
  description: string
  highlights: string[]
  transferableSkills: string[]
}

export const experience: Experience[] = [
  {
    role: 'Prácticas curriculares DAM',
    company: 'Jaque Digital',
    location: 'Remoto',
    dates: '2026',
    description: 'Prácticas de Desarrollo de Aplicaciones Multiplataforma con participación en tareas de desarrollo web y uso de herramientas de inteligencia artificial durante el desarrollo de software.',
    highlights: [
      'Participación en desarrollo web, prototipado y documentación técnica.',
      'Uso de herramientas de inteligencia artificial como apoyo al desarrollo de software.',
    ],
    transferableSkills: ['Desarrollo web', 'IA aplicada al desarrollo', 'Documentación técnica'],
  },
  {
    role: 'Propietario / Gerente de negocio de hostelería',
    company: 'Restaurante Aquarium S.L.',
    location: 'Bilbao',
    dates: 'mayo 1997 - abril 2025',
    description:
      'Gestión integral de un negocio de hostelería durante más de 27 años, coordinando equipo, proveedores, compras, caja y atención al cliente. Organización de procesos y prioridades, resolución de incidencias y seguimiento de la operativa diaria.',
    highlights: [
      'Coordinación de equipo de hasta 5 personas.',
      'Organización de turnos, prioridades y operativa diaria.',
      'Resolución de incidencias en entorno de alta presión.',
      'Gestión de proveedores, compras, caja y administración básica.',
      'Atención directa a clientes y mejora continua del servicio.',
    ],
    transferableSkills: [
      'Responsabilidad',
      'Autogestión',
      'Comunicación clara',
      'Planificación',
      'Atención al detalle',
      'Adaptación',
      'Orientación a resultados',
    ],
  },
]
