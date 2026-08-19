import SiteLayout from '../components/SiteLayout'
import Hero from '../components/Hero'
import TrustSection from '../components/TrustSection'
import ServicesSection from '../components/ServicesSection'
import ProcessSection from '../components/ProcessSection'
import CTASection from '../components/CTASection'
import { pageTitles } from '../data/content'

// Homepage — preserves the Phase 1 content exactly.
export default function HomePage() {
  return (
    <SiteLayout title={pageTitles['/']}>
      <Hero />
      <TrustSection />
      <ServicesSection />
      <ProcessSection />
      <CTASection />
    </SiteLayout>
  )
}
