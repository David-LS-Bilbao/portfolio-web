import { profile } from '../../data/profile'
import { Badge } from '../ui/Badge'
import { Card } from '../ui/Card'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'

export function About() {
  return (
    <Section id="sobre-mi" tone="light">
      <Reveal>
        <SectionHeading eyebrow="Carta de presentación" title="Sobre mí" />
      </Reveal>

      <div className="grid gap-10 lg:grid-cols-3">
        <Reveal className="lg:col-span-2" delay={100}>
          <div className="space-y-5 text-lg leading-relaxed text-ink-700">
            {profile.aboutParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="space-y-6">
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-widest text-ink-900/60">
                Competencias
              </h3>
              <div className="flex flex-wrap gap-2">
                {profile.competencies.map((competency) => (
                  <Badge key={competency} label={competency} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-widest text-ink-900/60">
                Idiomas
              </h3>
              <ul className="space-y-1 text-base text-ink-700">
                {profile.languages.map((language) => (
                  <li key={language}>{language}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-widest text-ink-900/60">
                Otros
              </h3>
              <ul className="space-y-1 text-base text-ink-700">
                {profile.others.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal delay={250} className="mt-14">
        <h3 className="mb-6 text-sm font-semibold uppercase tracking-widest text-ink-900/60">
          Qué aporto
        </h3>
        <div className="grid gap-6 sm:grid-cols-3">
          {profile.strengths.map((strength) => (
            <Card key={strength.title}>
              <h4 className="text-lg font-bold text-ink-900">{strength.title}</h4>
              <p className="mt-2 text-base leading-relaxed text-ink-700">{strength.description}</p>
            </Card>
          ))}
        </div>
      </Reveal>
    </Section>
  )
}
