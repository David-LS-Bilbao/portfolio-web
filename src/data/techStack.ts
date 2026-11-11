export interface TechCategory {
  category: string
  items: string[]
}

export const techStack: TechCategory[] = [
  {
    category: 'IA aplicada y automatización',
    items: ['LLMs', 'RAG', 'Embeddings', 'Gemini API', 'n8n'],
  },
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript'],
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
]
