import { ReactNode } from 'react'

type InfoCardProps = {
  title: string
  description?: string
  children?: ReactNode
  icon?: ReactNode
}

// Reusable card used by About, Services, Groundwork, etc.
// Keeps the same look as the homepage service cards.
export default function InfoCard({ title, description, children, icon }: InfoCardProps) {
  return (
    <article className="info-card">
      {icon && <div className="info-card__icon">{icon}</div>}
      <h3 className="info-card__title">{title}</h3>
      {description && <p className="info-card__description">{description}</p>}
      {children}
    </article>
  )
}
