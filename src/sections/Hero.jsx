import { person } from '../data/content'

const d = (ms) => ({ '--d': `${ms}ms` })

function Hero() {
  const [first, ...rest] = person.name.split(' ')
  const row = [...person.ticker, ...person.ticker]

  return (
    <>
      <section className="hero" id="home" aria-labelledby="hero-title">
        <div className="hero-l">
          <p className="eyebrow load" style={d(0)}>
            Trade finance &middot; SME empowerment &middot; Africa
          </p>
          <h1 id="hero-title">
            <span className="ln">
              <span className="w" style={d(120)}>{first}</span>
            </span>
            <span className="ln it">
              <span className="w" style={d(280)}>{rest.join(' ')}</span>
            </span>
          </h1>
          <p className="hero-sub load" style={d(480)}>
            {person.headline}
          </p>
          <ul className="chips hero-chips" aria-label="Current roles">
            {person.roles.map((role, i) => (
              <li key={role} className="load" style={d(600 + i * 90)}>
                {role}
              </li>
            ))}
          </ul>
          <div className="cta load" style={d(900)}>
            <a href="#ventures" className="btn solid">
              Explore her work
            </a>
            <a href="#contact" className="btn line">
              Get in touch
            </a>
          </div>
        </div>

        <div className="hero-r">
          <span className="glow" aria-hidden="true" />
          <span className="orbit o1" aria-hidden="true">
            <i />
          </span>
          <span className="orbit o2" aria-hidden="true">
            <i />
          </span>
          <div className="arch">
            <img src={person.portrait} alt="Portrait of Betty Karimi" width="1200" height="1600" fetchPriority="high" />
          </div>
          <div className="seal">
            <b>2026</b>
            <span>Female CEO of the Year</span>
          </div>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div className="track">
          {row.concat(row).map((word, i) => (
            <span key={i}>
              {word}
              <em>&#10022;</em>
            </span>
          ))}
        </div>
      </div>
    </>
  )
}

export default Hero
