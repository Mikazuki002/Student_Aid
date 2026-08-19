import { Link, NavLink } from 'react-router-dom'
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
        <Link className="site-logo-link" to="/" aria-label={`${brand.name} home`}>
          {/* Background-removed logo. Path goes through BASE_URL so it
              resolves under /Student_Aid/ on GitHub Pages and under /
              on the local dev server. */}
          <img
            src={`${import.meta.env.BASE_URL}image_assets/Student_Aid_Logo-removebg.png`}
            alt="Student Aid Support Group LLC logo"
            width={56}
            height={56}
            decoding="async"
            className="site-logo site-logo--header"
          />
        </Link>

        <nav className="primary-nav" aria-label="Primary navigation">
          <ul className="primary-nav__list">
            {navLinks.map((link) => (
              <li key={link.href} className="primary-nav__item">
                <NavLink
                  className={({ isActive }) =>
                    `primary-nav__link${isActive ? ' primary-nav__link--active' : ''}`
                  }
                  to={link.href}
                  end={link.href === '/'}
                  aria-current={undefined}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <Link className="btn btn--gold header__cta" to="/contact">
          Contact Us
        </Link>

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
