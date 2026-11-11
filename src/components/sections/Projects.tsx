import { projects, type Project } from '../../data/projects'
import { hasRealUrl } from '../../lib/placeholder'
import { ProjectImage } from '../ui/ProjectImage'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'

function Links({ project }: { project: Project }) {
  return <div className="project-links">
    {hasRealUrl(project.demoUrl) && <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" aria-label={`Ver demo de ${project.title} (nueva pestaña)`}>Ver demo <span aria-hidden="true">↗</span></a>}
    {hasRealUrl(project.repoUrl) && <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" aria-label={`Ver código de ${project.title} (nueva pestaña)`}>Explorar código <span aria-hidden="true">↗</span></a>}
    {hasRealUrl(project.apiUrl) && <a href={project.apiUrl} target="_blank" rel="noopener noreferrer">API REST ↗</a>}
  </div>
}
function Tags({ project }: { project: Project }) {
  return <ul className="tech-tags" aria-label="Tecnologías">{project.stack.slice(0, 5).map(t => <li key={t}>{t}</li>)}</ul>
}
export function Projects() {
  const verity = projects.find(p => p.id === 'verity-news')!
  const plan = projects.find(p => p.id === 'plangune')!
  const pyme = projects.find(p => p.id === 'pymetask')!
  return (
    <Section id="proyectos" className="projects-section">
      <div className="section-topline"><SectionHeading eyebrow="01 / TRABAJO SELECCIONADO" title="Del problema al producto." subtitle="Tres proyectos. Tres formas de conectar desarrollo, personas e inteligencia artificial." /><span className="section-note">WEB · IA · ANDROID</span></div>
      <article className="featured-project">
        <div className="featured-copy">
          <p className="eyebrow text-accent">01 — INTELIGENCIA ARTIFICIAL</p><h3>Verity News<span className="project-dot">.</span></h3>
          <p className="project-lead">Más contexto para entender las noticias.</p>
          <p className="project-description">Una plataforma para analizar credibilidad, sesgo y fiabilidad con LLMs, RAG y búsqueda semántica.</p>
          <dl className="case-facts"><div><dt>EL RETO</dt><dd>Conectar el análisis de noticias con información relevante.</dd></div><div><dt>MI APORTACIÓN</dt><dd>Desarrollo full stack, arquitectura modular e integración de IA.</dd></div></dl>
          <Tags project={verity} /><Links project={verity} />
          <p className="project-context">Proyecto final · Máster de BIG school</p>
        </div>
        <div className="featured-visual"><div className="browser-frame"><div className="browser-chrome" aria-hidden="true"><i /><i /><i /><span>verity.davlos.es</span></div><ProjectImage src={verity.image} alt="Interfaz de análisis de noticias de Verity News" /></div><div className="rag-flow" aria-label="Tecnologías aplicadas en Verity News"><span>Información</span><b aria-hidden="true">→</b><span>RAG + LLMs</span><b aria-hidden="true">→</b><span>Análisis</span></div><p className="visual-caption">IA aplicada, desde los datos hasta la interfaz.</p></div>
      </article>
      <div className="secondary-projects">
        <article className="secondary-project plan-project"><div className="project-preview"><ProjectImage src={plan.image} alt="Página de planes familiares de PlanGune" /></div><div className="secondary-copy"><p className="eyebrow text-accent">02 — DESARROLLO WEB EN EQUIPO</p><h3>PlanGune<span className="project-dot">.</span></h3><p className="project-description">Descubrir planes en familia, cerca de casa. Una plataforma para familias y negocios de Euskadi.</p><p className="project-contribution"><strong>Mi aportación</strong> · Frontend, backend, integración y despliegue dentro de un equipo multidisciplinar.</p><Tags project={plan} /><Links project={plan} /><p className="project-context">Proyecto final · The Bridge</p></div></article>
        <article className="secondary-project mobile-project"><div className="mobile-preview"><div className="mobile-preview-copy"><p className="eyebrow">ANDROID / KOTLIN</p><p>El día a día<br />de un negocio.<br /><strong>En tu bolsillo.</strong></p></div><div className="phone-frame"><ProjectImage src={pyme.image} alt="Pantalla de PymeTask con agenda, movimientos, archivos y notas" /></div></div><div className="secondary-copy"><p className="eyebrow text-accent">03 — DESARROLLO MOBILE</p><h3>PymeTask<span className="project-dot">.</span></h3><p className="project-description">Contactos, tareas, notas y movimientos en una aplicación Android para pequeños negocios.</p><p className="project-contribution"><strong>La solución</strong> · Arquitectura MVVM, Jetpack Compose y servicios Firebase. Proyecto en desarrollo.</p><Tags project={pyme} /><Links project={pyme} /><p className="project-context">Proyecto final · DAM en ILERNA</p></div></article>
      </div>
      <details className="project-archive"><summary>Más proyectos y exploraciones <span>{projects.filter(p => !p.featured).length} proyectos <span aria-hidden="true">+</span></span></summary><div className="archive-grid">{projects.filter(p => !p.featured).map(p => <article className="archive-card" key={p.id}><div className="archive-image"><ProjectImage src={p.image} alt={`Captura de ${p.title}`} /></div><p className="eyebrow text-accent">{p.status === 'Disponible' ? 'DESPLEGADO' : 'EN DESARROLLO'}</p><h3>{p.title}</h3><p>{p.description}</p><details className="project-detail"><summary>Detalles del proyecto</summary><ul>{p.highlights.map(h => <li key={h}>{h}</li>)}</ul>{p.role && <p><strong>Mi rol:</strong> {p.role}</p>}</details><Tags project={p} /><Links project={p} /></article>)}</div></details>
    </Section>
  )
}
