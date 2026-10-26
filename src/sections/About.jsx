import { about, career } from '../data/content'

function About() {
  return (
    <section className="sec about" id="about" aria-label="About">
      <div className="who">
        <div className="who-img rv from-l">
          <img src={about.image} alt="Betty Karimi speaking at the SHEconomy Summit" loading="lazy" width="634" height="853" />
          <span className="who-tag">Convener, SHEconomy Summit 2026</span>
        </div>
        <div className="who-tx rv from-r">
          <p className="eyebrow">About</p>
          <h2>{about.title}</h2>
          {about.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <ul className="chips" aria-label="Values">
            {about.values.map((v) => (
              <li key={v}>{v}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="ledger-wrap">
        <p className="eyebrow rv">Career path</p>
        <h3 className="h3 rv">Leadership &amp; Trade Finance Roles</h3>
        <ol className="ledger">
          {career.map((c, i) => (
            <li className="row rv" key={c.org} style={{ transitionDelay: `${i * 70}ms` }}>
              <span className="row-p">{c.period}</span>
              <div className="row-t">
                <b>{c.org}</b>
                <span>{c.title}</span>
              </div>
              <span className="row-l" aria-hidden="true" style={{ '--hue': 270 + i * 22 }}>
                {c.short}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default About
