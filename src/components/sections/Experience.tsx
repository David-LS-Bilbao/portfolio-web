import { experience } from '../../data/experience'
import { Badge } from '../ui/Badge'
import { Card } from '../ui/Card'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'

export function Experience() {
  return (
    <Section id="experiencia" tone="subtle">
      <Reveal>
        <SectionHeading
          eyebrow="Trayectoria"
          title="Experiencia profesional"
          subtitle="Experiencia previa con valor transferible al desarrollo de software."
        />
      </Reveal>

      <div className="space-y-6">
        {experience.map((item, index) => (
          <Reveal key={item.company} delay={index * 100}>
            <Card>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-xl font-bold text-ink-900">{item.role}</h3>
                <span className="text-sm font-medium text-ink-700">{item.dates}</span>
              </div>
              <p className="text-sm font-semibold text-accent">
                {item.company} · {item.location}
              </p>
              <p className="mt-4 text-base leading-relaxed text-ink-700">{item.description}</p>

              <ul className="mt-4 space-y-1.5 text-base text-ink-700">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-2">
                    <span className="text-accent" aria-hidden="true">
                      ▸
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5">
                <h4 className="mb-2 text-xs font-semibold uppercase tracking-widest text-ink-900/60">
                  Competencias transferibles
                </h4>
                <div className="flex flex-wrap gap-2">
                  {item.transferableSkills.map((skill) => (
                    <Badge key={skill} label={skill} variant="accent" />
                  ))}
                </div>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
