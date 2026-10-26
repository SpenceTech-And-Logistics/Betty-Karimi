import { useState } from 'react'
import { contact } from '../data/content'

function Contact() {
  const [sent, setSent] = useState(false)
  const [busy, setBusy] = useState(false)

  async function submit(e) {
    e.preventDefault()
    const data = new FormData(e.target)
    if (contact.formspree) {
      setBusy(true)
      try {
        await fetch(`https://formspree.io/f/${contact.formspree}`, { method: 'POST', body: data, headers: { Accept: 'application/json' } })
        setSent(true)
      } finally {
        setBusy(false)
      }
    } else if (contact.email) {
      const subject = encodeURIComponent(`Enquiry from ${data.get('name')}`)
      const body = encodeURIComponent(`${data.get('message')}\n\n${data.get('name')} (${data.get('email')})`)
      window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`
    } else {
      setSent(true)
    }
  }

  return (
    <section className="sec contact" id="contact" aria-labelledby="contact-title">
      <div className="ct-l rv from-l">
        <p className="eyebrow">Contact</p>
        <h2 id="contact-title">
          Let&rsquo;s talk <em>business.</em>
        </h2>
        <p>Partnerships, speaking invitations, media and SME financing enquiries are welcome.</p>
      </div>
      <form className="ct-form rv from-r" onSubmit={submit}>
        {sent ? (
          <p className="ok">Thank you. Your message has been received.</p>
        ) : (
          <>
            <label>
              Name
              <input name="name" autoComplete="name" required />
            </label>
            <label>
              Email
              <input type="email" name="email" autoComplete="email" required />
            </label>
            <label>
              Message
              <textarea name="message" rows="5" required />
            </label>
            <button className="btn solid" type="submit" disabled={busy}>
              {busy ? 'Sending…' : 'Send message'}
            </button>
          </>
        )}
      </form>
    </section>
  )
}

export default Contact
