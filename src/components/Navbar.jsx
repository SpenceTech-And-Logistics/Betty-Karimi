import { useEffect, useState } from 'react'

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'ventures', label: 'Ventures' },
  { id: 'sheconomy', label: 'SHEconomy' },
  { id: 'recognition', label: 'Recognition' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'contact', label: 'Contact' },
]

function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const close = () => setOpen(false)

  // Highlights the link of the section in the middle of the screen.
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    ;['home', ...LINKS.map((l) => l.id)].forEach((id) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [])

  // Shrinks the bar and fills the purple-to-green progress line as you scroll.
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setScrolled(window.scrollY > 30)
      setProgress(max > 0 ? window.scrollY / max : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav${scrolled ? ' is-scrolled' : ''}`}>
      <span className="progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
      <a href="#home" className="nav-mark" onClick={close} aria-label="Betty Karimi, back to top">
        B<span>K</span>
      </a>
      <button
        type="button"
        className="nav-toggle"
        aria-expanded={open}
        aria-controls="primary-navigation"
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => setOpen((v) => !v)}
      >
        <i />
        <i />
      </button>
      <nav id="primary-navigation" className={`nav-links${open ? ' is-open' : ''}`} aria-label="Main">
        {LINKS.map(({ id, label }) => (
          <a key={id} href={`#${id}`} onClick={close} className={active === id ? 'active' : ''} aria-current={active === id ? 'true' : undefined}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default Navbar
