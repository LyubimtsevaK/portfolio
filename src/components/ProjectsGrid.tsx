import type { MouseEvent } from 'react'
import cardRoutesVibes from '../assets/images/card-routes-vibes.jpg'
import cardNadezhda from '../assets/images/card-nadezhda.jpg'
import ProjectCard, { type Tag } from './ProjectCard'
import './stage.css'
import './Projects.css'

const WEB: Tag = { label: 'Web', desktop: 63, mobile: 59 }
const USER_FLOW: Tag = { label: 'User Flow', desktop: 114, mobile: 92 }
const UI_SYSTEM: Tag = { label: 'UI System', desktop: 120, mobile: 92 }
// в мобильных макетах этого тега нет; ширина рамки взята как у UI System
const REDESIGN: Tag = { label: 'Redesign', desktop: 120, mobile: 92 }

const CASES = { routesVibes: 'routes-vibes', nadezhda: 'nadezhda' } as const

type ProjectsGridProps = {
  onOpenCase: (id: string) => void
}

export default function ProjectsGrid({ onOpenCase }: ProjectsGridProps) {
  // ctrl/cmd/средняя кнопка — пусть браузер откроет ссылку в новой вкладке как обычно
  const openCase = (id: string) => (event: MouseEvent<HTMLElement>) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
    event.preventDefault()
    onOpenCase(id)
  }

  return (
    <section className="stage-section">
      <div className="stage projects-stage">
        <h2 className="abs txt trim projects-title">проекты</h2>

        <ProjectCard
          className="pcard--1"
          tags={[WEB, USER_FLOW, UI_SYSTEM]}
          image={cardRoutesVibes}
          imageAlt="Мокапы мобильного приложения Routes & Vibes на фоне пляжа"
          title="Routes & Vibes - сервис для планирования путешествий"
          description="Проектирование многостраничного travel-сервиса: структура, пользовательские сценарии, UI-система, интерактивный прототип и адаптивные версии."
          cta="Смотреть кейс"
          ctaHref={`#${CASES.routesVibes}`}
          onCtaClick={openCase(CASES.routesVibes)}
        />

        <ProjectCard
          className="pcard--2"
          tags={[REDESIGN, USER_FLOW, UI_SYSTEM]}
          image={cardNadezhda}
          imageAlt="Ноутбук с главной страницей нового сайта приюта «Надежда»"
          title="Надежда — редизайн сайта приюта для животных"
          description="Сайт стал точкой входа в экосистему приюта: помогает выбрать нужный сценарий и перейти к актуальной информации без дублирования соцсетей."
          cta="Смотреть кейс"
          ctaHref={`#${CASES.nadezhda}`}
          onCtaClick={openCase(CASES.nadezhda)}
        />
      </div>
    </section>
  )
}
