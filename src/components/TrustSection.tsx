import { trustItems } from '../data/content'

export default function TrustSection() {
  return (
    <section className="trust" aria-label="Why work with us">
      <div className="container">
        <ul className="trust__list">
          {trustItems.map((item) => (
            <li key={item.title} className="trust__item">
              <span className="trust__icon" aria-hidden="true" />
              <h3 className="trust__title">{item.title}</h3>
              <p className="trust__description">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
