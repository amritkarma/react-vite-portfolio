import { useEffect, useState } from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Services from './components/Services'
import Skills from './components/Skills'
import TopButton from './components/TopButton'

function getInitialTheme() {
  return localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
}

function App() {
  const [lightdark, setLightDark] = useState(getInitialTheme)
  const [menuopen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', lightdark)
    localStorage.theme = lightdark ? 'dark' : 'light'
  }, [lightdark])

  function lightdarkmode() {
    setLightDark((currentTheme) => !currentTheme)
  }

  function menuOpen() {
    if (!menuopen) {
      setMenuOpen(true)
    } else {
      setMenuOpen(false)
    }
  }
  return (
    <>
      <Header lightdark={lightdark} lightdarkmode={lightdarkmode} menuopen={menuopen} menuOpen={menuOpen} />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Contact />
      <TopButton />
      <Footer />
    </>
  )
}

export default App
