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
    role: 'Propietario / Gerente de negocio de hostelería',
    company: 'Restaurante Aquarium S.L.',
    location: 'Bilbao',
    dates: 'mayo 1997 - abril 2025',
    description:
      'Gestión integral de negocio de hostelería durante más de 27 años, coordinando equipo, proveedores, clientes, compras, caja, organización diaria y continuidad del servicio.',
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
