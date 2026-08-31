import { Link } from 'react-router-dom'
import { brand, footer } from '../data/content'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__name">{brand.name}</div>
            <p className="footer__tagline">{footer.description}</p>
            <address className="footer__address">
              <a href={brand.phoneHref}>{brand.phoneDisplay}</a>
              <a href={brand.emailHref}>{brand.email}</a>
              <span>{brand.address}</span>
            </address>
          </div>

          <nav aria-label="Footer navigation" className="footer__nav">
            <h2 className="footer__nav-title">Explore</h2>
            <ul className="footer__nav-list">
              {footer.links.map((link) => (
                <li key={link.href}>
                  <Link className="footer__link" to={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer__legal">
            <h2 className="footer__nav-title">Important Information</h2>
            <p className="footer__disclaimer">{footer.disclaimer}</p>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
