import { useEffect, useRef, useState } from 'react'
import { person, contact, stats, about, ventures, sheconomy, awards, milestones, gallery } from './content.js'

const nav = [['about', 'About'], ['ventures', 'Ventures'], ['sheconomy', 'SHEconomy'], ['awards', 'Awards'], ['impact', 'Impact'], ['gallery', 'Gallery']]

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.rv')
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } }),
      { threshold: 0.12 }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

function Count({ value }) {
  const m = value.match(/^([\d,]+)(.*)$/)
  const ref = useRef(null)
  const [n, setN] = useState(m ? 0 : null)
  useEffect(() => {
    if (!m) return
    const target = parseInt(m[1].replace(/,/g, ''), 10)
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      const t0 = performance.now()
      const tick = (t) => {
        const p = Math.min(1, (t - t0) / 1400)
        setN(Math.round(target * (1 - Math.pow(1 - p, 3))))
        if (p < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }, { threshold: 0.6 })
    io.observe(ref.current)
    return () => io.disconnect()
  }, [])
  if (!m) return <span ref={ref}>{value}</span>
  return <span ref={ref}>{n.toLocaleString('en-US')}{m[2]}</span>
}

function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 24)
    f(); window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [])
  return (
    <header className={'hdr' + (scrolled ? ' sc' : '')}>
      <a href="#top" className="brand" onClick={() => setOpen(false)}>Betty Karimi</a>
      <nav className={open ? 'open' : ''}>
        {nav.map(([id, l]) => <a key={id} href={'#' + id} onClick={() => setOpen(false)}>{l}</a>)}
        <a href="#contact" className="pill" onClick={() => setOpen(false)}>Get in touch</a>
      </nav>
      <button className="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}><i /><i /></button>
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-in">
        <div className="hero-copy">
          <p className="eyebrow">Trade finance · SME empowerment · Africa</p>
          <h1>Betty <em>Karimi</em></h1>
          <p className="headline">{person.headline}</p>
          <p className="lead">{person.intro}</p>
          <div className="cta">
            <a href="#ventures" className="btn solid">Explore her work</a>
            <a href="#contact" className="btn ghost">Get in touch</a>
          </div>
          <ul className="roles">{person.roles.map((r) => <li key={r}>{r}</li>)}</ul>
        </div>
        <div className="hero-ph">
          <div className="frame"><img src={person.portrait} alt="Betty Karimi" fetchpriority="high" /></div>
          <div className="badge"><b>Female CEO of the Year</b><span>COYA Awards 2026</span></div>
        </div>
      </div>
    </section>
  )
}

function Stats() {
  return (
    <section className="stats">
      {stats.map((s) => (
        <div className="stat rv" key={s.label}><b><Count value={s.value} /></b><span>{s.label}</span></div>
      ))}
    </section>
  )
}

function About() {
  return (
    <section id="about" className="sec about">
      <div className="about-ph rv"><img src={about.image} alt="Betty Karimi at the SHEconomy Summit" loading="lazy" /></div>
      <div className="about-tx rv">
        <p className="eyebrow dk">About</p>
        <h2>{about.title}</h2>
        {about.body.map((p) => <p key={p} className="body">{p}</p>)}
        <ul className="chips">{about.values.map((v) => <li key={v}>{v}</li>)}</ul>
      </div>
    </section>
  )
}

function Ventures() {
  return (
    <section id="ventures" className="sec ventures">
      <p className="eyebrow">Ventures</p>
      <h2 className="rv">Building the financing SMEs were missing.</h2>
      <div className="vgrid">
        {ventures.map((v, i) => (
          <article className="vcard rv" key={v.name} style={{ transitionDelay: i * 120 + 'ms' }}>
            <span className="vtag">{v.tag}</span>
            <h3>{v.name}</h3>
            <p>{v.text}</p>
            <ul>{v.points.map((p) => <li key={p}>{p}</li>)}</ul>
          </article>
        ))}
      </div>
    </section>
  )
}

function She() {
  return (
    <section id="sheconomy" className="she" style={{ backgroundImage: `linear-gradient(90deg,rgba(12,27,42,.94) 35%,rgba(12,27,42,.55)),url(${sheconomy.image})` }}>
      <div className="she-in rv">
        <p className="eyebrow">Convener</p>
        <h2>{sheconomy.title}</h2>
        <p className="big">One million women millionaires in five years.</p>
        <p>{sheconomy.text}</p>
      </div>
    </section>
  )
}

function Awards() {
  return (
    <section id="awards" className="sec awards">
      <p className="eyebrow dk">Recognition</p>
      <h2 className="rv">Awards &amp; honours</h2>
      <div className="agrid">
        {awards.map((a) => (
          <article className="acard rv" key={a.title}>
            <img src={a.image} alt={a.title} loading="lazy" />
            <div>
              <span className="yr">{a.year}</span>
              <h3>{a.title}</h3>
              <b>{a.by}</b>
              <p>{a.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Impact() {
  return (
    <section id="impact" className="sec impact">
      <p className="eyebrow">Key achievements</p>
      <h2 className="rv">Leadership milestones</h2>
      <ol className="mlist">
        {milestones.map((m, i) => (
          <li className="rv" key={m.title}>
            <span className="num">{String(i + 1).padStart(2, '0')}</span>
            <div><h3>{m.title}</h3><p>{m.text}</p></div>
          </li>
        ))}
      </ol>
    </section>
  )
}

function Gallery() {
  const [i, setI] = useState(null)
  useEffect(() => {
    if (i === null) return
    const k = (e) => {
      if (e.key === 'Escape') setI(null)
      if (e.key === 'ArrowRight') setI((x) => (x + 1) % gallery.length)
      if (e.key === 'ArrowLeft') setI((x) => (x - 1 + gallery.length) % gallery.length)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', k)
    return () => { window.removeEventListener('keydown', k); document.body.style.overflow = '' }
  }, [i])
  return (
    <section id="gallery" className="sec gallery">
      <p className="eyebrow dk">Gallery</p>
      <h2 className="rv">Moments that matter</h2>
      <div className="ggrid">
        {gallery.map((g, n) => (
          <button key={g.src} className={'gi rv ' + (g.span || '')} onClick={() => setI(n)} aria-label={'Open: ' + g.caption}>
            <img src={g.src} alt={g.caption} loading="lazy" />
            <span>{g.caption}</span>
          </button>
        ))}
      </div>
      {i !== null && (
        <div className="lb" role="dialog" aria-modal="true" onClick={() => setI(null)}>
          <button className="lbx" aria-label="Close">×</button>
          <button className="lbn l" aria-label="Previous" onClick={(e) => { e.stopPropagation(); setI((i - 1 + gallery.length) % gallery.length) }}>‹</button>
          <figure onClick={(e) => e.stopPropagation()}><img src={gallery[i].src} alt={gallery[i].caption} /><figcaption>{gallery[i].caption}</figcaption></figure>
          <button className="lbn r" aria-label="Next" onClick={(e) => { e.stopPropagation(); setI((i + 1) % gallery.length) }}>›</button>
        </div>
      )}
    </section>
  )
}

function Contact() {
  const [sent, setSent] = useState(false)
  const links = [['Email', contact.email && 'mailto:' + contact.email, contact.email], ['Phone', contact.phone && 'tel:' + contact.phone.replace(/\s/g, ''), contact.phone], ['LinkedIn', contact.linkedin, 'LinkedIn'], ['Instagram', contact.instagram, 'Instagram'], ['X', contact.x, 'X']].filter((l) => l[1])
  async function submit(e) {
    e.preventDefault()
    const d = new FormData(e.target)
    if (contact.formspree) {
      await fetch('https://formspree.io/f/' + contact.formspree, { method: 'POST', body: d, headers: { Accept: 'application/json' } })
      setSent(true)
    } else if (contact.email) {
      location.href = `mailto:${contact.email}?subject=${encodeURIComponent('Enquiry from ' + d.get('name'))}&body=${encodeURIComponent(d.get('message') + '\n\n' + d.get('name') + ' (' + d.get('email') + ')')}`
    } else setSent(true)
  }
  return (
    <section id="contact" className="sec contact">
      <div className="ct-l rv">
        <p className="eyebrow">Contact</p>
        <h2>Let’s talk business.</h2>
        <p>Partnerships, speaking invitations, media and SME financing enquiries are welcome.</p>
        <ul>
          {contact.location && <li><span>Based in</span>{contact.location}</li>}
          {links.map(([l, h, t]) => <li key={l}><span>{l}</span><a href={h} target={h.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{t}</a></li>)}
        </ul>
      </div>
      <form className="rv" onSubmit={submit}>
        {sent ? <p className="ok">Thank you. Your message has been received.</p> : (<>
          <label>Name<input name="name" required /></label>
          <label>Email<input type="email" name="email" required /></label>
          <label>Message<textarea name="message" rows="5" required /></label>
          <button className="btn solid" type="submit">Send message</button>
        </>)}
      </form>
    </section>
  )
}

export default function App() {
  useReveal()
  return (
    <>
      <Header />
      <main>
        <Hero /><Stats /><About /><Ventures /><She /><Awards /><Impact /><Gallery /><Contact />
      </main>
      <footer className="ft">
        <span>© {new Date().getFullYear()} Betty Karimi</span>
        <span>Built by SpenceTecH &amp; Logistics Ltd</span>
      </footer>
    </>
  )
}
