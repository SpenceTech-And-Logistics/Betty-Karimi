import { useState } from 'react'
import { awards, milestones } from '../data/content'

const items = [
  ...awards.map((a) => ({ ...a, kind: 'Award' })),
  ...milestones.map((m, i) => ({ ...m, kind: 'Milestone', num: String(i + 1).padStart(2, '0') })),
]

const TABS = [
  { key: 'All', label: 'All' },
  { key: 'Award', label: 'Awards' },
  { key: 'Milestone', label: 'Milestones' },
]

function Recognition() {
  const [tab, setTab] = useState('All')
  const shown = tab === 'All' ? items : items.filter((i) => i.kind === tab)

  return (
    <section className="sec hl" id="recognition" aria-labelledby="recognition-title">
      <div className="hl-head rv">
        <p className="eyebrow">Recognition</p>
        <h2 id="recognition-title">Awards &amp; Milestones</h2>
        <p>Honours for her leadership in trade finance, and the milestones behind them.</p>
      </div>

      <div className="tabs rv" role="tablist" aria-label="Filter">
        {TABS.map((t) => (
          <button key={t.key} type="button" role="tab" aria-selected={tab === t.key} className={tab === t.key ? 'on' : ''} onClick={() => setTab(t.key)}>
            {t.label}
          </button>
        ))}
      </div>

      <div className="hgrid" key={tab}>
        {shown.map((item, i) => (
          <article className={`hcard${item.image ? ' award' : ''}`} key={item.title} style={{ animationDelay: `${i * 60}ms` }}>
            <div className="hlogo">
              {item.image ? <img src={item.image} alt={item.title} loading="lazy" /> : <span>{item.num}</span>}
            </div>
            <div className="hbody">
              <span className="htag">{item.kind === 'Award' ? `Award · ${item.year}` : 'Milestone'}</span>
              <h3>{item.title}</h3>
              {item.by && <b>{item.by}</b>}
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Recognition
