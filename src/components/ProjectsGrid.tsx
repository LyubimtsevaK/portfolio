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

type ProjectsGridProps = {
  onOpenCase: (id: string) => void
}

export default function ProjectsGrid({ onOpenCase }: ProjectsGridProps) {
  const openRoutesVibes = (event: MouseEvent<HTMLElement>) => {
    // ctrl/cmd/средняя кнопка — пусть браузер откроет ссылку в новой вкладке как обычно
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
    event.preventDefault()
    onOpenCase('routes-vibes')
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
          ctaHref="#routes-vibes"
          onCtaClick={openRoutesVibes}
        />

        <ProjectCard
          className="pcard--2"
          tags={[REDESIGN, WEB, USER_FLOW, UI_SYSTEM]}
          image={cardNadezhda}
          imageAlt="Ноутбук с сайтом приюта для животных «Надежда» среди травы"
          title="Надежда - редизайн сайта приюта для животных"
          description="Новая структура сайта с акцентом на пользовательские сценарии, актуальность контента и простоту взаимодействия."
          cta="Скоро можно будет посмотреть"
          badge="В процессе"
          disabled
        />
      </div>
    </section>
  )
}
