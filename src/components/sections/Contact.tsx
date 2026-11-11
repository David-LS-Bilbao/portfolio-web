import { profile } from '../../data/profile'
import { Button } from '../ui/Button'
import { Section } from '../ui/Section'

export function Contact() {
  return <Section id="contacto" tone="dark" className="contact-section"><p className="eyebrow text-accent-light">EL SIGUIENTE PASO</p><h2>¿Construimos<br /><span>algo útil?</span></h2><div className="contact-bottom"><div><p>Busco un equipo donde aportar desarrollo, IA aplicada y una visión práctica del negocio.</p><p className="contact-availability">Bilbao / Bizkaia · Presencial, híbrido o remoto</p></div><Button href={`mailto:${profile.email}`} size="lg">Hablemos <span aria-hidden="true">↗</span></Button></div><a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}</a></Section>
}
