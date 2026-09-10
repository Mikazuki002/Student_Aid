import { Link } from 'react-router-dom'
import SiteLayout from '../components/SiteLayout'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import InfoCard from '../components/InfoCard'
import ProcessSteps from '../components/ProcessSteps'
import LegalNotice from '../components/LegalNotice'
import ImageScroller from '../components/ImageScroller'
import { studentSupport, pageTitles, pageDescriptions, brand } from '../data/content'

export default function StudentSupportServicesPage() {
  const scrollerImages = [
    { src: 'image_assets/student-photo-1.png', alt: 'Students working together on financial planning' },
    { src: 'image_assets/student-photo-3.png', alt: 'Student reviewing loan documents' },
    { src: 'image_assets/student-photo-5.png', alt: 'Students collaborating on aid applications' },
    { src: 'image_assets/student-photo-2.png', alt: 'Student meeting with financial advisor' },
  ]

  return (
    <SiteLayout
      title={pageTitles['/student-support-services']}
      description={pageDescriptions['/student-support-services']}
      ogImage={brand.ogImage}
    >
      <PageHero
        heading={studentSupport.hero.title}
        text={studentSupport.hero.text}
      />

      {/* Compact image scroller */}
      <section className="page-section" style={{ paddingTop: 0, paddingBottom: '2rem' }}>
        <div className="container">
          <ImageScroller images={scrollerImages} />
        </div>
      </section>

      <section className="page-section" aria-labelledby="sss-help-heading">
        <div className="container">
          <SectionHeading id="sss-help-heading" heading={studentSupport.whatWeHelpWith.heading} />
          <div className="info-grid">
            {studentSupport.whatWeHelpWith.items.map((item) => (
              <InfoCard key={item.title} title={item.title} description={item.text} />
            ))}
          </div>
        </div>
      </section>

      <section className="page-section page-section--marble" aria-labelledby="sss-approach-heading">
        <div className="container">
          <SectionHeading id="sss-approach-heading" heading={studentSupport.approach.heading} />
          <ProcessSteps steps={studentSupport.approach.steps} />
        </div>
      </section>

      <section className="page-section" aria-labelledby="sss-audience-heading">
        <div className="container">
          <SectionHeading id="sss-audience-heading" heading={studentSupport.audience.heading} />
          <ul className="audience-list">
            {studentSupport.audience.items.map((item) => (
              <li key={item} className="audience-list__item">
                <span className="audience-list__bullet" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="page-section page-section--marble" aria-labelledby="sss-important-heading">
        <div className="container">
          <SectionHeading id="sss-important-heading" heading={studentSupport.important.heading} />
          <LegalNotice title="Important Disclosures">
            <ul className="legal-notice__list">
              {studentSupport.important.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </LegalNotice>
          <p className="page-section__cta-row">
            <Link to="/contact" className="btn btn--gold btn--large">
              Contact Us
            </Link>
          </p>
        </div>
      </section>
    </SiteLayout>
  )
}
