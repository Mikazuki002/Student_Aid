import Header from './components/Header'
import MobileMenu from './components/MobileMenu'
import Hero from './components/Hero'
import TrustSection from './components/TrustSection'
import ServicesSection from './components/ServicesSection'
import ProcessSection from './components/ProcessSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import { useState } from 'react'

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <Header onMenuToggle={() => setMobileMenuOpen((v) => !v)} mobileMenuOpen={mobileMenuOpen} />
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
      <main>
        <Hero />
        <TrustSection />
        <ServicesSection />
        <ProcessSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
