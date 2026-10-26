import { contact } from '../data/content'

function Footer() {
  const links = [
    ['Email', contact.email && `mailto:${contact.email}`, contact.email],
    ['Phone', contact.phone && `tel:${contact.phone.replace(/\s/g, '')}`, contact.phone],
    ['LinkedIn', contact.linkedin, 'LinkedIn'],
    ['Instagram', contact.instagram, 'Instagram'],
    ['X', contact.x, 'X'],
  ].filter(([, href]) => href)

  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <p className="footer-name">Betty Karimi</p>
          <p className="footer-tag">Trade Finance &middot; SME Empowerment &middot; Women in Business</p>
        </div>
        <ul className="footer-contact">
          {contact.location && (
            <li>
              <span>Based in</span>
              {contact.location}
            </li>
          )}
          {links.map(([label, href, text]) => (
            <li key={label}>
              <span>{label}</span>
              <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                {text}
              </a>
            </li>
          ))}
        </ul>
        <nav className="footer-links" aria-label="Footer">
          <a href="#about">About</a>
          <a href="#ventures">Ventures</a>
          <a href="#sheconomy">SHEconomy</a>
          <a href="#recognition">Recognition</a>
          <a href="#gallery">Gallery</a>
        </nav>
      </div>
      <div className="footer-bottom">
        <span>&copy; {new Date().getFullYear()} Betty Karimi. All rights reserved.</span>
        <span>Built by SpenceTec and Logistics Limited</span>
      </div>
    </footer>
  )
}

export default Footer
