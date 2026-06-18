import { profile } from '../../data/profile'
import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'

export function Contact() {
  return (
    <Section id="contacto" tone="dark" containerClassName="max-w-3xl text-center">
      <Reveal>
        <SectionHeading
          eyebrow="Contacto"
          title="¿Hablamos?"
          subtitle="Disponibilidad completa para incorporación presencial, híbrida o remota."
          light
          center
        />
      </Reveal>

      <Reveal delay={100}>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button href={`mailto:${profile.email}`} variant="primary">
            {profile.email}
          </Button>
          <Button href={profile.github} variant="outline" external>
            GitHub
          </Button>
          <Button href={profile.linkedin} variant="outline" external>
            LinkedIn
          </Button>
        </div>
        <p className="mt-8 text-lg leading-relaxed text-white/85">{profile.seekingStatement}</p>
        <p className="mt-4 text-sm text-white/60">
          El teléfono de contacto se incluye en el CV en PDF, no se publica en la web.
        </p>
      </Reveal>
    </Section>
  )
}
