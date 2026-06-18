import { profile } from '../../data/profile'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink-950 px-6 py-10 text-white/70">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-base sm:flex-row">
        <p>
          © {year} {profile.name}. Todos los derechos reservados.
        </p>
        <div className="flex gap-5">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub (se abre en una pestaña nueva)"
            className="transition-colors hover:text-white"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn (se abre en una pestaña nueva)"
            className="transition-colors hover:text-white"
          >
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="transition-colors hover:text-white">
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
