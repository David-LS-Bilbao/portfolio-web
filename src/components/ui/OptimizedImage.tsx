import { useState, type ImgHTMLAttributes } from 'react'

interface OptimizedImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet' | 'onError'> {
  src: string
  webpSrc: string
  alt: string
}

export function OptimizedImage({ src, webpSrc, alt, ...props }: OptimizedImageProps) {
  const [failedSource, setFailedSource] = useState<string | null>(null)
  const useOriginal = failedSource === webpSrc

  return (
    <img
      {...props}
      src={useOriginal ? src : webpSrc}
      alt={alt}
      // Retry the original PNG if the optimized image is missing or cannot be
      // decoded. Keep the same img element and sizing; never hide the image.
      onError={useOriginal ? undefined : () => setFailedSource(webpSrc)}
    />
  )
}
