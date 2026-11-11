import { profile } from '../../data/profile'
import { Button } from '../ui/Button'

export function Hero() {
  return (
    <section id="inicio" className="hero-section">
      <div className="hero-grid mx-auto max-w-6xl">
        <div className="hero-copy">
          <p className="eyebrow text-accent-light">FULL STACK / IA APLICADA / MOBILE</p>
          <h1>Ideas de negocio.<br />Código que las<br /><span className="hero-emphasis">hace realidad.</span></h1>
          <p className="hero-intro">Soy <strong>David López Sotelo</strong>. Desarrollo aplicaciones web, integro inteligencia artificial y conecto tecnología con necesidades reales.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#proyectos" size="lg">Explorar proyectos <span aria-hidden="true">↗</span></Button>
            <Button href="#contacto" variant="outline" size="lg">Hablemos</Button>
          </div>
          <div className="hero-links">
            <a href={profile.cvPath}>CV de IA y desarrollo ↗</a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub (se abre en otra pestaña)">GitHub ↗</a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (se abre en otra pestaña)">LinkedIn ↗</a>
          </div>
        </div>
        <div className="portrait-panel">
          <div className="portrait-frame">
            <img src={profile.photoPath} width="809" height="1090" fetchPriority="high" alt={profile.name} />
            <div className="portrait-caption"><span>DESARROLLADOR · BILBAO</span><strong>Visión de negocio.<br />Mentalidad de producto.</strong></div>
          </div>
          <div className="availability"><span aria-hidden="true" />Disponible para nuevos retos</div>
        </div>
      </div>
      <div className="hero-bottom mx-auto max-w-6xl"><p>Web & APIs <span>/</span> Inteligencia artificial <span>/</span> Android</p><a href="#proyectos">Descubre mi trabajo <span aria-hidden="true">↓</span></a></div>
    </section>
  )
}
