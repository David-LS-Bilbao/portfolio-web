import type { ReactNode } from 'react'

type Tone = 'light' | 'subtle' | 'dark'

interface SectionProps {
  id: string
  tone?: Tone
  children: ReactNode
  padding?: string
  className?: string
  containerClassName?: string
}

const toneStyles: Record<Tone, string> = {
  light: 'bg-paper text-ink-900',
  subtle: 'bg-paper-dark text-ink-900',
  dark: 'bg-ink-950 text-white',
}

export function Section({
  id,
  tone = 'light',
  children,
  padding = 'py-20',
  className = '',
  containerClassName = '',
}: SectionProps) {
  return (
    <section id={id} className={`px-6 ${padding} ${toneStyles[tone]} ${className}`}>
      <div className={`mx-auto max-w-6xl ${containerClassName}`}>{children}</div>
    </section>
  )
}
