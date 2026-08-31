import { ReactNode, useState } from 'react'
import Header from './Header'
import MobileMenu from './MobileMenu'
import Footer from './Footer'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

type SiteLayoutProps = {
  children: ReactNode
  title: string
  description?: string
  ogImage?: string
}

// Shared layout: top contact bar + header + mobile menu drawer + main + footer.
// Used by every page so we don't duplicate the chrome.
export default function SiteLayout({ children, title, description, ogImage }: SiteLayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  useDocumentTitle(title, description, ogImage)

  return (
    <>
      <Header onMenuToggle={() => setMobileMenuOpen((v) => !v)} mobileMenuOpen={mobileMenuOpen} />
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
      <main>{children}</main>
      <Footer />
    </>
  )
}
