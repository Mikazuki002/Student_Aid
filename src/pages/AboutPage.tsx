import { Link } from 'react-router-dom'
import SiteLayout from '../components/SiteLayout'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import InfoCard from '../components/InfoCard'
import ProcessSteps from '../components/ProcessSteps'
import LegalNotice from '../components/LegalNotice'
import StudentShowcase from '../components/StudentShowcase'
import { about, cta, pageTitles, pageDescriptions, brand } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function AboutPage() {
  const studentImages = [
    { src: 'image_assets/student-photo-2.png', alt: 'Student reviewing documents with advisor' },
    { src: 'image_assets/student-photo-3.png', alt: 'Student planning financial aid options' },
    { src: 'image_assets/student-photo-4.png', alt: 'Student successfully managing student loans' },
  ]

  const mainReveal = useScrollReveal()
  const valuesReveal = useScrollReveal()
  const processReveal = useScrollReveal()

  return (
    <SiteLayout title={pageTitles['/about']} description={pageDescriptions['/about']} ogImage={brand.ogImage}>
      <PageHero eyebrow={undefined} heading={about.hero.heading} text={about.hero.text} />

      <section
        ref={mainReveal.elementRef as React.RefObject<HTMLElement>}
        className={`page-section scroll-reveal ${mainReveal.isVisible ? 'scroll-reveal--visible' : ''}`}
        aria-labelledby="about-main-heading"
      >
        <div className="container">
          <SectionHeading
            id="about-main-heading"
            heading={about.main.heading}
            description={about.main.text}
          />
          <StudentShowcase images={studentImages} />
        </div>
      </section>

      <section
        ref={valuesReveal.elementRef as React.RefObject<HTMLElement>}
        className={`page-section page-section--marble scroll-reveal ${valuesReveal.isVisible ? 'scroll-reveal--visible' : ''}`}
        aria-labelledby="about-values-heading"
      >
        <div className="container">
          <SectionHeading
            id="about-values-heading"
            heading={about.values.heading}
            align="left"
          />
          <div className="info-grid">
            {about.values.items.map((v) => (
              <InfoCard key={v.title} title={v.title} description={v.text} />
            ))}
          </div>
        </div>
      </section>

      <section
        ref={processReveal.elementRef as React.RefObject<HTMLElement>}
        className={`page-section scroll-reveal ${processReveal.isVisible ? 'scroll-reveal--visible' : ''}`}
        aria-labelledby="about-process-heading"
      >
        <div className="container">
          <SectionHeading
            id="about-process-heading"
            heading={about.process.heading}
            description={about.process.description}
          />
          <ProcessSteps steps={about.process.steps} />
        </div>
      </section>

      <section className="page-section page-section--marble" aria-label="About disclaimer">
        <div className="container">
          <LegalNotice title="Please Note">{about.disclaimer}</LegalNotice>
          <p className="page-section__cta-row">
            <Link to={cta.href} className="btn btn--gold btn--large">
              {cta.buttonLabel}
            </Link>
          </p>
        </div>
      </section>
    </SiteLayout>
  )
}
