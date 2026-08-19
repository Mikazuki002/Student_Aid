import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import StudentSupportServicesPage from './pages/StudentSupportServicesPage'
import GroundworkServicesPage from './pages/GroundworkServicesPage'
import ContactPage from './pages/ContactPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import TermsOfServicePage from './pages/TermsOfServicePage'
import NotFoundPage from './pages/NotFoundPage'
import ScrollToTop from './components/ScrollToTop'

// Single top-level router lives in main.tsx (BrowserRouter).
// This file just declares the routes.
export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route
          path="/student-support-services"
          element={<StudentSupportServicesPage />}
        />
        <Route path="/groundwork-services" element={<GroundworkServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-of-service" element={<TermsOfServicePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}
