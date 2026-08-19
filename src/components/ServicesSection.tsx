import { services } from '../data/content'

type IconProps = { name: string }

function ServiceIcon({ name }: IconProps) {
  // Accessible decorative icon — aria-hidden so screen readers rely on text.
  switch (name) {
    case 'guide':
      return (
        <svg viewBox="0 0 24 24" className="service-card__icon" aria-hidden="true">
          <path
            d="M4 5a2 2 0 0 1 2-2h11a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V5Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path d="M8 8h8M8 12h8M8 16h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      )
    case 'document':
      return (
        <svg viewBox="0 0 24 24" className="service-card__icon" aria-hidden="true">
          <path
            d="M7 3h7l5 5v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path d="M14 3v5h5" stroke="currentColor" strokeWidth="1.6" fill="none" />
          <path d="M9 13h6M9 17h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      )
    case 'review':
      return (
        <svg viewBox="0 0 24 24" className="service-card__icon" aria-hidden="true">
          <circle cx="11" cy="11" r="6.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <path d="m20 20-4.3-4.3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      )
    default:
      return null
  }
}

function ServiceCard({
  icon,
  title,
  description,
  href,
  linkLabel,
}: {
  icon: string
  title: string
  description: string
  href: string
  linkLabel: string
}) {
  return (
    <article className="service-card">
      <div className="service-card__icon-wrap">
        <ServiceIcon name={icon} />
      </div>
      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__description">{description}</p>
      <a className="service-card__link" href={href}>
        {linkLabel}
        <span aria-hidden="true" className="service-card__link-arrow">→</span>
      </a>
    </article>
  )
}

export default function ServicesSection() {
  return (
    <section className="services" aria-labelledby="services-heading">
      <div className="container">
        <div className="services__heading-wrap">
          <h2 id="services-heading" className="services__heading">
            {services.heading}
          </h2>
          <p className="services__description">{services.description}</p>
        </div>
        <div className="services__grid">
          {services.items.map((s) => (
            <ServiceCard
              key={s.title}
              icon={s.icon}
              title={s.title}
              description={s.description}
              href={s.href}
              linkLabel={s.linkLabel}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
