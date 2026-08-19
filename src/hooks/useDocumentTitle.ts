import { useEffect } from 'react'

// Reusable SEO updater.
// Sets <title> on mount and cleans up on unmount (so back/forward navigation reverts).
// Optionally updates the meta[name="description"] tag if a value is provided.
export function useDocumentTitle(title: string, description?: string) {
  useEffect(() => {
    const previousTitle = document.title
    document.title = title

    let previousDescription: string | null = null
    let tag: HTMLMetaElement | null = null
    if (description) {
      tag = document.querySelector('meta[name="description"]')
      if (tag) {
        previousDescription = tag.getAttribute('content')
        tag.setAttribute('content', description)
      }
    }

    return () => {
      document.title = previousTitle
      if (tag && description && previousDescription !== null) {
        tag.setAttribute('content', previousDescription)
      }
    }
  }, [title, description])
}
