import { useEffect, useRef, type CSSProperties, type MouseEvent, type ReactNode, type RefObject } from 'react'
import blob4 from '../assets/blobs/blob-4.svg'
import blob5 from '../assets/blobs/blob-5.svg'
import blob6 from '../assets/blobs/blob-6.svg'
import './CaseModal.css'

type CaseModalProps = {
  titleId: string
  // высота панели кейса в px макетов: d — 1440, t — 640, m — 402
  panelHeight: { d: number; t: number; m: number }
  // куда вернуть фокус после закрытия (кнопка, которой открыли кейс)
  returnFocusRef: RefObject<HTMLElement | null>
  onClose: () => void
  children: ReactNode
}

export default function CaseModal({ titleId, panelHeight, returnFocusRef, onClose, children }: CaseModalProps) {
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = document.documentElement
    root.classList.add('case-open')
    // фокус на сам диалог, а не на крестик: так рамка фокуса появляется только при навигации с клавиатуры
    panelRef.current?.focus({ preventScroll: true })

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      root.classList.remove('case-open')
      returnFocusRef.current?.focus({ preventScroll: true })
    }
  }, [onClose, returnFocusRef])

  const onSceneClick = (event: MouseEvent<HTMLDivElement>) => {
    if (!panelRef.current?.contains(event.target as Node)) onClose()
  }

  const stageVars = {
    '--panel-h': panelHeight.d,
    '--panel-ht': panelHeight.t,
    '--panel-hm': panelHeight.m,
  } as CSSProperties

  return (
    <div className="case-overlay">
      <div className="case-scene">
        <div className="case-stage" style={stageVars} onClick={onSceneClick}>
          <img src={blob5} alt="" aria-hidden="true" className="case-blob case-blob--5" />
          <img src={blob4} alt="" aria-hidden="true" className="case-blob case-blob--4" />
          <img src={blob6} alt="" aria-hidden="true" className="case-blob case-blob--6" />

          <div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            tabIndex={-1}
            className="case-panel"
          >
            <button type="button" className="case-close" aria-label="Закрыть кейс" onClick={onClose}>
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </button>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
