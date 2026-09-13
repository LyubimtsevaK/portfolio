import { useCallback, useEffect, useRef, useState } from 'react'

const readHash = () => window.location.hash.slice(1)

// кейс открывается по #<id>: ссылкой можно поделиться, «назад» в браузере закрывает модалку
export function useCaseHash() {
  const [caseId, setCaseId] = useState(readHash)
  // запоминаем до обновления состояния: как только главная станет inert, браузер снимет с неё фокус
  const openerRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const sync = () => setCaseId(readHash())
    window.addEventListener('hashchange', sync)
    window.addEventListener('popstate', sync)
    return () => {
      window.removeEventListener('hashchange', sync)
      window.removeEventListener('popstate', sync)
    }
  }, [])

  const openCase = useCallback((id: string) => {
    openerRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null
    window.history.pushState({ caseOpenedInApp: true }, '', `#${id}`)
    setCaseId(id)
  }, [])

  const closeCase = useCallback(() => {
    // открыли кликом на сайте — возвращаемся по истории; пришли по прямой ссылке — просто убираем хэш
    if (window.history.state?.caseOpenedInApp) {
      window.history.back()
      return
    }
    window.history.replaceState(null, '', window.location.pathname + window.location.search)
    setCaseId('')
  }, [])

  return { caseId, openCase, closeCase, openerRef }
}
