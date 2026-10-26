import { stats } from '../data/content'
import Count from '../components/Count'

function Stats() {
  return (
    <section className="stats" aria-label="At a glance">
      {stats.map((s, i) => (
        <div className="stat rv" key={s.label} style={{ transitionDelay: `${i * 110}ms` }}>
          <b>
            <Count value={s.value} />
          </b>
          <span>{s.label}</span>
        </div>
      ))}
    </section>
  )
}

export default Stats
