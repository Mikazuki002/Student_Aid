import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Scrolls to top whenever the route changes.
// This ensures users start at the top of each new page rather than
// staying at their current scroll position.
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
