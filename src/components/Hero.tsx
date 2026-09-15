import heroPhoto from '../assets/images/hero-photo.jpg'
import { RESUME_URL, TELEGRAM_URL } from '../links'
import './stage.css'
import './Hero.css'

const STAR_RAYS = 21
const STAR_INNER = 0.5

// вершины звезды в системе viewBox -100…100; первый луч смотрит строго вверх
const starPoints = Array.from({ length: STAR_RAYS * 2 }, (_, i) => {
  const r = i % 2 ? 100 * STAR_INNER : 100
  const angle = ((i * 180) / STAR_RAYS - 90) * (Math.PI / 180)
  return `${(r * Math.cos(angle)).toFixed(3)},${(r * Math.sin(angle)).toFixed(3)}`
}).join(' ')

export default function Hero() {
  return (
    <section className="stage-section">
      <div className="stage hero-stage">
        <p className="abs txt trim hero-hello">привет, я Кристина</p>

        <h1>
          <span className="abs txt trim hero-title hero-title--1">продуктовый</span>{' '}
          <span className="abs txt trim hero-title hero-title--2">дизайнер</span>
        </h1>

        <img src={heroPhoto} alt="Кристина Любимцева" className="abs box hero-photo" />

        <a href={RESUME_URL} target="_blank" rel="noreferrer" className="abs box hero-resume">
          <svg viewBox="-100 -100 200 200" aria-hidden="true" className="hero-star">
            <polygon points={starPoints} />
          </svg>
          <span className="txt trim hero-resume-text">
            посмотреть
            <br />
            резюме
          </span>
        </a>

        <div className="abs hero-about">
          <p className="txt">
            Проектирую понятные и визуально цельные интерфейсы, в которых каждое решение работает
            на задачу пользователя и продукта. Люблю разбираться в логике сценариев, структуре
            и деталях — и понимать, почему то или иное дизайн-решение действительно работает.
          </p>
          <p className="txt">
            Сейчас развиваюсь в продуктовом дизайне и хочу создавать интерфейсы, которые не только
            хорошо выглядят, но и делают взаимодействие с продуктом
            <br className="hero-br--402" /> проще и понятнее.
          </p>
        </div>

        <a href={TELEGRAM_URL} target="_blank" rel="noreferrer" className="abs txt trim hero-tg">
          tg: @lyubimtseva_k
        </a>
      </div>
    </section>
  )
}
