import {
  ChangeEvent,
  FormEvent,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react'
import { contact } from '../data/content'

// Field rules — kept here so validation, error messages, and input attributes
// always stay in sync.
const RULES = {
  firstName: { min: 2, max: 50 },
  lastName: { min: 2, max: 50 },
  email: { max: 254 },
  phone: { max: 25 },
  message: { min: 10, max: 1000 },
}

// RFC-5322-lite: good enough for client-side prototype validation.
// Real server-side validation is required before production.
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type FieldKey = 'firstName' | 'lastName' | 'email' | 'phone' | 'message' | 'consent'

type Errors = Partial<Record<FieldKey, string>>

function validate(values: {
  firstName: string
  lastName: string
  email: string
  phone: string
  message: string
  consent: boolean
}): Errors {
  const errors: Errors = {}
  const first = values.firstName.trim()
  const last = values.lastName.trim()
  const email = values.email.trim()
  const phone = values.phone.trim()
  const message = values.message.trim()

  if (!first) {
    errors.firstName = contact.form.errors.firstNameRequired
  } else if (first.length < RULES.firstName.min || first.length > RULES.firstName.max) {
    errors.firstName = contact.form.errors.firstNameLength
  }

  if (!last) {
    errors.lastName = contact.form.errors.lastNameRequired
  } else if (last.length < RULES.lastName.min || last.length > RULES.lastName.max) {
    errors.lastName = contact.form.errors.lastNameLength
  }

  if (!email) {
    errors.email = contact.form.errors.emailRequired
  } else if (email.length > RULES.email.max) {
    errors.email = contact.form.errors.emailLength
  } else if (!EMAIL_PATTERN.test(email)) {
    errors.email = contact.form.errors.emailInvalid
  }

  if (phone.length > RULES.phone.max) {
    errors.phone = contact.form.errors.phoneLength
  }

  if (!message) {
    errors.message = contact.form.errors.messageRequired
  } else if (message.length < RULES.message.min || message.length > RULES.message.max) {
    errors.message = contact.form.errors.messageLength
  }

  if (!values.consent) {
    errors.consent = contact.form.errors.consentRequired
  }

  return errors
}

// Order used to find the first invalid field so we can move focus to it.
const FIELD_ORDER: FieldKey[] = [
  'firstName',
  'lastName',
  'email',
  'phone',
  'message',
  'consent',
]

export default function ContactForm() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [consent, setConsent] = useState(false)
  const [honeypot, setHoneypot] = useState('') // Anti-bot field

  const [errors, setErrors] = useState<Errors>({})
  const [attempted, setAttempted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [showReadyNotice, setShowReadyNotice] = useState(false)

  const headingId = useId()
  const summaryId = useId()

  // Refs for moving focus to the first invalid field on submit.
  // We use a ref-stable map so we can grab the actual nodes at submit time.
  const refsLive = useRef<Partial<Record<FieldKey, HTMLElement | null>>>({})

  // Re-validate live after the first attempt so the user gets feedback as they fix things.
  useEffect(() => {
    if (!attempted) return
    setErrors(
      validate({ firstName, lastName, email, phone, message, consent }),
    )
  }, [attempted, firstName, lastName, email, phone, message, consent])

  // Clear the "ready" notice when the user edits the form again.
  useEffect(() => {
    if (!showReadyNotice) return
    setShowReadyNotice(false)
  }, [firstName, lastName, email, phone, message, consent])
  // (consent intentionally not in deps — toggling it shouldn't dismiss the notice)

  const setRef = (key: FieldKey) => (node: HTMLElement | null) => {
    refsLive.current[key] = node
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setAttempted(true)

    const next = validate({ firstName, lastName, email, phone, message, consent })
    setErrors(next)

    const firstInvalidKey = FIELD_ORDER.find((k) => next[k])
    if (firstInvalidKey) {
      const node = refsLive.current[firstInvalidKey]
      if (node && typeof (node as HTMLElement).focus === 'function') {
        ;(node as HTMLElement).focus()
      }
      return
    }

    // Real API call to Vercel serverless function
    setSubmitting(true)
    try {
      const response = await fetch('https://student-aid-seven.vercel.app/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          message,
          consent,
          honeypot, // Anti-bot field
        }),
      })

      const result = await response.json()

      if (!response.ok || !result.success) {
        // Server returned an error
        setSubmitting(false)
        setErrors({ 
          message: result.error || 'Failed to send message. Please try again.' 
        })
        return
      }

      // Success
      setSubmitting(false)
      setShowReadyNotice(true)
      
      // Clear form on success
      setFirstName('')
      setLastName('')
      setEmail('')
      setPhone('')
      setMessage('')
      setConsent(false)
      setAttempted(false)
      
    } catch (err) {
      // Network error or fetch failed
      setSubmitting(false)
      setErrors({ 
        message: 'Network error. Please check your connection and try again.' 
      })
      console.error('[CONTACT FORM ERROR]', err)
    }
  }

  // Returns the id used by aria-describedby for a field's error message.
  const errorId = (key: FieldKey) => `${key}-error`

  // Generic field-error renderer used inside each form-field wrapper.
  const renderError = (key: FieldKey) => {
    const msg = errors[key]
    if (!msg || !attempted) return null
    return (
      <p id={errorId(key)} className="form-field__error" role="alert">
        {msg}
      </p>
    )
  }

  const fieldClass = (key: FieldKey) => {
    const hasError = attempted && Boolean(errors[key])
    return `form-field${hasError ? ' form-field--invalid' : ''}`
  }

  return (
    <form
      className="contact-form"
      onSubmit={handleSubmit}
      noValidate
      aria-labelledby={headingId}
      aria-describedby={attempted && Object.keys(errors).length > 0 ? summaryId : undefined}
    >
      <h2 id={headingId} className="contact-form__heading">
        Send Us a Message
      </h2>
      <p className="contact-form__intro">
        Fill out the form below and we will respond as soon as we can.
      </p>

      <p className="contact-form__warning" role="note">
        {contact.form.sensitiveWarning}
      </p>

      {attempted && Object.keys(errors).length > 0 && (
        <p id={summaryId} className="contact-form__summary" role="alert">
          {contact.form.errors.formSummary}
        </p>
      )}

      <div className="contact-form__grid">
        {/* Honeypot field — hidden from real users, but bots often fill it */}
        <input
          type="text"
          name="website"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px' }}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        <div className={fieldClass('firstName')}>
          <label htmlFor="cf-firstName" className="form-field__label">
            {contact.form.firstName} <span aria-hidden="true">*</span>
          </label>
          <input
            id="cf-firstName"
            name="firstName"
            type="text"
            autoComplete="given-name"
            required
            maxLength={RULES.firstName.max}
            value={firstName}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)}
            ref={setRef('firstName')}
            className="form-field__input"
            aria-required="true"
            aria-invalid={attempted && Boolean(errors.firstName)}
            aria-describedby={attempted && errors.firstName ? errorId('firstName') : undefined}
          />
          {renderError('firstName')}
        </div>

        <div className={fieldClass('lastName')}>
          <label htmlFor="cf-lastName" className="form-field__label">
            {contact.form.lastName} <span aria-hidden="true">*</span>
          </label>
          <input
            id="cf-lastName"
            name="lastName"
            type="text"
            autoComplete="family-name"
            required
            maxLength={RULES.lastName.max}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            ref={setRef('lastName')}
            className="form-field__input"
            aria-required="true"
            aria-invalid={attempted && Boolean(errors.lastName)}
            aria-describedby={attempted && errors.lastName ? errorId('lastName') : undefined}
          />
          {renderError('lastName')}
        </div>

        <div className={fieldClass('email')}>
          <label htmlFor="cf-email" className="form-field__label">
            {contact.form.email} <span aria-hidden="true">*</span>
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={RULES.email.max}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            ref={setRef('email')}
            className="form-field__input"
            aria-required="true"
            aria-invalid={attempted && Boolean(errors.email)}
            aria-describedby={attempted && errors.email ? errorId('email') : undefined}
          />
          {renderError('email')}
        </div>

        <div className={fieldClass('phone')}>
          <label htmlFor="cf-phone" className="form-field__label">
            {contact.form.phone}
          </label>
          <input
            id="cf-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            maxLength={RULES.phone.max}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            ref={setRef('phone')}
            className="form-field__input"
            aria-invalid={attempted && Boolean(errors.phone)}
            aria-describedby={attempted && errors.phone ? errorId('phone') : undefined}
          />
          {renderError('phone')}
        </div>

        <div className={`${fieldClass('message')} form-field--full`}>
          <label htmlFor="cf-message" className="form-field__label">
            {contact.form.message} <span aria-hidden="true">*</span>
          </label>
          <textarea
            id="cf-message"
            name="message"
            required
            rows={5}
            maxLength={RULES.message.max}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            ref={setRef('message')}
            className="form-field__textarea"
            aria-required="true"
            aria-invalid={attempted && Boolean(errors.message)}
            aria-describedby={
              attempted && errors.message ? errorId('message') : 'cf-message-counter'
            }
          />
          <p id="cf-message-counter" className="form-field__counter" aria-live="polite">
            {message.length} / {RULES.message.max}
          </p>
          {renderError('message')}
        </div>

        <div className={`${fieldClass('consent')} form-field--full form-field--consent`}>
          <label className="form-field__consent">
            <input
              type="checkbox"
              required
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              ref={(node) => {
                refsLive.current.consent = node
              }}
              aria-required="true"
              aria-invalid={attempted && Boolean(errors.consent)}
              aria-describedby={attempted && errors.consent ? errorId('consent') : undefined}
            />
            <span>{contact.form.consent}</span>
          </label>
          {renderError('consent')}
        </div>
      </div>

      {showReadyNotice && (
        <p className="contact-form__ready-notice" role="status">
          {contact.form.readyNotice}
        </p>
      )}

      <div className="contact-form__actions">
        <button
          type="submit"
          className="btn btn--gold btn--large"
          disabled={submitting}
          aria-busy={submitting}
        >
          {submitting ? contact.form.sending : contact.form.submit}
        </button>
      </div>
    </form>
  )
}
