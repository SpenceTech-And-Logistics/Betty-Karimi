import { ventures } from '../data/content'

function Ventures() {
  return (
    <section className="sec ventures" id="ventures" aria-labelledby="ventures-title">
      <div className="sec-head">
        <p className="eyebrow rv">Ventures</p>
        <h2 id="ventures-title" className="rv">
          Building the financing <em>SMEs were missing.</em>
        </h2>
      </div>
      <div className="vgrid">
        {ventures.map((v, i) => (
          <article className="vcard rv zoom" key={v.name} style={{ transitionDelay: `${i * 140}ms` }}>
            <span className="vnum" aria-hidden="true">
              0{i + 1}
            </span>
            <span className="rtag">{v.tag}</span>
            <h3>{v.name}</h3>
            <p>{v.text}</p>
            <ul className="vpoints">
              {v.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Ventures
