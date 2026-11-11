export interface AICompetency {
  title: string
  description: string
  topics: string[]
  inProgress?: boolean
  projectLink?: { label: string; href: string }
}

export const aiCompetencies: AICompetency[] = [
  {
    title: 'Integración de modelos',
    description: 'Incorporación de modelos de lenguaje mediante APIs y diseño de prompts para añadir capacidades de IA a aplicaciones.',
    topics: ['LLMs', 'Gemini API', 'Prompts'],
    projectLink: { label: 'Ver aplicado en Verity News', href: 'https://verity.davlos.es/' },
  },
  {
    title: 'RAG y búsqueda semántica',
    description: 'Embeddings, recuperación de contexto y consultas sobre datos vectoriales para conectar las respuestas con información relevante.',
    topics: ['RAG', 'Embeddings', 'pgvector'],
    projectLink: { label: 'Explorar Verity News', href: 'https://verity.davlos.es/' },
  },
  {
    title: 'Desarrollo asistido por IA',
    description: 'Definición de contexto y especificaciones, generación y revisión de código con asistentes de IA durante el desarrollo.',
    topics: ['Contexto', 'Especificaciones', 'Revisión de código'],
  },
  {
    title: 'Calidad y arquitectura',
    description: 'Diseño modular, testing, documentación y validación del código generado por IA para mantener el control sobre la solución.',
    topics: ['Arquitectura modular', 'Testing', 'Documentación'],
  },
  {
    title: 'Automatización e integración',
    description: 'Formación y práctica con n8n y APIs para conectar servicios y tareas dentro de un flujo de trabajo.',
    topics: ['n8n', 'APIs REST', 'Flujos de trabajo'],
  },
  {
    title: 'Agentes y orquestación',
    description: 'Actualmente curso las nuevas lecciones del máster sobre conexión de herramientas, contexto para agentes y patrones de orquestación.',
    topics: ['MCP', 'AGENTS.md', 'Agent Skills', 'Orquestación'],
    inProgress: true,
  },
]
