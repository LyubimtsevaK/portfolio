type CountVars = { path: string; title?: string; event?: boolean }
type GoatCounter = { count?: (vars: CountVars) => void }

declare global {
  interface Window {
    goatcounter?: GoatCounter
  }
}

// count.js грузится async: если он ещё не готов, отправляем после загрузки скрипта
function count(vars: CountVars) {
  const send = () => window.goatcounter?.count?.(vars)

  if (window.goatcounter?.count) {
    send()
    return
  }
  document.querySelector('script[data-goatcounter]')?.addEventListener('load', send, { once: true })
}

// GoatCounter сам считает только path + query, хэш модалки кейса отправляем отдельным просмотром
export function countCaseView(caseId: string) {
  count({ path: `${location.pathname}#${caseId}`, title: document.title })
}

export function countClick(name: string, title: string) {
  count({ path: name, title, event: true })
}
