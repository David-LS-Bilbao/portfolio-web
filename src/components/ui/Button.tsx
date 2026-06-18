import type { AnchorHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'outline'
type Size = 'md' | 'lg'

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
  variant?: Variant
  size?: Size
  external?: boolean
}

const variantStyles: Record<Variant, string> = {
  primary: 'bg-accent text-white shadow-sm hover:bg-accent-dark hover:shadow-md',
  secondary: 'bg-white text-ink-900 hover:bg-paper-dark',
  outline: 'border border-white/30 text-white hover:bg-white/10',
}

const sizeStyles: Record<Size, string> = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  external = false,
  className = '',
  href,
  ...rest
}: ButtonProps) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      aria-label={external ? `${children} (se abre en una pestaña nueva)` : undefined}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-200 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...rest}
    >
      {children}
    </a>
  )
}
