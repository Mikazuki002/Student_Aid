import { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { navLinks } from '../data/content'

type MobileMenuProps = {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement | null>(null)
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null)

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [isOpen, onClose])

  // Focus first link when opened
  useEffect(() => {
    if (isOpen) {
      const t = setTimeout(() => firstLinkRef.current?.focus(), 50)
      return () => clearTimeout(t)
    }
  }, [isOpen])

  return (
    <div
      id="mobile-menu"
      ref={menuRef}
      className={`mobile-menu${isOpen ? ' mobile-menu--open' : ''}`}
      aria-hidden={!isOpen}
    >
      <div className="mobile-menu__top">
        <span className="mobile-menu__title">Menu</span>
        <button
          type="button"
          className="mobile-menu__close"
          aria-label="Close menu"
          onClick={onClose}
        >
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <nav aria-label="Mobile navigation">
        <ul className="mobile-menu__list">
          {navLinks.map((link, idx) => (
            <li key={link.href}>
              <NavLink
                ref={idx === 0 ? firstLinkRef : undefined}
                className={({ isActive }) =>
                  `mobile-menu__link${isActive ? ' mobile-menu__link--active' : ''}`
                }
                to={link.href}
                end={link.href === '/'}
                onClick={onClose}
                tabIndex={isOpen ? 0 : -1}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <NavLink
        className="btn btn--gold mobile-menu__cta"
        to="/contact"
        onClick={onClose}
        tabIndex={isOpen ? 0 : -1}
      >
        Contact Us
      </NavLink>
    </div>
  )
}
