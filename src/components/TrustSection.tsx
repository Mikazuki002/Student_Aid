import { trustItems } from '../data/content'

// Three hand-drawn obsidian marks for the trust strip:
// 1. Steps   — primitive path, three ascending stepping stones
// 2. Hand    — abstract guide-hand over a small personal mark
// 3. Globe   — carved circle with continent lines + a small dot
//
// All three share the same viewBox, stroke width, line caps, and color
// so they read as a single visual system.
type IconName = 'steps' | 'hand' | 'globe'

function TrustIcon({ name }: { name: IconName }) {
  // Common paint = the brand gold; the "carving" is a deep charcoal so the
  // mark feels pressed into polished gold rather than printed on top.
  return (
    <svg
      viewBox="0 0 32 32"
      className="trust__icon-svg"
      aria-hidden="true"
      focusable="false"
    >
      {name === 'steps' && (
        <g fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          {/* Three ascending stepping stones, left to right */}
          <path d="M5 23 L11 23 L11 19 L5 19 Z" fill="currentColor" />
          <path d="M14 19 L20 19 L20 14 L14 14 Z" fill="currentColor" />
          <path d="M23 14 L29 14 L29 8  L23 8  Z" fill="currentColor" />
        </g>
      )}

      {name === 'hand' && (
        <g fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          {/* Abstract guide-hand: cupped palm with a small personal dot above */}
          <path
            d="M6 22 C 6 17, 9 14, 13 14 L 19 14 C 22 14, 25 16, 26 19 L 26 23 C 26 25, 24 26, 22 26 L 11 26 C 8 26, 6 24, 6 22 Z"
            fill="currentColor"
            fillOpacity="0.92"
          />
          {/* The "personal" mark: a single small circle hovering above the palm */}
          <circle cx="16" cy="8" r="2.4" fill="currentColor" />
        </g>
      )}

      {name === 'globe' && (
        <g fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          {/* Carved circle with continent lines */}
          <circle cx="16" cy="16" r="11" fill="currentColor" />
          {/* Equator */}
          <path d="M5 16 L27 16" stroke="#C9A24A" strokeWidth="1.6" />
          {/* Two meridian arcs suggesting land masses */}
          <path d="M16 5 C 11 11, 11 21, 16 27" stroke="#C9A24A" strokeWidth="1.6" />
          <path d="M16 5 C 21 11, 21 21, 16 27" stroke="#C9A24A" strokeWidth="1.6" />
          {/* A single small "home base" mark — center dot */}
          <circle cx="16" cy="16" r="1.2" fill="#C9A24A" />
        </g>
      )}
    </svg>
  )
}

// Each trust item picks the icon by index so the order stays in sync with content.ts.
const iconOrder: IconName[] = ['steps', 'hand', 'globe']

export default function TrustSection() {
  return (
    <section className="trust" aria-label="Why work with us">
      <div className="container">
        <ul className="trust__list">
          {trustItems.map((item, idx) => (
            <li key={item.title} className="trust__item">
              <span className="trust__icon" aria-hidden="true">
                <TrustIcon name={iconOrder[idx] ?? 'steps'} />
              </span>
              <h3 className="trust__title">{item.title}</h3>
              <p className="trust__description">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
