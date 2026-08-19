import { process } from '../data/content'

export default function ProcessSection() {
  return (
    <section className="process" aria-labelledby="process-heading">
      <div className="container">
        <div className="process__heading-wrap">
          <h2 id="process-heading" className="process__heading">
            {process.heading}
          </h2>
          <p className="process__description">{process.description}</p>
        </div>
        <ol className="process__list">
          {process.steps.map((step) => (
            <li key={step.number} className="process__step">
              <div className="process__number" aria-hidden="true">
                {step.number}
              </div>
              <div className="process__step-body">
                <h3 className="process__step-title">{step.title}</h3>
                <p className="process__step-description">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
