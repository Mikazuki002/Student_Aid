import { Link } from 'react-router-dom'
import SiteLayout from '../components/SiteLayout'
import { notFound, pageTitles } from '../data/content'

export default function NotFoundPage() {
  // 404 pages use a custom title that isn't in pageTitles.
  const title = `Page Not Found | ${pageTitles['/'].split(' | ')[1]}`

  return (
    <SiteLayout title={title}>
      <section className="page-section not-found" aria-labelledby="not-found-heading">
        <div className="container not-found__inner">
          <p className="not-found__eyebrow">404</p>
          <h1 id="not-found-heading" className="not-found__heading">
            {notFound.heading}
          </h1>
          <p className="not-found__text">{notFound.text}</p>
          <div className="not-found__actions">
            <Link to={notFound.homeHref} className="btn btn--gold btn--large">
              {notFound.returnHome}
            </Link>
            <Link to={notFound.contactHref} className="btn btn--outline btn--large">
              {notFound.contact}
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
