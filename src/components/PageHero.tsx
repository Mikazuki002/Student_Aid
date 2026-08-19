import { ReactNode } from 'react'

type PageHeroProps = {
  eyebrow?: string
  heading: string
  text?: string
  children?: ReactNode
  variant?: 'default' | 'compact'
}

// Premium hero used at the top of every inner page.
// Same brand palette as the homepage hero (navy + subtle gold).
export default function PageHero({ eyebrow, heading, text, children, variant = 'default' }: PageHeroProps) {
  return (
    <section className={`page-hero page-hero--${variant}`} aria-labelledby="page-hero-heading">
      <div className="container page-hero__inner">
        {eyebrow && <p className="page-hero__eyebrow">{eyebrow}</p>}
        <h1 id="page-hero-heading" className="page-hero__heading">
          {heading}
        </h1>
        {text && <p className="page-hero__text">{text}</p>}
        {children}
      </div>
    </section>
  )
}
