import { profile } from '../../data/profile'
import { isPlaceholder } from '../../lib/placeholder'
import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'

export function Hero() {
  const cvReady = !isPlaceholder(profile.cvPath)
  const photoReady = !isPlaceholder(profile.photoPath)

  const initials = profile.name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')

  return (
    <Section
      id="inicio"
      tone="dark"
      padding="pb-20 pt-16 sm:pt-20 lg:pb-28 lg:pt-24"
      containerClassName="flex flex-col-reverse items-center gap-12 lg:flex-row lg:items-center lg:justify-between"
    >
        <Reveal className="max-w-2xl text-center lg:text-left">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            {profile.role}
          </p>
          <h1 className="mt-3 text-4xl font-bold leading-tight sm:text-5xl">{profile.name}</h1>
          <p className="mt-5 text-lg leading-relaxed text-white/85">{profile.heroSubtitle}</p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-sm text-white/70 lg:justify-start">
            <span>{profile.location}</span>
            <span aria-hidden="true">·</span>
            <span>{profile.availability}</span>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <Button href="#proyectos" variant="primary" size="lg">
              Ver proyectos
            </Button>
            <Button
              href={cvReady ? profile.cvPath : undefined}
              variant="outline"
              size="md"
              aria-disabled={!cvReady}
              title={cvReady ? undefined : 'CV próximamente disponible'}
              className={cvReady ? '' : 'cursor-not-allowed opacity-50'}
            >
              Descargar CV
            </Button>
            <Button href={profile.github} variant="secondary" external>
              GitHub
            </Button>
            <Button href={profile.linkedin} variant="secondary" external>
              LinkedIn
            </Button>
            <Button href="#contacto" variant="outline">
              Contactar
            </Button>
          </div>
        </Reveal>

        <Reveal delay={150} className="shrink-0">
          {photoReady ? (
            <img
              src={profile.photoPath}
              alt={`${profile.name}, ${profile.role}`}
              className="h-48 w-48 rounded-full border-4 border-accent/40 object-cover sm:h-56 sm:w-56"
            />
          ) : (
            <div className="flex h-48 w-48 items-center justify-center rounded-full border-4 border-accent/40 bg-ink-800 text-5xl font-bold text-white/80 sm:h-56 sm:w-56">
              {initials}
            </div>
          )}
        </Reveal>
    </Section>
  )
}
