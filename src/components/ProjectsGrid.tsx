import cardRoutesVibes from '../assets/images/card-routes-vibes.jpg'
import cardNadezhda from '../assets/images/card-nadezhda.jpg'
import blob4At402 from '../assets/blobs/blob-4-402.svg'
import blob6At402 from '../assets/blobs/blob-6-402.svg'
import blob6At640 from '../assets/blobs/blob-6-640.svg'
import blob6 from '../assets/blobs/blob-6.svg'
import Blob from './Blob'
import ProjectCard, { type Tag } from './ProjectCard'
import './stage.css'
import './Projects.css'

const WEB: Tag = { label: 'Web', desktop: 63, mobile: 59 }
const USER_FLOW: Tag = { label: 'User Flow', desktop: 114, mobile: 92 }
const UI_SYSTEM: Tag = { label: 'UI System', desktop: 120, mobile: 92 }
// в мобильных макетах этого тега нет; ширина рамки взята как у UI System
const REDESIGN: Tag = { label: 'Redesign', desktop: 120, mobile: 92 }

export default function ProjectsGrid() {
  return (
    <section className="stage-section">
      <div className="stage projects-stage">
        <Blob
          sources={{ at402: blob6At402, at640: blob6At640, at1440: blob6, at1920: blob6 }}
          className="abs box blob projects-blob--6"
        />
        <img src={blob4At402} alt="" aria-hidden="true" className="abs box blob projects-blob--7" />

        <h2 className="abs txt trim projects-title">проекты</h2>

        <ProjectCard
          className="pcard--1"
          tags={[WEB, USER_FLOW, UI_SYSTEM]}
          image={cardRoutesVibes}
          imageAlt="Мокапы мобильного приложения Routes & Vibes на фоне пляжа"
          title="Routes & Vibes - сервис для планирования путешествий"
          description="Проектирование многостраничного travel-сервиса: структура, пользовательские сценарии, UI-система, интерактивный прототип и адаптивные версии."
          cta="Смотреть кейс"
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
