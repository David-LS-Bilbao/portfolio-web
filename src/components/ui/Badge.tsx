interface BadgeProps {
  label: string
  variant?: 'default' | 'accent'
}

export function Badge({ label, variant = 'default' }: BadgeProps) {
  const styles =
    variant === 'accent'
      ? 'bg-accent/10 text-accent border-accent/30'
      : 'bg-ink-900/5 text-ink-800 border-ink-900/10'

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium ${styles}`}
    >
      {label}
    </span>
  )
}
