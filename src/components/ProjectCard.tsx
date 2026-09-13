import type { CSSProperties, MouseEvent } from 'react'
import ArrowIcon from './ArrowIcon'

// ширины рамок тегов из макета: desktop — 1440/1920, mobile — 402/640
export type Tag = { label: string; desktop: number; mobile: number }

type ProjectCardProps = {
  className: string
  tags: Tag[]
  image: string
  imageAlt: string
  title: string
  description: string
  cta: string
  ctaHref?: string
  onCtaClick?: (event: MouseEvent<HTMLAnchorElement>) => void
  badge?: string
  disabled?: boolean
}

export default function ProjectCard({
  className,
  tags,
  image,
  imageAlt,
  title,
  description,
  cta,
  ctaHref,
  onCtaClick,
  badge,
  disabled = false,
}: ProjectCardProps) {
  const ctaClass = disabled ? 'pcard-cta pcard-cta--disabled' : 'pcard-cta'

  return (
    <article className={`abs pcard ${className}`}>
      <ul className="pcard-tags">
        {tags.map(({ label, desktop, mobile }) => (
          <li
            key={label}
            className="pcard-tag"
            style={{ '--tag-d': desktop, '--tag-m': mobile } as CSSProperties}
          >
            {label}
          </li>
        ))}
      </ul>

      <div className="pcard-media">
        <img src={image} alt={imageAlt} />
        {badge && <p className="pcard-badge">{badge}</p>}
      </div>

      <h3 className="txt trim pcard-title">{title}</h3>

      <div className="pcard-foot">
        <p className="txt pcard-desc">{description}</p>
        {ctaHref ? (
          <a href={ctaHref} className={ctaClass} onClick={onCtaClick}>
            <ArrowIcon className="pcard-arrow" />
            {cta}
          </a>
        ) : (
          <p className={ctaClass}>
            <ArrowIcon className="pcard-arrow" />
            {cta}
          </p>
        )}
      </div>
    </article>
  )
}
