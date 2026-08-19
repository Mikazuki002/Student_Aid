import { ReactNode } from 'react'

type LegalNoticeProps = {
  title?: string
  children: ReactNode
  variant?: 'draft' | 'standard'
}

// Highlighted notice box used for legal placeholders and important warnings.
export default function LegalNotice({
  title = 'Important Notice',
  children,
  variant = 'standard',
}: LegalNoticeProps) {
  return (
    <aside
      className={`legal-notice legal-notice--${variant}`}
      role={variant === 'draft' ? 'note' : undefined}
    >
      <p className="legal-notice__title">{title}</p>
      <div className="legal-notice__body">{children}</div>
    </aside>
  )
}
