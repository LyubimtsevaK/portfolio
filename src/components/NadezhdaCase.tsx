import type { CSSProperties, ReactNode } from 'react'
import heroImg from '../assets/case-nadezhda/hero.webp'
import ideaImg from '../assets/case-nadezhda/product.webp'
import oldSiteImg from '../assets/case-nadezhda/old-site.webp'
import newSiteImg from '../assets/case-nadezhda/new-site.webp'
import arrowImg from '../assets/case-nadezhda/arrow.png'
import scenariosImg from '../assets/case-nadezhda/scenarios.webp'
import pageMainImg from '../assets/case-nadezhda/page-main.webp'
import pageAboutImg from '../assets/case-nadezhda/page-about.webp'
import pageCatteryImg from '../assets/case-nadezhda/page-cattery.webp'
import resultImg from '../assets/case-nadezhda/result.webp'
import { D, PANEL_HEIGHT_1440, type Box } from './nadezhdaLayout'
import './NadezhdaCase.css'

export const NADEZHDA_ID = 'nadezhda'
export const NADEZHDA_TITLE_ID = 'nadezhda-title'
export const NADEZHDA_PANEL_HEIGHT = PANEL_HEIGHT_1440

type Vars = Record<string, string | number>

// координаты макета 1595 — переменные читаются только в медиазапросе ≥1200px,
// ниже кейс идёт потоком и значения игнорируются
function at(b: Box) {
  const style: Vars = { '--x': b[0], '--y': b[1] }
  if (b[2] !== undefined) style['--w'] = b[2]
  if (b[3] !== undefined) style['--h'] = b[3]
  return { style: style as CSSProperties }
}

function Media({ p, src, alt, framed = false }: { p: Box; src: string; alt: string; framed?: boolean }) {
  return (
    <div className={framed ? 'nd-el nd-media nd-media--framed' : 'nd-el nd-media'} {...at(p)}>
      <img src={src} alt={alt} loading="lazy" decoding="async" />
    </div>
  )
}

function Note({ p, children }: { p: Box; children: ReactNode }) {
  return (
    <p className="nd-el nd-note" {...at(p)}>
      {children}
    </p>
  )
}

// подсветка фрагмента розовой плашкой, как в макете
const Hl = ({ children }: { children: ReactNode }) => <mark className="nd-hl">{children}</mark>
// розовое слово-акцент
const Ac = ({ children }: { children: ReactNode }) => <span className="nd-ac">{children}</span>

const ROLES = [
  ['UX/UI-дизайн', 126],
  ['анализ существующего решения', 274],
  ['визуальный дизайн', 170],
  ['информационная архитектура', 256],
  ['пользовательские сценарии', 242],
  ['прототипирование', 167],
  ['продуктовая концепция', 206],
] as const

export default function NadezhdaCase() {
  return (
    <div className="nd">
      <header className="nd-sec nd-sec--head">
        <h2 id={NADEZHDA_TITLE_ID} className="nd-head">
          <span aria-hidden="true" className="nd-el nd-paren" {...at(D.parenOpen)}>
            <span>
              <span>(</span>
            </span>
          </span>
          <span className="nd-el nd-trim nd-title" {...at(D.title)}>
            надежда
          </span>
          <span aria-hidden="true" className="nd-el nd-paren" {...at(D.parenClose)}>
            <span>
              <span>)</span>
            </span>
          </span>
        </h2>
        <p className="nd-el nd-body" {...at(D.intro)}>
          Сайт приюта, который помогает найти питомца, поддержать животных или познакомиться с приютом
        </p>
        <Media p={D.heroImg} src={heroImg} alt="Главная страница нового сайта приюта «Надежда» на ноутбуке" />
        <div className="nd-el nd-body" {...at(D.aboutText)}>
          <p>
            <Hl>«Надежда»</Hl> — приют для животных в Самаре. Помимо самого приюта, у организации есть активные
            социальные сети и котейня «Чукотка», где с некоторыми подопечными можно познакомиться лично.
          </p>
          <p>
            Я переработала сайт приюта так, чтобы он стал не ещё одним каналом, который необходимо постоянно
            поддерживать в актуальном состоянии, а <Hl>понятной точкой входа в экосистему приюта</Hl>.
          </p>
          <p>
            Пользователь может прийти из поисковой системы, быстро понять, чем занимается «Надежда», выбрать нужный
            сценарий — забрать животное, помочь приюту или посетить котейню — и перейти к актуальной информации.
          </p>
        </div>
      </header>

      <section className="nd-sec">
        <h3 className="nd-el nd-trim nd-h" {...at(D.roleH)}>
          моя роль
        </h3>
        <ul className="nd-el nd-roles" {...at(D.roleTags)}>
          {ROLES.map(([label, w]) => (
            <li key={label} className="nd-role" style={{ '--tw': w } as CSSProperties}>
              {label}
            </li>
          ))}
        </ul>
      </section>

      <section className="nd-sec">
        <h3 className="nd-el nd-trim nd-h nd-h--tight" {...at(D.contextH)}>
          контекст <br className="nd-br" />и проблема
        </h3>
        <div className="nd-el nd-body" {...at(D.contextText)}>
          <p>
            У «Надежды» есть активные социальные сети: там появляются новые животные, сборы, списки необходимого и
            новости приюта. Но в формате ленты нужную информацию сложно быстро найти.
          </p>
          <p>
            При этом знакомство с приютом часто начинается не с соцсетей, а с поиска. Пользователь находит сайт, а уже
            оттуда может перейти к нужной информации.
          </p>
          <p>
            Изначально я планировала обычный редизайн, но при анализе увидела другую проблему: если переносить весь
            актуальный контент на сайт, сотрудникам придётся одновременно поддерживать два постоянно обновляемых канала.
          </p>
          <p>
            Поэтому основной вопрос проекта стал таким:{' '}
            <Hl>как сделать сайт полезным и актуальным, не создавая для приюта дополнительную нагрузку?</Hl>
          </p>
        </div>
      </section>

      <section className="nd-sec">
        <h3 className="nd-el nd-trim nd-h" {...at(D.ideaH)}>
          продуктовая идея
        </h3>
        <div className="nd-el nd-body" {...at(D.ideaText)}>
          <p>Я разделила информацию на два типа.</p>
          <p>
            <Ac>Стабильная</Ac> — информация о приюте, пристройстве, способах помощи, котейне, контактах и правилах. Она
            остаётся на сайте.
          </p>
          <p>
            <Ac>Динамическая</Ac> — животные, которые сейчас ищут дом, текущие сборы, списки необходимого и новости. Она
            остаётся в социальных сетях.
          </p>
          <p>
            Так сайт становится стабильной точкой входа, которая помогает человеку понять, куда идти дальше в
            зависимости от его задачи.
          </p>
        </div>
        <Media p={D.ideaImg} src={ideaImg} alt="Блок «животные, которые ищут дом» на ноутбуке" />
      </section>

      <section className="nd-sec">
        <h3 className="nd-el nd-trim nd-h" {...at(D.goalH)}>
          цель
        </h3>
        <div className="nd-el nd-body" {...at(D.goalText)}>
          <p>
            <Hl>Цель проекта — помочь большему числу пользователей перейти от знакомства с приютом к действию.</Hl>
          </p>
          <p>
            Я выделила три основных направления: <Ac>взять животное домой</Ac>, <Ac>помочь приюту</Ac> и{' '}
            <Ac>посетить котейню</Ac>.
          </p>
          <p>При этом сайт должен оставаться полезным без постоянного ручного обновления.</p>
        </div>
      </section>

      <section className="nd-sec">
        <h3 className="nd-el nd-trim nd-h" {...at(D.analysisH)}>
          анализ существующего решения
        </h3>
        <div className="nd-el nd-body" {...at(D.analysisText)}>
          <p>
            При разборе существующего сайта я смотрела на структуру, контент и основные пользовательские маршруты.
          </p>
          <p>
            Основная проблема была не только в визуальной части: сайт пытался быть самостоятельным источником постоянно
            меняющейся информации, хотя реальная активность приюта уже сосредоточена в соцсетях.
          </p>
          <p>Поэтому вместо переноса старой структуры в новый интерфейс я пересмотрела роль сайта целиком.</p>
        </div>
        <Media p={D.oldSite} src={oldSiteImg} alt="Главная страница исходного сайта приюта" framed />
        <img className="nd-el nd-arrow" {...at(D.arrow)} src={arrowImg} alt="" aria-hidden="true" />
        <Media p={D.newSite} src={newSiteImg} alt="Главная страница нового сайта приюта" framed />
      </section>

      <section className="nd-sec">
        <h3 className="nd-el nd-trim nd-h" {...at(D.usersH)}>
          пользователи и сценарии
        </h3>
        <div className="nd-el nd-body" {...at(D.usersText)}>
          <p>Я проектировала сайт вокруг намерений пользователя, а не внутренней структуры приюта.</p>
        </div>
        <Media
          p={D.scenarios}
          src={scenariosImg}
          alt="Четыре пользовательских сценария: «хочу взять животное» (поиск → сайт → животные → актуальный список → связь с приютом), «хочу помочь» (поиск → сайт → помощь → способ помощи → действие), «хочу посетить котейню» (поиск → сайт → котейня → условия посещения → визит) и «хочу узнать о приюте» (поиск → сайт → о приюте → доверие → целевое действие)"
        />
      </section>

      <section className="nd-sec">
        <h3 className="nd-el nd-trim nd-h nd-h--center" {...at(D.mainH)}>
          проектирование главной страницы
        </h3>
        <Media p={D.mainImg} src={pageMainImg} alt="Макет главной страницы целиком" framed />
        <Note p={D.mainNote1}>
          Главная работает как обзор всей системы: знакомит с приютом, показывает животных, рассказывает о котейне и
          приводит пользователя к одному из основных действий.
        </Note>
        <Note p={D.mainNote2}>
          Блок с животными не заменяет каталог: он знакомит с подопечными и ведёт к актуальному списку в социальных
          сетях.
        </Note>
      </section>

      <section className="nd-sec">
        <h3 className="nd-el nd-trim nd-h nd-h--center" {...at(D.aboutPageH)}>
          страница «о приюте»
        </h3>
        <Media p={D.aboutPageImg} src={pageAboutImg} alt="Макет страницы «о приюте» целиком" framed />
        <Note p={D.aboutPageNote}>
          Страница рассказывает не только историю «Надежды», но и объясняет, как устроены пристройство животных и помощь
          приюту. Её задача — сформировать доверие перед следующим действием.
        </Note>
      </section>

      <section className="nd-sec">
        <h3 className="nd-el nd-trim nd-h nd-h--center" {...at(D.catteryH)}>
          страница котейни «Чукотка»
        </h3>
        <Media p={D.catteryImg} src={pageCatteryImg} alt="Макет страницы котейни «Чукотка» целиком" framed />
        <Note p={D.catteryNote}>
          Здесь я собрала всё, что нужно перед посещением: формат пространства, знакомство с животными, правила, адрес и
          расписание.
        </Note>
      </section>

      <section className="nd-sec">
        <h3 className="nd-el nd-trim nd-h" {...at(D.visualH)}>
          визуальное решение
        </h3>
        <div className="nd-el nd-body" {...at(D.visualText)}>
          <p>
            Мне хотелось сохранить ощущение живого, немного неидеального пространства приюта и не превращать его в
            типичный благотворительный сайт с нейтральными карточками.
          </p>
          <p>
            Поэтому основой визуального языка стали реальные фотографии животных, крупная типографика, коллажи и
            небольшие графические элементы.
          </p>
          <p>
            Синий цвет связывает разные страницы в единую систему, а жёлтый используется как акцент для действий и
            деталей.
          </p>
          <p>
            Фотографии здесь работают не как декоративные изображения: они являются частью интерфейса и постоянно
            возвращают внимание к тем, ради кого существует приют.
          </p>
          <p>
            При этом я старалась сохранить достаточно простой каркас страниц, чтобы эмоциональная визуальная подача не
            мешала основным пользовательским сценариям.
          </p>
        </div>
      </section>

      <section className="nd-sec">
        <h3 className="nd-el nd-trim nd-h" {...at(D.changedH)}>
          что изменилось относительно исходного сайта
        </h3>
        <div className="nd-el nd-body" {...at(D.changedText)}>
          <p>
            В исходной версии сайт пытался хранить почти всю информацию о приюте в одном месте. Но часть этой информации
            быстро устаревает: меняются списки животных, сборы, текущие нужды.
          </p>
          <p>
            Поэтому я решила не дублировать соцсети, а разделить их задачи с сайтом. На сайте остаётся основная и более
            постоянная информация о приюте, а за актуальными объявлениями и обновлениями пользователь переходит в
            соцсети.
          </p>
          <p>
            Так сайт становится понятной точкой входа: помогает разобраться, куда идти дальше в зависимости от цели —
            взять животное, помочь приюту или узнать больше о котейне.
          </p>
        </div>
      </section>

      <section className="nd-sec">
        <h3 className="nd-el nd-trim nd-h" {...at(D.resultH)}>
          результат
        </h3>
        <div className="nd-el nd-body" {...at(D.resultText)}>
          <p>В результате я изменила не только интерфейс, но и роль сайта в экосистеме приюта.</p>
          <p>
            Сайт стал стабильной точкой входа для основных пользовательских сценариев, а постоянно меняющийся контент
            остался в социальных сетях, которые команда уже регулярно ведёт.
          </p>
          <p>
            Проект пока не запущен, поэтому следующим этапом я планирую проверить основные сценарии на пользователях и
            скорректировать решение по результатам тестирования.
          </p>
        </div>
        <Media p={D.resultImg} src={resultImg} alt="Страница «о приюте» нового сайта на ноутбуке" />
      </section>

      <p className="nd-el nd-trim nd-thanks" {...at(D.thanks)}>
        спасибо за просмотр!
      </p>
    </div>
  )
}
