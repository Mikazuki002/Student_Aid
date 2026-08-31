import { useEffect } from 'react'

// Reusable SEO updater.
// Sets <title> on mount and cleans up on unmount (so back/forward navigation reverts).
// Optionally updates the meta[name="description"] tag if a value is provided.
// Also updates Open Graph and Twitter Card meta tags for social media sharing.
export function useDocumentTitle(title: string, description?: string, ogImage?: string) {
  useEffect(() => {
    const previousTitle = document.title
    document.title = title

    // Store previous values for cleanup
    const previousValues: Map<string, string | null> = new Map()
    const tagsToUpdate: Array<{ selector: string; attr: string; value: string }> = []

    // Standard meta description
    if (description) {
      tagsToUpdate.push(
        { selector: 'meta[name="description"]', attr: 'content', value: description }
      )
    }

    // Open Graph tags
    tagsToUpdate.push(
      { selector: 'meta[property="og:title"]', attr: 'content', value: title },
      { selector: 'meta[property="og:type"]', attr: 'content', value: 'website' },
      { selector: 'meta[property="og:url"]', attr: 'content', value: window.location.href }
    )

    if (description) {
      tagsToUpdate.push(
        { selector: 'meta[property="og:description"]', attr: 'content', value: description }
      )
    }

    if (ogImage) {
      const absoluteImageUrl = ogImage.startsWith('http')
        ? ogImage
        : `${window.location.origin}${ogImage}`
      tagsToUpdate.push(
        { selector: 'meta[property="og:image"]', attr: 'content', value: absoluteImageUrl }
      )
    }

    // Twitter Card tags
    tagsToUpdate.push(
      { selector: 'meta[name="twitter:card"]', attr: 'content', value: 'summary_large_image' },
      { selector: 'meta[name="twitter:title"]', attr: 'content', value: title }
    )

    if (description) {
      tagsToUpdate.push(
        { selector: 'meta[name="twitter:description"]', attr: 'content', value: description }
      )
    }

    if (ogImage) {
      const absoluteImageUrl = ogImage.startsWith('http')
        ? ogImage
        : `${window.location.origin}${ogImage}`
      tagsToUpdate.push(
        { selector: 'meta[name="twitter:image"]', attr: 'content', value: absoluteImageUrl }
      )
    }

    // Update or create all meta tags
    tagsToUpdate.forEach(({ selector, attr, value }) => {
      let tag = document.querySelector(selector) as HTMLMetaElement | null
      if (tag) {
        previousValues.set(selector, tag.getAttribute(attr))
        tag.setAttribute(attr, value)
      } else {
        // Create tag if it doesn't exist
        tag = document.createElement('meta')
        if (selector.includes('property=')) {
          const property = selector.match(/property="([^"]+)"/)?.[1]
          if (property) tag.setAttribute('property', property)
        } else {
          const name = selector.match(/name="([^"]+)"/)?.[1]
          if (name) tag.setAttribute('name', name)
        }
        tag.setAttribute(attr, value)
        document.head.appendChild(tag)
        previousValues.set(selector, null) // null means we created it
      }
    })

    return () => {
      document.title = previousTitle

      // Restore or remove tags
      previousValues.forEach((previousValue, selector) => {
        const tag = document.querySelector(selector) as HTMLMetaElement | null
        if (tag) {
          if (previousValue !== null) {
            tag.setAttribute('content', previousValue)
          } else {
            // We created this tag, so remove it
            tag.remove()
          }
        }
      })
    }
  }, [title, description, ogImage])
}
