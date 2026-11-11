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
  for (const [element, src] of images) {
    assert.match(element, /alt="[^"]+"/, `Missing alt text: ${src}`)
    assert.ok(src.startsWith('/') && !src.includes('..'), `Unexpected image path: ${src}`)
    const file = await readFile(resolve('public', src.slice(1)))
    assert.equal(file.subarray(0, 8).toString('hex'), '89504e470d0a1a0a', `Not a PNG: ${src}`)
    assert.ok(file.readUInt32BE(16) > 0 && file.readUInt32BE(20) > 0, `Invalid dimensions: ${src}`)
    if (process.argv[2]) {
      const response = await fetch(new URL(src, process.argv[2]), { signal: AbortSignal.timeout(5000) })
      assert.equal(response.status, 200, `HTTP error: ${src}`)
      assert.match(response.headers.get('content-type') || '', /^image\/png/, `Incorrect MIME: ${src}`)
      assert.deepEqual(Buffer.from(await response.arrayBuffer()), file, `Wrong image served: ${src}`)
    }
  }
  console.log(`Content OK: Spanish text preserved; ${images.length} PNG images valid${process.argv[2] ? ' and served correctly over HTTP' : ''}.`)
} finally {
  await server.close()
}
