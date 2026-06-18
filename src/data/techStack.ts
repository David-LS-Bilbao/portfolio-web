export interface TechCategory {
  category: string
  items: string[]
}

export const techStack: TechCategory[] = [
  {
    category: 'Frontend',
    items: ['React', 'TypeScript'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'APIs REST', 'PostgreSQL', 'Prisma'],
  },
  {
    category: 'Mobile',
    items: ['Kotlin', 'Jetpack Compose', 'Firebase'],
  },
  {
    category: 'DevOps & Infra',
    items: ['Docker', 'Git/GitHub', 'Linux/WSL', 'VPS'],
  },
  {
    category: 'IA aplicada',
    items: ['LLMs', 'RAG', 'Gemini API', 'n8n'],
  },
]
