import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { createServer } from 'vite'

// Render the real components: checking valid UTF-8 alone cannot detect letters
// already replaced by ASCII question marks during file creation.
const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' })
try {
  const { default: App } = await server.ssrLoadModule('/src/App.tsx')
  const html = renderToStaticMarkup(createElement(App))
  const text = html.replace(/<[^>]+>/g, ' ')
  for (const expected of [
    'Código que las', 'David López Sotelo', 'tecnología', 'Navegación principal',
    'Más contexto', 'búsqueda semántica', 'MI APORTACIÓN', 'Visión de negocio',
    'Aplicación real', 'Formación en curso', 'Más de 27 años', 'algo útil?',
  ]) {
    assert.ok(html.includes(expected), `Missing or damaged text: ${expected}`)
  }
  assert.doesNotMatch(text, /\p{L}\?\p{L}|\s\?\s|\uFFFD|\u00C3[\u0080-\u00BF]|\u00C2[\u0080-\u00BF]/u)

  const images = [...html.matchAll(/<img\b[^>]*\bsrc="([^"]+)"[^>]*>/g)]
  assert.equal(images.length, 8, 'Expected portrait and all seven project images')
  let originalBytes = 0
  let optimizedBytes = 0
  for (const [element, src] of images) {
    assert.match(element, /alt="[^"]+"/, `Missing alt text: ${src}`)
    assert.ok(src.startsWith('/') && !src.includes('..'), `Unexpected image path: ${src}`)
    const file = await readFile(resolve('public', src.slice(1)))
    assert.match(src, /^\/images\/.+\.webp$/, `Optimized image not selected: ${src}`)
    assert.equal(file.subarray(0, 4).toString(), 'RIFF', `Invalid WebP: ${src}`)
    assert.equal(file.subarray(8, 12).toString(), 'WEBP', `Invalid WebP: ${src}`)
    assert.equal(file.readUInt32LE(4) + 8, file.length, `Truncated WebP: ${src}`)
    const fallback = src === '/images/david.webp'
      ? '/foto_prof2.png'
      : src.replace('/images/', '/projects/').replace(/\.webp$/, '.png')
    const original = await readFile(resolve('public', fallback.slice(1)))
    assert.equal(original.subarray(0, 8).toString('hex'), '89504e470d0a1a0a', `Invalid PNG fallback: ${fallback}`)
    assert.ok(original.readUInt32BE(16) > 0 && original.readUInt32BE(20) > 0, `Invalid dimensions: ${fallback}`)
    assert.ok(file.length < original.length, `WebP is not smaller: ${src}`)
    originalBytes += original.length
    optimizedBytes += file.length
    if (process.argv[2]) {
      for (const [path, bytes, mime] of [[src, file, 'image/webp'], [fallback, original, 'image/png']]) {
        const response = await fetch(new URL(path, process.argv[2]), { signal: AbortSignal.timeout(5000) })
        assert.equal(response.status, 200, `HTTP error: ${path}`)
        assert.equal(response.headers.get('content-type')?.split(';')[0], mime, `Incorrect MIME: ${path}`)
        assert.deepEqual(Buffer.from(await response.arrayBuffer()), bytes, `Wrong image served: ${path}`)
      }
    }
  }
  console.log(`Content OK: Spanish text preserved; ${images.length} WebP images selected with valid PNG fallbacks${process.argv[2] ? ' and served correctly over HTTP' : ''}.`)
  console.log(`Image bytes: ${originalBytes} -> ${optimizedBytes} (${(100 * (1 - optimizedBytes / originalBytes)).toFixed(1)}% smaller).`)
} finally {
  await server.close()
}
