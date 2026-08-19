import { brand, hero } from '../data/content'

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">{hero.eyebrow}</p>
          <h1 id="hero-heading" className="hero__heading">
            {hero.heading}
          </h1>
          <p className="hero__description">{hero.description}</p>
          <div className="hero__actions">
            <a className="btn btn--gold" href={hero.primaryCta.href}>
              {hero.primaryCta.label}
            </a>
            <a className="hero__secondary" href={hero.secondaryCta.href}>
              {hero.secondaryCta.label}
              <span aria-hidden="true" className="hero__secondary-arrow">
                →
              </span>
            </a>
          </div>
        </div>
        <div className="hero__visual" aria-hidden="true">
          <div className="hero__visual-card">
            {/* Background-removed logo. Path goes through BASE_URL so it
                resolves under /Student_Aid/ on GitHub Pages and under /
                on the local dev server. */}
            <img
              src={`${import.meta.env.BASE_URL}image_assets/Student_Aid_Logo-removebg.png`}
              alt=""
              width={360}
              height={180}
              decoding="async"
              className="site-logo site-logo--hero"
            />
            <div className="hero__visual-divider" />
            <p className="hero__visual-text">
              {brand.tagline}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
