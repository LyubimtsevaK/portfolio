type ArrowIconProps = {
  className?: string
}

// геометрия из макета: три полосы, как в Figma (горизонталь, вертикаль, диагональ)
export default function ArrowIcon({ className }: ArrowIconProps) {
  return (
    <svg viewBox="0 0 14.43 14.303" fill="currentColor" className={className} aria-hidden="true">
      <rect x="4" y="0" width="10" height="1.7" />
      <rect x="12.73" y="0" width="1.7" height="9.949" />
      <rect x="-2.074" y="6.546" width="17.544" height="1.701" transform="rotate(-46.18 6.698 7.3965)" />
    </svg>
  )
}
