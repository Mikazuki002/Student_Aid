type Step = {
  number: string
  title: string
  description: string
}

type ProcessStepsProps = {
  steps: Step[]
  ariaLabel?: string
}

// Numbered process list — visually identical to the homepage process section.
export default function ProcessSteps({ steps, ariaLabel }: ProcessStepsProps) {
  return (
    <ol className="process-steps" aria-label={ariaLabel}>
      {steps.map((step) => (
        <li key={step.number} className="process-steps__item">
          <div className="process-steps__number" aria-hidden="true">
            {step.number}
          </div>
          <div className="process-steps__body">
            <h3 className="process-steps__title">{step.title}</h3>
            <p className="process-steps__description">{step.description}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}
