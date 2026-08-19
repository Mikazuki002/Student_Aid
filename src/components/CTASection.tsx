import { cta } from '../data/content'

export default function CTASection() {
  return (
    <section className="cta" aria-labelledby="cta-heading">
      <div className="container cta__inner">
        <div className="cta__content">
          <h2 id="cta-heading" className="cta__heading">
            {cta.heading}
          </h2>
          <p className="cta__description">{cta.description}</p>
        </div>
        <div className="cta__action">
          <a className="btn btn--gold btn--large" href={cta.href}>
            {cta.buttonLabel}
          </a>
        </div>
      </div>
    </section>
  )
}
