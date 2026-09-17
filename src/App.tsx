import { useEffect } from 'react'
import Hero from './components/Hero'
import ProjectsGrid from './components/ProjectsGrid'
import Footer from './components/Footer'
import CaseModal from './components/CaseModal'
import RoutesVibesCase, {
  ROUTES_VIBES_ID,
  ROUTES_VIBES_PANEL_HEIGHT,
  ROUTES_VIBES_TITLE_ID,
} from './components/RoutesVibesCase'
import NadezhdaCase, {
  NADEZHDA_ID,
  NADEZHDA_PANEL_HEIGHT,
  NADEZHDA_TITLE_ID,
} from './components/NadezhdaCase'
import { countCaseView } from './analytics'
import { useCaseHash } from './useCaseHash'

export default function App() {
  const { caseId, openCase, closeCase, openerRef } = useCaseHash()
  const routesVibesOpen = caseId === ROUTES_VIBES_ID
  const nadezhdaOpen = caseId === NADEZHDA_ID
  const caseOpen = routesVibesOpen || nadezhdaOpen

  useEffect(() => {
    if (caseOpen) countCaseView(caseId)
  }, [caseOpen, caseId])

  return (
    <>
      <div className="overflow-x-hidden bg-bg text-ink" inert={caseOpen}>
        <Hero />
        <ProjectsGrid onOpenCase={openCase} />
        <Footer />
      </div>

      {routesVibesOpen && (
        <CaseModal
          titleId={ROUTES_VIBES_TITLE_ID}
          panelHeight={ROUTES_VIBES_PANEL_HEIGHT}
          returnFocusRef={openerRef}
          onClose={closeCase}
        >
          <RoutesVibesCase />
        </CaseModal>
      )}

      {nadezhdaOpen && (
        <CaseModal
          titleId={NADEZHDA_TITLE_ID}
          panelHeight={{ d: NADEZHDA_PANEL_HEIGHT }}
          returnFocusRef={openerRef}
          onClose={closeCase}
        >
          <NadezhdaCase />
        </CaseModal>
      )}
    </>
  )
}
