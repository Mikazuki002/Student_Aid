import { Link } from 'react-router-dom'
import SiteLayout from '../components/SiteLayout'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import InfoCard from '../components/InfoCard'
import ProcessSteps from '../components/ProcessSteps'
import LegalNotice from '../components/LegalNotice'
import { groundwork, pageTitles, pageDescriptions, brand } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function GroundworkServicesPage() {
  const whatIsReveal = useScrollReveal()
  const benefitsReveal = useScrollReveal()
  const howItWorksReveal = useScrollReveal()

  return (
    <SiteLayout
      title={pageTitles['/groundwork-services']}
      description={pageDescriptions['/groundwork-services']}
      ogImage={brand.ogImage}
    >
      <PageHero
        heading={groundwork.hero.heading}
        text={groundwork.hero.text}
      />

      <section
        ref={whatIsReveal.elementRef as React.RefObject<HTMLElement>}
        className={`page-section scroll-reveal ${whatIsReveal.isVisible ? 'scroll-reveal--visible' : ''}`}
        aria-labelledby="gw-whatis-heading"
      >
        <div className="container">
          <SectionHeading
            id="gw-whatis-heading"
            heading={groundwork.whatIs.heading}
            description={groundwork.whatIs.text}
          />
          <LegalNotice title="Important">{groundwork.whatIs.note}</LegalNotice>
        </div>
      </section>

      <section
        ref={benefitsReveal.elementRef as React.RefObject<HTMLElement>}
        className={`page-section page-section--marble scroll-reveal ${benefitsReveal.isVisible ? 'scroll-reveal--visible' : ''}`}
        aria-labelledby="gw-benefits-heading"
      >
        <div className="container">
          <SectionHeading id="gw-benefits-heading" heading={groundwork.benefits.heading} />
          <div className="info-grid">
            {groundwork.benefits.items.map((b) => (
              <InfoCard key={b.title} title={b.title} description={b.text} />
            ))}
          </div>
        </div>
      </section>

      <section
        ref={howItWorksReveal.elementRef as React.RefObject<HTMLElement>}
        className={`page-section scroll-reveal ${howItWorksReveal.isVisible ? 'scroll-reveal--visible' : ''}`}
        aria-labelledby="gw-how-heading"
      >
        <div className="container">
          <SectionHeading id="gw-how-heading" heading={groundwork.howItWorks.heading} />
          <ProcessSteps steps={groundwork.howItWorks.steps} />
          <p className="page-section__note">{groundwork.howItWorks.noObligation}</p>
        </div>
      </section>

      <section className="cta" aria-labelledby="gw-cta-heading">
        <div className="container cta__inner">
          <div className="cta__content">
            <h2 id="gw-cta-heading" className="cta__heading">
              {groundwork.cta.heading}
            </h2>
            <p className="cta__description">{groundwork.cta.text}</p>
          </div>
          <div className="cta__action">
            <Link to={groundwork.cta.href} className="btn btn--gold btn--large">
              {groundwork.cta.buttonLabel}
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
