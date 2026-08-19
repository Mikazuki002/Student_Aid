import { useEffect } from 'react'

// Updates document.title when the route changes.
// Used by SiteLayout so every page gets its own title.
export function useDocumentTitle(title: string) {
  useEffect(() => {
    const previous = document.title
    document.title = title
    return () => {
      document.title = previous
    }
  }, [title])
}
