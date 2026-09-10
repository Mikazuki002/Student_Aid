import SiteLayout from '../components/SiteLayout'
import PageHero from '../components/PageHero'
import ContactForm from '../components/ContactForm'
import { brand, contact, pageTitles, pageDescriptions } from '../data/content'

export default function ContactPage() {
  return (
    <SiteLayout title={pageTitles['/contact']} description={pageDescriptions['/contact']} ogImage={brand.ogImage}>
      <PageHero heading={contact.hero.heading} text={contact.hero.text} />

      <section className="page-section" aria-labelledby="contact-details-heading">
        <div className="container">
          <h2 id="contact-details-heading" className="section-heading__title">
            Contact Information
          </h2>
          <dl className="contact-details">
            <div className="contact-details__row">
              <dt className="contact-details__label">{contact.details.emailLabel}</dt>
              <dd className="contact-details__value">
                <a href={brand.emailHref}>{brand.email}</a>
              </dd>
            </div>
            <div className="contact-details__row">
              <dt className="contact-details__label">{contact.details.addressLabel}</dt>
              <dd className="contact-details__value">{brand.address}</dd>
            </div>
            <div className="contact-details__row">
              <dt className="contact-details__label">{contact.details.hoursLabel}</dt>
              <dd className="contact-details__value">{brand.hours}</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="page-section page-section--marble" aria-label="Send a message">
        <div className="container">
          <ContactForm />
        </div>
      </section>
    </SiteLayout>
  )
}
