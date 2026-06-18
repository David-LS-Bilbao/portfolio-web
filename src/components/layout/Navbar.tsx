import { useEffect, useState } from 'react'
import { profile } from '../../data/profile'
import { isPlaceholder } from '../../lib/placeholder'

const links = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#stack', label: 'Stack' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#formacion', label: 'Formación' },
  { href: '#contacto', label: 'Contacto' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const cvReady = !isPlaceholder(profile.cvPath)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        isScrolled ? 'border-ink-900/10 bg-ink-950/95 backdrop-blur' : 'border-transparent bg-ink-950'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#inicio" className="text-lg font-bold text-white">
          David López <span className="text-accent">Sotelo</span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-white/70 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={cvReady ? profile.cvPath : undefined}
          aria-disabled={!cvReady}
          title={cvReady ? undefined : 'CV próximamente disponible'}
          className={`hidden rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white transition-colors lg:inline-flex ${
            cvReady ? 'hover:bg-accent-dark' : 'cursor-not-allowed opacity-50'
          }`}
        >
          Descargar CV
        </a>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="inline-flex items-center justify-center rounded-md p-2 text-white lg:hidden"
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isOpen}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {isOpen && (
        <ul className="flex flex-col gap-1 border-t border-white/10 bg-ink-950 px-6 py-4 lg:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-md px-2 py-2 text-sm font-medium text-white/80 hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={cvReady ? profile.cvPath : undefined}
              aria-disabled={!cvReady}
              onClick={() => setIsOpen(false)}
              className={`mt-2 block rounded-full bg-accent px-4 py-2 text-center text-sm font-semibold text-white ${
                cvReady ? '' : 'cursor-not-allowed opacity-50'
              }`}
            >
              Descargar CV
            </a>
          </li>
        </ul>
      )}
    </header>
  )
}
