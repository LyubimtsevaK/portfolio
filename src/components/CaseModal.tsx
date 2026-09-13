import { useEffect, useRef, useState, type CSSProperties, type MouseEvent, type ReactNode, type RefObject } from 'react'
import './CaseModal.css'

// держать синхронно с длительностью .case-panel--closing в CaseModal.css
const CLOSE_DURATION_MS = 300

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
  const [closing, setClosing] = useState(false)
  // не state: нужен как guard от повторного запуска и чтобы снять таймер при размонтировании
  const closeTimerRef = useRef<number | null>(null)

  // запускает анимацию закрытия и только по её окончании вызывает реальный onClose
  // (он убирает #routes-vibes из истории — именно это размонтирует модалку)
  const requestClose = () => {
    if (closeTimerRef.current !== null) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      onClose()
      return
    }
    setClosing(true)
    closeTimerRef.current = window.setTimeout(onClose, CLOSE_DURATION_MS)
  }

  useEffect(() => {
    const root = document.documentElement
    root.classList.add('case-open')
    // фокус на сам диалог, а не на крестик: так рамка фокуса появляется только при навигации с клавиатуры
    panelRef.current?.focus({ preventScroll: true })

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') requestClose()
    }
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      if (closeTimerRef.current !== null) window.clearTimeout(closeTimerRef.current)
      root.classList.remove('case-open')
      returnFocusRef.current?.focus({ preventScroll: true })
    }
  }, [onClose, returnFocusRef])

  const onSceneClick = (event: MouseEvent<HTMLDivElement>) => {
    if (!panelRef.current?.contains(event.target as Node)) requestClose()
  }

  const stageVars = {
    '--panel-h': panelHeight.d,
    '--panel-ht': panelHeight.t,
    '--panel-hm': panelHeight.m,
  } as CSSProperties

  return (
    <div className={closing ? 'case-overlay case-overlay--closing' : 'case-overlay'}>
      <div className="case-scene">
        <div className="case-stage" style={stageVars} onClick={onSceneClick}>
          <div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            tabIndex={-1}
            className="case-panel"
          >
            <button type="button" className="case-close" aria-label="Закрыть кейс" onClick={requestClose}>
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
