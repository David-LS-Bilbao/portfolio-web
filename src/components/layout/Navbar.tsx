import { useEffect, useRef, useState } from 'react'
import { profile } from '../../data/profile'
const links = [{href:'#proyectos',label:'Proyectos'},{href:'#competencias-ia',label:'IA aplicada'},{href:'#sobre-mi',label:'Sobre mí'},{href:'#experiencia',label:'Trayectoria'},{href:'#contacto',label:'Contacto'}]
export function Navbar() {
  const [isOpen,setIsOpen] = useState(false)
  const [active,setActive] = useState('')
  const toggle = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => { if(event.key === 'Escape' && isOpen) {setIsOpen(false);toggle.current?.focus()} }
    window.addEventListener('keydown',onEscape)
    return () => window.removeEventListener('keydown',onEscape)
  },[isOpen])
  useEffect(() => {
    const observer = new IntersectionObserver(entries => { for(const entry of entries) if(entry.isIntersecting) setActive('#'+entry.target.id) },{rootMargin:'-15% 0px -55% 0px',threshold:0})
    document.querySelectorAll('main section[id]').forEach(s => observer.observe(s))
    return () => observer.disconnect()
  },[])
  return <header className="site-header"><a className="skip-link" href="#contenido">Saltar al contenido</a><nav aria-label="Navegación principal" className="site-nav mx-auto max-w-6xl"><a href="#inicio" className="brand" aria-label="David López Sotelo, inicio"><span className="brand-symbol" aria-hidden="true">d<span>.</span></span><span>David López Sotelo<span className="brand-subtitle">DESARROLLO & IA APLICADA</span></span></a><ul className="desktop-nav">{links.map(l => <li key={l.href}><a href={l.href} aria-current={active===l.href?'location':undefined}>{l.label}</a></li>)}</ul><a className="nav-cv" href={profile.cvPath}>Ver CV ↗</a><button ref={toggle} type="button" className="menu-toggle" aria-label={isOpen?'Cerrar menú':'Abrir menú'} aria-expanded={isOpen} aria-controls="mobile-navigation" onClick={()=>setIsOpen(!isOpen)}>{isOpen?'Cerrar ×':'Menú +'}</button></nav>{isOpen && <nav id="mobile-navigation" aria-label="Navegación móvil" className="mobile-nav">{links.map(l=><a key={l.href} href={l.href} aria-current={active===l.href?'location':undefined} onClick={()=>setIsOpen(false)}>{l.label} <span aria-hidden="true">↗</span></a>)}<a href={profile.cvPath} onClick={()=>setIsOpen(false)}>Ver CV ↗</a></nav>}</header>
}
