import { sheconomy } from '../data/content'
import Count from '../components/Count'

function She() {
  return (
    <section className="she" id="sheconomy" aria-labelledby="she-title">
      <div className="she-bg" style={{ backgroundImage: `url(${sheconomy.image})` }} aria-hidden="true" />
      <div className="she-in">
        <p className="eyebrow rv">Founder &amp; Convener</p>
        <h2 id="she-title" className="rv">
          {sheconomy.title}
        </h2>
        <p className="she-num rv">
          <Count value="1,000,000" duration={2200} />
        </p>
        <p className="she-cap rv">women millionaires in five years</p>
        <p className="she-tx rv">{sheconomy.text}</p>
      </div>
    </section>
  )
}

export default She
