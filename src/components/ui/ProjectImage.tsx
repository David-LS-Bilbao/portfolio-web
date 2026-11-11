import { OptimizedImage } from './OptimizedImage'

interface ProjectImageProps {
  src: string
  alt: string
}

export function ProjectImage({ src, alt }: ProjectImageProps) {
  return (
    <OptimizedImage
      src={src}
      webpSrc={src.replace('/projects/', '/images/').replace(/\.png$/, '.webp')}
      alt={alt}
      loading="lazy"
      decoding="async"
      className="project-image"
    />
  )
}
