import SiteLayout from '../components/SiteLayout'
import Hero from '../components/Hero'
import TrustSection from '../components/TrustSection'
import ServicesSection from '../components/ServicesSection'
import ProcessSection from '../components/ProcessSection'
import CTASection from '../components/CTASection'
import { pageTitles, pageDescriptions, brand } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'

// Homepage — preserves the Phase 1 content exactly.
export default function HomePage() {
  const trustReveal = useScrollReveal()
  const servicesReveal = useScrollReveal()
  const processReveal = useScrollReveal()
  const ctaReveal = useScrollReveal()

  return (
    <SiteLayout title={pageTitles['/']} description={pageDescriptions['/']} ogImage={brand.ogImage}>
      <Hero />
      <div
        ref={trustReveal.elementRef as React.RefObject<HTMLDivElement>}
        className={`scroll-reveal ${trustReveal.isVisible ? 'scroll-reveal--visible' : ''}`}
      >
        <TrustSection />
      </div>
      <div
        ref={servicesReveal.elementRef as React.RefObject<HTMLDivElement>}
        className={`scroll-reveal ${servicesReveal.isVisible ? 'scroll-reveal--visible' : ''}`}
      >
        <ServicesSection />
      </div>
      <div
        ref={processReveal.elementRef as React.RefObject<HTMLDivElement>}
        className={`scroll-reveal ${processReveal.isVisible ? 'scroll-reveal--visible' : ''}`}
      >
        <ProcessSection />
      </div>
      <div
        ref={ctaReveal.elementRef as React.RefObject<HTMLDivElement>}
        className={`scroll-reveal ${ctaReveal.isVisible ? 'scroll-reveal--visible' : ''}`}
      >
        <CTASection />
      </div>
    </SiteLayout>
  )
}
