interface ProjectImageProps {
  src: string
  alt: string
}

// Keep the original image as the single source. A failed picture/source request
// previously replaced the image permanently, including after a hot update.
export function ProjectImage({ src, alt }: ProjectImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className="project-image"
    />
  )
}
