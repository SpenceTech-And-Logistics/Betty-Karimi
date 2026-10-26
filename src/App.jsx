import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Stats from './sections/Stats'
import About from './sections/About'
import Ventures from './sections/Ventures'
import She from './sections/She'
import Recognition from './sections/Recognition'
import Gallery from './sections/Gallery'
import Contact from './sections/Contact'

// Fades and slides blocks in as they scroll into view. Content stays
// visible if JavaScript is off (the hidden state only applies once this runs).
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.rv')
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in'))
      return
    }
    document.documentElement.classList.add('js')
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            io.unobserve(entry.target)
          }
        }),
      { threshold: 0.12 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

function App() {
  useReveal()
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Stats />
        <About />
        <Ventures />
        <She />
        <Recognition />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
