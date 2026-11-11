import { aiCompetencies } from '../../data/aiCompetencies'
import { Badge } from '../ui/Badge'
import { Card } from '../ui/Card'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'

export function AICompetencies() {
  return (
    <Section id="competencias-ia" tone="subtle">
      <Reveal>
        <SectionHeading
          eyebrow="IA aplicada"
          title="Competencias en inteligencia artificial"
          subtitle="Capacidades trabajadas en el máster de BIG school y en mis proyectos de desarrollo."
        />
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {aiCompetencies.map((competency, index) => (
          <Reveal key={competency.title} delay={(index % 3) * 80}>
            <Card className="flex h-full flex-col">
              <div className="mb-4 flex min-h-7 items-center justify-between gap-3">
                <span className="text-sm font-bold tracking-widest text-accent" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                {competency.inProgress && <Badge label="Formación en curso" variant="accent" />}
              </div>
              <h3 className="text-xl font-bold text-ink-900">{competency.title}</h3>
              <p className="mt-3 flex-1 text-base leading-relaxed text-ink-700">
                {competency.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {competency.topics.map((topic) => <Badge key={topic} label={topic} />)}
              </div>
              {competency.projectLink && (
                <a
                  href={competency.projectLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${competency.projectLink.label} (se abre en una pestaña nueva)`}
                  className="mt-5 text-sm font-semibold text-ink-900 underline-offset-4 hover:text-accent hover:underline"
                >
                  {competency.projectLink.label} →
                </a>
              )}
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
