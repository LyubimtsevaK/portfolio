import heroPhoto from '../assets/images/hero-photo.jpg'
import iconPrototype from '../assets/images/icon-prototype.png'
import iconFigma from '../assets/images/icon-figma.png'
import iconUiSystems from '../assets/images/icon-ui-systems.png'
import iconUserFlows from '../assets/images/icon-user-flows.png'
import blob4At402 from '../assets/blobs/blob-4-402.svg'
import blob4At640 from '../assets/blobs/blob-4-640.svg'
import blob4At1440 from '../assets/blobs/blob-4-1440.svg'
import blob4At1920 from '../assets/blobs/blob-4.svg'
import blob5At402 from '../assets/blobs/blob-5-402.svg'
import blob5At640 from '../assets/blobs/blob-5-640.svg'
import blob5At1440 from '../assets/blobs/blob-5-1440.svg'
import blob5At1920 from '../assets/blobs/blob-5.svg'
import Blob from './Blob'
import './stage.css'
import './Hero.css'

const skills = [
  { key: 'prototype', icon: iconPrototype, label: 'Prototype' },
  { key: 'figma', icon: iconFigma, label: 'Figma' },
  { key: 'ui', icon: iconUiSystems, label: 'UI systems' },
  { key: 'flows', icon: iconUserFlows, label: 'User flows' },
]

export default function Hero() {
  return (
    <section className="stage-section">
      <div className="stage hero-stage">
        <Blob
          sources={{ at402: blob5At402, at640: blob5At640, at1440: blob5At1440, at1920: blob5At1920 }}
          className="abs box blob hero-blob--5"
        />
        <Blob
          sources={{ at402: blob4At402, at640: blob4At640, at1440: blob4At1440, at1920: blob4At1920 }}
          className="abs box blob hero-blob--4"
        />

        <h1 className="abs hero-text hero-title">портфолио</h1>

        <div className="abs box hero-photo">
          <div className="hero-photo-frame">
            <img src={heroPhoto} alt="Кристина Любимцева" />
          </div>
        </div>

        <div aria-hidden="true" className="abs box hero-bar" />
        <p className="abs hero-text hero-bar-text">
          <span className="font-normal">привет, я</span>{' '}
          <span className="font-semibold">Кристина</span>
        </p>

        <h2 className="sr-only">продуктовый дизайнер</h2>
        <div aria-hidden="true">
          <span className="abs hero-paren hero-paren--open">
            <span>
              <span>(</span>
            </span>
          </span>
          <span className="abs hero-text hero-word hero-word--1">продуктовый</span>
          <span className="abs hero-text hero-word hero-word--2">дизайнер</span>
          <span className="abs hero-paren hero-paren--close">
            <span>
              <span>)</span>
            </span>
          </span>
        </div>

        <p className="abs hero-para">
          Проектирую понятные интерфейсы и люблю разбираться, почему
          дизайн-решение работает. Сейчас развиваюсь в продуктовом дизайне.
        </p>

        <ul className="abs hero-skills">
          {skills.map(({ key, icon, label }) => (
            <li key={key} className={`hero-skill hero-skill--${key}`}>
              <img src={icon} alt="" aria-hidden="true" />
              <span className="sr-only">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
