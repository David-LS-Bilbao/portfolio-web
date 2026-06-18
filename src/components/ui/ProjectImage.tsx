import { useState } from 'react'

interface ProjectImageProps {
  src: string
  alt: string
}

export function ProjectImage({ src, alt }: ProjectImageProps) {
  const [errored, setErrored] = useState(false)

  if (errored) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-ink-800 to-ink-950 px-4 text-center text-sm font-semibold uppercase tracking-widest text-white/40">
        Vista previa próximamente
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setErrored(true)}
      className="h-full w-full object-cover"
    />
  )
}
