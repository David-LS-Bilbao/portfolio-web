import type { Project } from '../../data/projects'
import { projects } from '../../data/projects'
import { hasRealUrl } from '../../lib/placeholder'
import { Badge } from '../ui/Badge'
import { Card } from '../ui/Card'
import { ProjectImage } from '../ui/ProjectImage'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'

const statusLabels: Record<Project['status'], string> = {
  Disponible: 'Desplegado',
  'En desarrollo': 'En desarrollo',
}

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  const repoUrl = hasRealUrl(project.repoUrl) ? project.repoUrl : undefined
  const demoUrl = hasRealUrl(project.demoUrl) ? project.demoUrl : undefined
  const apiUrl = hasRealUrl(project.apiUrl) ? project.apiUrl : undefined

  return (
    <Reveal delay={delay} className={project.layout === 'wide' ? 'lg:col-span-2' : 'lg:col-span-1'}>
      <Card
        padded={false}
        className={`flex h-full flex-col overflow-hidden ${
          project.featured ? 'border-accent/40 ring-1 ring-accent/10' : ''
        }`}
      >
        <div className="aspect-video w-full overflow-hidden bg-ink-900">
          <ProjectImage src={project.image} alt={`Captura de pantalla de ${project.title}`} />
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div className="flex flex-wrap items-center gap-2">
            <Badge
              label={statusLabels[project.status]}
              variant={project.status === 'Disponible' ? 'accent' : 'default'}
            />
            {project.tags.map((tag) => (
              <Badge key={tag} label={tag} />
            ))}
          </div>

          <h3 className="mt-3 text-xl font-bold text-ink-900">{project.title}</h3>
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">{project.type}</p>
          <p className="mt-3 text-base leading-relaxed text-ink-700">{project.description}</p>

          <ul className="mt-4 space-y-1.5 text-base text-ink-700">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-2">
                <span className="text-accent" aria-hidden="true">
                  ▸
                </span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>

          {project.teamProject && project.role && (
            <p className="mt-4 text-sm italic text-ink-700/80">Mi rol: {project.role}</p>
          )}

          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <Badge key={tech} label={tech} />
            ))}
          </div>

          {(repoUrl || demoUrl || apiUrl) && (
            <div className="mt-auto flex flex-wrap items-center gap-4 pt-6 text-sm font-semibold">
              {demoUrl && (
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Demo de ${project.title} (se abre en una pestaña nueva)`}
                  className="text-ink-900 underline-offset-4 hover:text-accent hover:underline"
                >
                  Ver demo →
                </a>
              )}
              {repoUrl && (
                <a
                  href={repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Repositorio de ${project.title} (se abre en una pestaña nueva)`}
                  className="text-ink-900 underline-offset-4 hover:text-accent hover:underline"
                >
                  Ver código →
                </a>
              )}
              {apiUrl && (
                <a
                  href={apiUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`API de ${project.title} (se abre en una pestaña nueva)`}
                  className="text-ink-900 underline-offset-4 hover:text-accent hover:underline"
                >
                  API REST →
                </a>
              )}
            </div>
          )}
        </div>
      </Card>
    </Reveal>
  )
}

export function Projects() {
  const deployed = projects.filter((project) => project.featured)
  const others = projects.filter((project) => !project.featured)

  return (
    <Section id="proyectos" tone="light">
      <Reveal>
        <SectionHeading
          eyebrow="Portfolio"
          title="Proyectos destacados"
          subtitle="Proyectos full stack, mobile e IA aplicada, de mayor a menor alcance."
        />
      </Reveal>

      <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-accent">
        Proyectos desplegados
      </h3>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {deployed.map((project, index) => (
          <ProjectCard key={project.id} project={project} delay={(index % 3) * 80} />
        ))}
      </div>

      <h3 className="mb-6 mt-16 border-t border-ink-900/10 pt-12 text-sm font-semibold uppercase tracking-widest text-ink-900/50">
        Otros proyectos
      </h3>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {others.map((project, index) => (
          <ProjectCard key={project.id} project={project} delay={(index % 3) * 80} />
        ))}
      </div>
    </Section>
  )
}
