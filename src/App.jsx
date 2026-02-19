import { useState } from 'react'
import { useTheme } from './hooks/useTheme'
import {
  Navbar,
  Background,
  Hero,
  About,
  Experience,
  Projects,
  Activities,
  Skills,
  Certifications,
  Contact,
  Footer,
} from './components'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useTheme()

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMenuOpen(false)
  }

  return (
    <>
      <Background />
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrollTo={scrollTo} theme={theme} setTheme={setTheme} />
      <main>
        <Hero scrollTo={scrollTo} />
        <About />
        <Experience />
        <Projects />
        <Activities />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer scrollTo={scrollTo} />
    </>
  )
}

export default App
