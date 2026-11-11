import { createRoot } from 'react-dom/client'
import { OptimizedImage } from '../src/components/ui/OptimizedImage'

const results = document.querySelector<HTMLPreElement>('#results')!
const frame = document.querySelector<HTMLIFrameElement>('#preview')!
const lines: string[] = []
function report(message: string) {
  lines.push(message)
  results.textContent = lines.join('\n')
}
function check(condition: boolean, message: string) {
  if (!condition) throw new Error(message)
  report(`PASS: ${message}`)
}
async function settled() {
  await new Promise(requestAnimationFrame)
  await new Promise(requestAnimationFrame)
}

async function run() {
  frame.style.width = '320px'
  await new Promise<void>((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error('Portfolio did not load')), 15000)
    frame.onload = () => { clearTimeout(timer); resolve() }
    frame.src = '/#contacto'
  })
  const doc = frame.contentDocument!
  await doc.fonts.ready
  // Include images in closed details and below the fold in the loading check.
  doc.querySelectorAll('details').forEach(detail => { detail.open = true })
  const images = [...doc.images]
  for (const image of images) image.loading = 'eager'
  await Promise.all(images.map(image => image.decode()))
  check(images.length === 8 && images.every(image => image.naturalWidth > 0 && new URL(image.currentSrc).pathname.endsWith('.webp')), 'All 8 images load as WebP')

  for (const width of [320, 375, 768, 1280]) {
    frame.style.width = `${width}px`
    await settled()
    const viewport = doc.documentElement.clientWidth
    check(doc.documentElement.scrollWidth <= viewport, `No page overflow at ${width}px (${doc.documentElement.scrollWidth}/${viewport})`)
    const heading = doc.querySelector<HTMLHeadingElement>('#contacto h2')!
    const range = doc.createRange()
    range.selectNodeContents(heading)
    const textRects = [...range.getClientRects()]
    check(textRects.every(rect => rect.left >= 0 && rect.right <= viewport + 1), `Contact title fits at ${width}px`)
    if (width < 768) {
      const photo = doc.querySelector('.portrait-frame')!.getBoundingClientRect()
      const caption = doc.querySelector('.portrait-caption')!.getBoundingClientRect()
      const availability = doc.querySelector('.availability')!.getBoundingClientRect()
      check(photo.height <= 120 && photo.width <= 100, `Compact portrait at ${width}px`)
      check(caption.left >= photo.right && availability.left >= photo.right, `Portrait text does not overlap the photo at ${width}px`)
    }
  }

  // Force a real decode failure without altering project assets or networking.
  const brokenWebp = 'data:image/webp;base64,AA=='
  await new Promise<void>((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error('PNG fallback did not load')), 10000)
    createRoot(document.querySelector('#fallback')!).render(
      <OptimizedImage
        src="/projects/pymetask.png"
        webpSrc={brokenWebp}
        alt="Fallback verification"
        onLoad={event => {
          const image = event.currentTarget
          if (image.naturalWidth > 0 && new URL(image.currentSrc).pathname.endsWith('/projects/pymetask.png')) {
            clearTimeout(timer)
            resolve()
          }
        }}
      />,
    )
  })
  report('PASS: Invalid WebP falls back to a decoded PNG')
  frame.style.width = '320px'
  await settled()
  doc.querySelector('#contacto')!.scrollIntoView({ behavior: 'instant' })
  report('ALL CHECKS PASSED')
}

run().catch(error => { report(`FAIL: ${error.message}`) })
