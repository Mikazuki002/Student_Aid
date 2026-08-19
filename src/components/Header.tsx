import { brand, navLinks, topBar } from '../data/content'

type HeaderProps = {
  onMenuToggle: () => void
  mobileMenuOpen: boolean
}

export default function Header({ onMenuToggle, mobileMenuOpen }: HeaderProps) {
  return (
    <header className="site-header">
      <div className="top-bar">
        <div className="container top-bar__inner">
          <p className="top-bar__text">{topBar.text}</p>
          <div className="top-bar__contact">
            <a className="top-bar__link" href={brand.phoneHref}>
              {brand.phoneDisplay}
            </a>
            <a className="top-bar__link" href={brand.emailHref}>
              {brand.email}
            </a>
          </div>
        </div>
      </div>

      <div className="container header__inner">
        <a className="site-logo-link" href="/" aria-label={`${brand.name} home`}>
          {/* Replace /images/student-aid-support-group-logo.png with the official logo file I provide. */}
          <div
            className="logo-placeholder logo-placeholder--header"
            role="img"
            aria-label="Official Student Aid Support Group LLC logo will be added here"
          >
            {/* Official Student Aid Support Group LLC logo will be added here. */}
            <span>{brand.name}</span>
          </div>
        </a>

        <nav className="primary-nav" aria-label="Primary navigation">
          <ul className="primary-nav__list">
            {navLinks.map((link) => (
              <li key={link.href} className="primary-nav__item">
                <a className="primary-nav__link" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a className="btn btn--gold header__cta" href="/contact">
          Contact Us
        </a>

        <button
          type="button"
          className="menu-button"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          onClick={onMenuToggle}
        >
          <span className="menu-button__bar" aria-hidden="true" />
          <span className="menu-button__bar" aria-hidden="true" />
          <span className="menu-button__bar" aria-hidden="true" />
        </button>
      </div>
    </header>
  )
}
