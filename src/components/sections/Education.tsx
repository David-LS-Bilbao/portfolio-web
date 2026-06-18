import { education } from '../../data/education'
import { Card } from '../ui/Card'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'

export function Education() {
  return (
    <Section id="formacion" tone="light">
      <Reveal>
        <SectionHeading eyebrow="Formación" title="Formación académica" />
      </Reveal>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {education.map((item, index) => (
          <Reveal key={item.title} delay={index * 100}>
            <Card className="h-full">
              <h3 className="text-lg font-bold text-ink-900">{item.title}</h3>
              <p className="mt-1 text-sm font-semibold text-accent">{item.institution}</p>
              <p className="mt-1 text-sm text-ink-700">
                {item.hours}
                {item.grade ? ` · ${item.grade}` : ''}
              </p>
              <p className="mt-3 text-base leading-relaxed text-ink-700">{item.details}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
