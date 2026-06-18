import { techStack } from '../../data/techStack'
import { Badge } from '../ui/Badge'
import { Card } from '../ui/Card'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'

export function Stack() {
  return (
    <Section id="stack" tone="subtle">
      <Reveal>
        <SectionHeading
          eyebrow="Tecnologías"
          title="Stack técnico"
          subtitle="Herramientas que utilizo con regularidad en proyectos web, móviles y de IA aplicada."
        />
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {techStack.map((group, index) => (
          <Reveal key={group.category} delay={index * 60}>
            <Card padded={false} className="h-full p-5">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item} label={item} />
                ))}
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
