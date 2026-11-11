import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { About } from './components/sections/About'
import { AICompetencies } from './components/sections/AICompetencies'
import { Contact } from './components/sections/Contact'
import { Education } from './components/sections/Education'
import { Experience } from './components/sections/Experience'
import { Hero } from './components/sections/Hero'
import { Projects } from './components/sections/Projects'
import { Stack } from './components/sections/Stack'

function App() {
  return (
    <>
      <Navbar />
      <main id="contenido" tabIndex={-1}>
        <Hero />
        <Projects />
        <AICompetencies />
        <About />
        <Stack />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
