import { FormEvent, useState } from 'react'
import { contact } from '../data/content'

// Frontend-only contact form for the prototype.
// Submission is prevented; nothing is sent.
// A console message is shown instead so the behavior is observable during development.
export default function ContactForm() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [consent, setConsent] = useState(false)
  const [attempted, setAttempted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setAttempted(true)
    // Prototype only — no backend. Log so dev can see the submission was blocked.
    // eslint-disable-next-line no-console
    console.info(contact.form.blockedConsoleMessage)
  }

  const showError = (fieldInvalid: boolean) =>
    attempted && fieldInvalid ? 'form-field__error' : ''

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate aria-labelledby="contact-form-heading">
      <h2 id="contact-form-heading" className="contact-form__heading">
        Send Us a Message
      </h2>
      <p className="contact-form__intro">
        Fill out the form below and we will respond as soon as we can.
      </p>

      <div className="contact-form__grid">
        <div className={`form-field ${showError(!firstName.trim())}`}>
          <label htmlFor="cf-firstName" className="form-field__label">
            {contact.form.firstName} <span aria-hidden="true">*</span>
          </label>
          <input
            id="cf-firstName"
            name="firstName"
            type="text"
            autoComplete="given-name"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="form-field__input"
            aria-required="true"
            aria-invalid={attempted && !firstName.trim()}
          />
        </div>

        <div className={`form-field ${showError(!lastName.trim())}`}>
          <label htmlFor="cf-lastName" className="form-field__label">
            {contact.form.lastName} <span aria-hidden="true">*</span>
          </label>
          <input
            id="cf-lastName"
            name="lastName"
            type="text"
            autoComplete="family-name"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="form-field__input"
            aria-required="true"
            aria-invalid={attempted && !lastName.trim()}
          />
        </div>

        <div className={`form-field ${showError(!email.trim())}`}>
          <label htmlFor="cf-email" className="form-field__label">
            {contact.form.email} <span aria-hidden="true">*</span>
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-field__input"
            aria-required="true"
            aria-invalid={attempted && !email.trim()}
          />
        </div>

        <div className="form-field">
          <label htmlFor="cf-phone" className="form-field__label">
            {contact.form.phone}
          </label>
          <input
            id="cf-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="form-field__input"
          />
        </div>

        <div className={`form-field form-field--full ${showError(!message.trim())}`}>
          <label htmlFor="cf-message" className="form-field__label">
            {contact.form.message} <span aria-hidden="true">*</span>
          </label>
          <textarea
            id="cf-message"
            name="message"
            required
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="form-field__textarea"
            aria-required="true"
            aria-invalid={attempted && !message.trim()}
          />
        </div>

        <div className={`form-field form-field--full form-field--consent ${showError(!consent)}`}>
          <label className="form-field__consent">
            <input
              type="checkbox"
              required
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              aria-required="true"
              aria-invalid={attempted && !consent}
            />
            <span>{contact.form.consent}</span>
          </label>
        </div>
      </div>

      <p className="contact-form__warning" role="note">
        {contact.form.sensitiveWarning}
      </p>

      <div className="contact-form__actions">
        <button type="submit" className="btn btn--gold btn--large">
          {contact.form.submit}
        </button>
      </div>

      <p className="contact-form__dev-note">{contact.form.devNote}</p>
      <p className="contact-form__validation-note">{contact.form.validationNote}</p>
    </form>
  )
}
