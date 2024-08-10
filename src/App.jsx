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

function App() {
  const [lightdark, setLightDark] = useState(false)
  const [menuopen, setMenuOpen] = useState(false)
  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      setLightDark(true)
    } else {
      document.documentElement.classList.remove('dark')
      setLightDark(false)
    }
  }, [lightdark])

  function lightdarkmode() {
    if (!localStorage.theme || localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
      setLightDark(false)
    } else {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
      setLightDark(true)
    }
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
