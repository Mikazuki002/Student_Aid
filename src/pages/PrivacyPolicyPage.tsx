import SiteLayout from '../components/SiteLayout'
import SectionHeading from '../components/SectionHeading'
import LegalNotice from '../components/LegalNotice'
import { brand, privacyPolicy, pageTitles, pageDescriptions } from '../data/content'

export default function PrivacyPolicyPage() {
  return (
    <SiteLayout title={pageTitles['/privacy-policy']} description={pageDescriptions['/privacy-policy']} ogImage={brand.ogImage}>
      <section className="page-section" aria-labelledby="pp-heading">
        <div className="container">
          <SectionHeading id="pp-heading" heading={privacyPolicy.heading} />
          <LegalNotice title="Draft Placeholder" variant="draft">
            {privacyPolicy.notice}
          </LegalNotice>
          <div className="legal-prose">
            {privacyPolicy.sections.map((s) => (
              <section key={s.heading} className="legal-prose__block">
                <h2 className="legal-prose__heading">{s.heading}</h2>
                <p className="legal-prose__text">{s.text}</p>
              </section>
            ))}
            <section className="legal-prose__block">
              <h2 className="legal-prose__heading">Reach Us</h2>
              <p className="legal-prose__text">
                <a href={brand.phoneHref}>{brand.phoneDisplay}</a>
                {' · '}
                <a href={brand.emailHref}>{brand.email}</a>
                {' · '}
                {brand.address}
              </p>
            </section>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
