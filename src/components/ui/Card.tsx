import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  padded?: boolean
}

export function Card({ children, className = '', padded = true }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-ink-900/10 bg-white shadow-sm ${
        padded ? 'p-6' : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}
