import { ReactNode } from 'react'

type SectionHeadingProps = {
  id?: string
  heading: string
  description?: string
  align?: 'left' | 'center'
  children?: ReactNode
}

// Standard section heading pair (h2 + optional description).
// Keeps typography consistent across pages.
export default function SectionHeading({
  id,
  heading,
  description,
  align = 'left',
  children,
}: SectionHeadingProps) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      <h2 id={id} className="section-heading__title">
        {heading}
      </h2>
      {description && <p className="section-heading__description">{description}</p>}
      {children}
    </div>
  )
}
