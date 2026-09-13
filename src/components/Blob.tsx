export type BlobSources = { at402: string; at640: string; at1440: string; at1920: string }

// у каждого макета свой экспорт: размытие в Figma абсолютное и не масштабируется вместе с пятном
export default function Blob({ sources, className }: { sources: BlobSources; className: string }) {
  return (
    <picture>
      <source media="(min-width: 1680px)" srcSet={sources.at1920} />
      <source media="(min-width: 1200px)" srcSet={sources.at1440} />
      <source media="(min-width: 600px)" srcSet={sources.at640} />
      <img src={sources.at402} alt="" aria-hidden="true" className={className} />
    </picture>
  )
}
