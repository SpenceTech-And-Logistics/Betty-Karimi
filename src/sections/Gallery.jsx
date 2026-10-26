import { useEffect, useState } from 'react'
import { gallery } from '../data/content'

function Gallery() {
  const [i, setI] = useState(null)
  const next = () => setI((x) => (x + 1) % gallery.length)
  const prev = () => setI((x) => (x - 1 + gallery.length) % gallery.length)

  useEffect(() => {
    if (i === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') setI(null)
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [i])

  return (
    <section className="sec gallery" id="gallery" aria-labelledby="gallery-title">
      <div className="sec-head">
        <p className="eyebrow rv">Gallery</p>
        <h2 id="gallery-title" className="rv">
          Moments that <em>matter.</em>
        </h2>
      </div>
      <div className="ggrid">
        {gallery.map((g, n) => (
          <button
            type="button"
            key={g.src}
            className={`gi rv zoom ${g.span || ''}`}
            style={{ transitionDelay: `${(n % 3) * 90}ms` }}
            onClick={() => setI(n)}
            aria-label={`Open photo: ${g.caption}`}
          >
            <img src={g.src} alt={g.caption} loading="lazy" />
            <span>{g.caption}</span>
          </button>
        ))}
      </div>

      {i !== null && (
        <div className="lb" role="dialog" aria-modal="true" aria-label={gallery[i].caption} onClick={() => setI(null)}>
          <button type="button" className="lbx" aria-label="Close" onClick={() => setI(null)}>
            &times;
          </button>
          <button type="button" className="lbn l" aria-label="Previous photo" onClick={(e) => { e.stopPropagation(); prev() }}>
            &#8249;
          </button>
          <figure key={i} onClick={(e) => e.stopPropagation()}>
            <img src={gallery[i].src} alt={gallery[i].caption} />
            <figcaption>
              {gallery[i].caption}
              <small>
                {i + 1} / {gallery.length}
              </small>
            </figcaption>
          </figure>
          <button type="button" className="lbn r" aria-label="Next photo" onClick={(e) => { e.stopPropagation(); next() }}>
            &#8250;
          </button>
        </div>
      )}
    </section>
  )
}

export default Gallery
