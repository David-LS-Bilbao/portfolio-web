interface SectionHeadingProps {
  eyebrow: string
  title: string
  subtitle?: string
  light?: boolean
  center?: boolean
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light = false,
  center = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-10 max-w-2xl ${center ? 'mx-auto' : ''}`}>
      <span className="text-sm font-semibold uppercase tracking-widest text-accent">{eyebrow}</span>
      <h2 className={`mt-2 text-3xl font-bold sm:text-4xl ${light ? 'text-white' : 'text-ink-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-lg leading-relaxed ${light ? 'text-white/80' : 'text-ink-700'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
