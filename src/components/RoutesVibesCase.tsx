import type { CSSProperties, ReactNode } from 'react'
import aboutPhoto from '../assets/case/about-photo.webp'
import aboutMacbook from '../assets/case/about-macbook.webp'
import aboutDeco1 from '../assets/case/about-deco-1.svg'
import aboutDeco2 from '../assets/case/about-deco-2.svg'
import taskBg from '../assets/case/task-bg.webp'
import taskPhone1 from '../assets/case/task-phone-1.webp'
import taskPhone2 from '../assets/case/task-phone-2.webp'
import taskPhone3 from '../assets/case/task-phone-3.webp'
import structure from '../assets/case/structure.webp'
import conceptLeft from '../assets/case/concept-left.webp'
import conceptRight from '../assets/case/concept-right.webp'
import solution1 from '../assets/case/solution1.webp'
import solution2Img1 from '../assets/case/solution2-1.webp'
import solution2Img2 from '../assets/case/solution2-2.webp'
import solution2Img3 from '../assets/case/solution2-3.webp'
import solution2Img4 from '../assets/case/solution2-4.webp'
import solution2Img5 from '../assets/case/solution2-5.webp'
import solution3Img1 from '../assets/case/solution3-1.webp'
import solution3Img2 from '../assets/case/solution3-2.webp'
import solution3Img3 from '../assets/case/solution3-3.webp'
import solution3Img4 from '../assets/case/solution3-4.webp'
import solution3Img5 from '../assets/case/solution3-5.webp'
import solution4 from '../assets/case/solution4.webp'
import kit1052 from '../assets/case/uikit-1052.webp'
import kit1053 from '../assets/case/uikit-1053.webp'
import kit1054 from '../assets/case/uikit-1054.webp'
import kit1055 from '../assets/case/uikit-1055.webp'
import kit1057 from '../assets/case/uikit-1057.webp'
import kit1059 from '../assets/case/uikit-1059.webp'
import kit1060 from '../assets/case/uikit-1060.webp'
import kit1061 from '../assets/case/uikit-1061.webp'
import kit1062 from '../assets/case/uikit-1062.webp'
import kit1063 from '../assets/case/uikit-1063.webp'
import kit1064 from '../assets/case/uikit-1064.webp'
import adaptiveBg from '../assets/case/adaptive-bg.webp'
import adaptiveIpad from '../assets/case/adaptive-ipad.webp'
import adaptiveCardBg from '../assets/case/adaptive-card-bg.webp'
import adaptiveCardImg from '../assets/case/adaptive-card-img.webp'
import adaptivePhone8 from '../assets/case/adaptive-phone-8.webp'
import adaptivePhone9 from '../assets/case/adaptive-phone-9.webp'
import adaptivePhone10 from '../assets/case/adaptive-phone-10.webp'
import adaptiveIpadPro from '../assets/case/adaptive-ipadpro.webp'
import resultLeft from '../assets/case/result-left.webp'
import resultRight from '../assets/case/result-right.webp'
import resultBg from '../assets/case/result-bg.webp'
import resultPhones from '../assets/case/result-phones.webp'
import { KIT, KIT_GROUP, L, type Box, type GroupPlace, type Place } from './routesVibesLayout'
import './RoutesVibesCase.css'

export { PANEL_HEIGHT as ROUTES_VIBES_PANEL_HEIGHT } from './routesVibesLayout'
export const ROUTES_VIBES_ID = 'routes-vibes'
export const ROUTES_VIBES_TITLE_ID = 'routes-vibes-title'

const COMPETITORS_SHEET =
  'https://docs.google.com/spreadsheets/d/1PlLgAt1sCVpgN64ulpX2h1J2BqWSXKjWdy9E8lpXN4k/edit?gid=0#gid=0'

const KIT_IMAGES: Record<(typeof KIT)[number]['id'], string> = {
  '1052': kit1052,
  '1053': kit1053,
  '1054': kit1054,
  '1055': kit1055,
  '1057': kit1057,
  '1059': kit1059,
  '1060': kit1060,
  '1061': kit1061,
  '1062': kit1062,
  '1063': kit1063,
  '1064': kit1064,
}

// суффиксы CSS-переменных макетов: d — 1440, t — 640, m — 402
const BPS = [
  ['d', ''],
  ['t', 't'],
  ['m', 'm'],
] as const

type Vars = Record<string, string | number>

const hideIn = (p: Place) =>
  BPS.filter(([bp]) => !p[bp])
    .map(([bp]) => bp)
    .join(' ') || undefined

// без w/h задаём initial, чтобы элемент не унаследовал размеры родителя-карточки
function place(p: Place) {
  const style: Vars = {}
  for (const [bp, s] of BPS) {
    const b = p[bp]
    if (!b) continue
    style[`--x${s}`] = b[0]
    style[`--y${s}`] = b[1]
    style[`--w${s}`] = b[2] ?? 'initial'
    style[`--h${s}`] = b[3] ?? 'initial'
  }
  return { style: style as CSSProperties, 'data-hide': hideIn(p) }
}

// дети группы задаются в процентах: при пропорциональном масштабе — от размеров 1440, при перестановке — от своего макета
function placeGroup(p: GroupPlace) {
  const style: Vars = {}
  for (const [bp, s] of BPS) {
    const b = p[bp]
    if (!b) continue
    const ref = p.rearranged ? b : p.d!
    style[`--x${s}`] = b[0]
    style[`--y${s}`] = b[1]
    style[`--gw${s}`] = b[2]!
    style[`--gh${s}`] = b[3]!
    style[`--rw${s}`] = ref[2]!
    style[`--rh${s}`] = ref[3]!
  }
  return { style: style as CSSProperties, 'data-hide': hideIn(p) }
}

function inGroup(d: Box, t?: Box, m?: Box) {
  const style: Vars = { '--cx': d[0], '--cy': d[1], '--cw': d[2]!, '--ch': d[3]! }
  if (t) Object.assign(style, { '--cxt': t[0], '--cyt': t[1], '--cwt': t[2]!, '--cht': t[3]! })
  if (m) Object.assign(style, { '--cxm': m[0], '--cym': m[1], '--cwm': m[2]!, '--chm': m[3]! })
  return style as CSSProperties
}

type MediaProps = {
  p: Place
  src: string
  alt?: string
  crop?: CSSProperties
  // растянуть картинку на рамку без кропа — так она вставлена в макете
  stretch?: boolean
}

function Media({ p, src, alt = '', crop, stretch = false }: MediaProps) {
  return (
    <div className={stretch ? 'cs-abs cs-fill cs-fill--stretch' : 'cs-abs cs-fill'} {...place(p)}>
      <img src={src} alt={alt} loading="lazy" decoding="async" style={crop} />
    </div>
  )
}

function Note({ p, children }: { p: Place; children: ReactNode }) {
  return (
    <div className="cs-abs cs-note cs-body" {...place(p)}>
      <p>{children}</p>
    </div>
  )
}

// ручной перенос строки; bp — макеты, где он есть: d — 1440, t — 640, m — 402
const br = (bp = 'd') => <br className="cs-br" data-bp={bp} />

const cards = [
  {
    p: L.card1,
    title: 'Подробная информация снижает неопределённость',
    text: <>Наиболее убедительно работают сайты, где пользователь может заранее изучить программу, формат поездки, условия и особенности направления. Поэтому в Routes &amp; Vibes я решила подробно раскрывать каждое путешествие на отдельной странице, а не ограничиваться короткой карточкой и фотографиями.</>,
  },
  {
    p: L.card2,
    title: 'Эмоциональная подача работает вместе с конкретикой',
    text: <>Все проекты активно используют фотографии и визуальный контент, но сильнее воспринимаются те, где атмосфера путешествия сопровождается понятной и хорошо структурированной информацией. Это стало одним из основных принципов Routes &amp; Vibes: сначала заинтересовать направлением, а затем дать пользователю достаточно информации {br('m')}для решения.</>,
  },
  {
    p: L.card3,
    title: 'Структура должна поддерживать путь пользователя',
    text: <>На исследованных сайтах ключевые {br('t')}разделы доступны напрямую из основной навигации, а информацию о конкретном направлении можно найти без сложного поиска. Поэтому я вынесла туры и серф-кемпы в отдельные разделы и построила структуру вокруг перехода <b>от выбора формата → к направлению → к подробной программе → к заявке.</b></>,
  },
  {
    p: L.card4,
    title: <>Доверие формируется {br('m')}не одним элементом</>,
    text: <>Доверие складывается из нескольких сигналов: информации о компании, отзывов, блога и демонстрации опыта. Поэтому в Routes &amp; Vibes я предусмотрела отдельную страницу о компании, отзывы и контент, который помогает пользователю {br('d t m')}получить больше контекста до отправки заявки.</>,
  },
]

const principles = [
  {
    title: L.principle1Title,
    box: L.principle1Box,
    heading: 'Сначала заинтересовать',
    text: <>Путешествие — это эмоциональный продукт, поэтому первый контакт с направлением строится вокруг фотографии, крупной типографики и атмосферы места. Задача первого экрана — заинтересовать направлением и мотивировать пользователя продолжить изучение поездки.</>,
  },
  {
    title: L.principle2Title,
    box: L.principle2Box,
    heading: 'После дать конкретику',
    text: <>Эмоциональная подача быстро сменяется структурированной информацией: особенностями направления, программой, условиями и ответами на частые вопросы. Пользователю не нужно собирать важные детали по разным страницам.</>,
  },
  {
    title: L.principle3Title,
    box: L.principle3Box,
    heading: 'Дать причины доверять',
    text: <>Перед заявкой пользователю важно понимать, кто организует путешествие и чего ожидать от поездки. Поэтому сайт раскрывает компанию через её историю {br()}и опыт, отзывы, блог и дополнительный {br('t')}контент {br()}о путешествиях.</>,
  },
  {
    title: L.principle4Title,
    box: L.principle4Box,
    heading: 'Сделать следующий шаг очевидным',
    text: <>Путь пользователя выстроен от знакомства с форматом и направлением к подробной информации и заявке. Призыв к действию появляется в логичных точках сценария, чтобы после изучения предложения пользователю не приходилось искать способ связаться с компанией.</>,
  },
]

export default function RoutesVibesCase() {
  return (
    <>
      <header>
        <h2 id={ROUTES_VIBES_TITLE_ID}>
          <span aria-hidden="true" className="cs-abs cs-paren" {...place(L.parenOpen)}>
            <span>
              <span>(</span>
            </span>
          </span>
          <span className="cs-abs cs-trim cs-title-text" {...place(L.title)}>
            Routes &amp; Vibes
          </span>
          <span aria-hidden="true" className="cs-abs cs-paren" {...place(L.parenClose)}>
            <span>
              <span>)</span>
            </span>
          </span>
        </h2>
        <p className="cs-abs cs-body cs-intro" {...place(L.intro)}>
          Routes &amp; Vibes – туристическая компания, которая создаёт приключения: от групповых туров и индивидуальных
          путешествий по Камчатке, Сахалину и Байкалу до поездок {br('m')}в живописные уголки Норвегии и Швейцарии. А
          ещё они организуют серф-кемпы в этих локациях – для тех, кто {br('m')}хочет ловить не только впечатления, но и
          волны.
        </p>
      </header>

      <section>
        <h3 className="cs-abs cs-trim cs-h" {...place(L.aboutH)}>
          о проекте
        </h3>
        <div className="cs-abs cs-body" {...place(L.aboutText)}>
          <p>
            Routes &amp; Vibes — учебный концепт многостраничного сайта travel-компании, которая организует авторские
            туры и серф-кемпы в разных странах.
          </p>
          <p>
            Моей задачей было совместить эмоциональную подачу путешествий с понятной структурой: помочь пользователю
            вдохновиться направлением, быстро разобраться в программе и условиях и перейти к заявке.
          </p>
        </div>
        <div className="cs-group" {...placeGroup(L.aboutGroup)}>
          <div aria-hidden="true" className="cs-in cs-deco" style={inGroup([391.53, 19.47, 373.612, 205.657])}>
            <span style={{ width: '93.933%', height: '68.531%' }}>
              <img src={aboutDeco1} alt="" style={{ top: '-0.26%', left: 0, width: '100.14%', height: '100.64%' }} />
            </span>
          </div>
          <div aria-hidden="true" className="cs-in cs-deco" style={inGroup([401.04, 94.74, 338.035, 214.762])}>
            <span style={{ width: '92.016%', height: '73.629%' }}>
              <img src={aboutDeco2} alt="" style={{ top: '-0.23%', left: 0, width: '100.13%', height: '100.57%' }} />
            </span>
          </div>
          <div className="cs-in cs-fill cs-fill--stretch" style={inGroup([0, -0.36, 432.813, 596.581])}>
            <img src={aboutPhoto} alt="Фотографии путешествий в стиле travel journal" loading="lazy" decoding="async" />
          </div>
          <div className="cs-in cs-fill" style={inGroup([443, 220, 650, 376])}>
            <img src={aboutMacbook} alt="Главная страница Routes & Vibes на ноутбуке" loading="lazy" decoding="async" />
          </div>
        </div>
        <Media p={L.aboutPhotoM} src={aboutPhoto} alt="Фотографии путешествий в стиле travel journal" stretch />
      </section>

      <section>
        <h3 className="cs-abs cs-trim cs-h" {...place(L.taskH)}>
          задача
        </h3>
        <div className="cs-abs cs-body" {...place(L.taskText)}>
          <p>
            Сайт travel-компании должен не только создавать желание отправиться в путешествие, но и помогать
            пользователю принять решение: понять формат поездки, изучить направление и программу, разобраться в условиях {br('t m')}
            и перейти к заявке.
          </p>
          <p>Таким образом, дизайн-задача заключается в том, чтобы создать сайт, который одновременно:</p>
          <ul className="cs-list">
            <li>{'         '}создаёт эмоциональный образ путешествий;</li>
            <li>{'         '}позволяет быстро исследовать туры и серф-кемпы;</li>
            <li>{'         '}подробно раскрывает выбранную программу;</li>
            <li>{'         '}формирует доверие к компании;</li>
            <li>{'         '}приводит пользователя к заявке.</li>
          </ul>
        </div>
        <div className="cs-group" {...placeGroup(L.taskGroup)}>
          <div className="cs-in cs-fill" style={inGroup([0, 0, 1093, 571])}>
            <img src={taskBg} alt="" loading="lazy" decoding="async" />
          </div>
          <div className="cs-in cs-fill" style={inGroup([781.4, 36.05, 242.536, 499.189])}>
            <img src={taskPhone3} alt="Мобильная версия Routes & Vibes" loading="lazy" decoding="async" />
          </div>
          <div className="cs-in cs-fill" style={inGroup([419.47, 35.91, 242.536, 499.189])}>
            <img src={taskPhone2} alt="Мобильная версия Routes & Vibes" loading="lazy" decoding="async" />
          </div>
          <div className="cs-in cs-fill" style={inGroup([69.06, 35.76, 242.536, 499.189])}>
            <img src={taskPhone1} alt="Мобильная версия Routes & Vibes" loading="lazy" decoding="async" />
          </div>
        </div>
      </section>

      <section>
        <h3 className="cs-abs cs-trim cs-h cs-h--tight" {...place(L.researchH)}>
          исследование конкурентов
        </h3>
        <div className="cs-abs cs-body" {...place(L.researchText)}>
          <p>
            Я проанализировала сайты travel-компаний и серф-кемпов, чтобы понять, какая информация помогает
            пользователю разобраться в предложении, что формирует {br('d t m')}доверие и как устроен путь от первого знакомства с
            направлением до заявки.
          </p>
          <p>
            В сравнении я смотрела на структуру сайта, полноту информации о турах, навигацию, способы подтверждения
            экспертизы, формы обратной связи, контент {br('d t m')}и визуальную подачу.
          </p>
        </div>
        {cards.map(({ p, title, text }, i) => (
          <article key={i} className="cs-abs cs-card" {...place(p)}>
            <h4 className="cs-abs cs-trim cs-card-title" {...place(L.cardTitle)}>
              {title}
            </h4>
            <p className="cs-abs cs-body" {...place(L.cardText)}>
              {text}
            </p>
          </article>
        ))}
        <p className="cs-abs cs-lead" {...place(L.lead)}>
          Что это дало проекту:
        </p>
        <div className="cs-abs cs-body" {...place(L.leadText)}>
          <p>
            Исследование помогло определить структуру {br('d t m')}Routes &amp; Vibes: разделить туры и серф-кемпы, подробно
            раскрывать каждое направление, добавить блоки доверия, FAQ и выстроить понятный путь от выбора поездки до
            заявки.
          </p>
          <p>
            Полный конкурентный анализ можно посмотреть {br()}по{' '}
            <a className="cs-link" href={COMPETITORS_SHEET} target="_blank" rel="noreferrer">
              ссылке
            </a>
            .
          </p>
        </div>
      </section>

      <section>
        <h3 className="cs-abs cs-trim cs-h cs-h--tight" {...place(L.principlesH)}>
          принципы проектирования
        </h3>
        <p className="cs-abs cs-body" {...place(L.principlesText)}>
          Выводы конкурентного анализа я перевела в четыре принципа, которые определили структуру и подачу
          Routes &amp; Vibes. Они помогли сохранить эмоциональный характер travel-продукта, не жертвуя понятностью и
          количеством информации, необходимым перед заявкой.
        </p>
        {principles.map(({ title, box, heading, text }) => (
          <div key={heading}>
            <h4 className="cs-abs cs-principle-title" {...place(title)}>
              {heading}
            </h4>
            <div className="cs-abs cs-note cs-note--principle cs-body" {...place(box)}>
              <p>{text}</p>
            </div>
          </div>
        ))}
      </section>

      <section>
        <h3 className="cs-abs cs-trim cs-h cs-h--tight" {...place(L.structureH)}>
          структура сайта
        </h3>
        <p className="cs-abs cs-body" {...place(L.structureText)}>
          Я разделила контент по двум основным продуктовым направлениям — авторским турам и серф-кемпам. В отдельные
          разделы вынесла информацию {br('d t')}о компании и блог, которые работают на доверие и помогают пользователю
          подробнее познакомиться с форматом путешествий.
        </p>
        <Media p={L.structureImg} src={structure} alt="Схема структуры сайта Routes & Vibes" />
      </section>

      <section>
        <h3 className="cs-abs cs-trim cs-h cs-h--tight" {...place(L.conceptH)}>
          визуальная концепция
        </h3>
        <div className="cs-abs cs-body" {...place(L.conceptText)}>
          <p>
            Визуальный язык Routes &amp; Vibes построен вокруг образа travel journal — личного дневника, собранного из
            фотографий, заметок и впечатлений из поездки.
          </p>
          <p>
            Я объединила выразительную типографику, живую {br()}travel-фотографию, рукописные акценты и свободную
            композицию, чтобы сайт передавал ощущение приключения, но сохранял понятную визуальную иерархию.
          </p>
        </div>
        <Media p={L.conceptLeft} src={conceptLeft} alt="Мудборд визуальной концепции" />
        <Media p={L.conceptRight} src={conceptRight} alt="Фрагмент визуальной концепции" stretch />
      </section>

      <section>
        <h3 className="cs-abs cs-trim cs-h cs-h--solution" {...place(L.sol1H)}>
          решение 01 - знакомство с направлениями
        </h3>
        <Note p={L.sol1Note1}>
          Каталог направлений я построила не как стандартную сетку одинаковых карточек, а как свободную визуальную
          композицию. Так пользователь сначала знакомится с атмосферой разных мест, а потом выбирает направление для
          более подробного изучения.
        </Note>
        <Note p={L.sol1Note2}>
          Фотографии становятся главным элементом выбора и помогают быстро почувствовать характер каждого места ещё до
          перехода на внутреннюю страницу.
        </Note>
        <Note p={L.sol1Note3}>
          После знакомства с направлениями пользователь может {br()}перейти к подробной странице выбранной поездки или {br('t')}
          связаться с компанией.
        </Note>
        <Media p={L.sol1Img} src={solution1} alt="Каталог направлений Routes & Vibes" />
      </section>

      <section>
        <h3 className="cs-abs cs-trim cs-h cs-h--solution" {...place(L.sol2H)}>
          решение 02- страница серф-кемпа
        </h3>
        <Note p={L.sol2Note1}>
          Страница серф-кемпа выстроена от эмоционального знакомства с направлением к информации, необходимой для
          решения: пользователь изучает формат поездки и программу, получает ответы на основные вопросы и может сразу
          перейти к заявке.
        </Note>
        <Note p={L.sol2Note2}>
          Галерея и блок с предложением кемпа раскрывают поездку через реальные ситуации и основные составляющие опыта.
          Пользователь получает более полное представление не только о месте, но {br('d t')}и о том, как будет проходить
          путешествие.
        </Note>
        <Note p={L.sol2Note3}>
          Программа разбита по дням, чтобы пользователь мог быстро увидеть структуру поездки, оценить её насыщенность и
          понять, подходит ли ему такой {br()}формат отдыха.
        </Note>
        <Note p={L.sol2Note4}>
          FAQ собирает основные организационные вопросы в одном месте и снижает количество неизвестных перед заявкой.
          После этого пользователь может сразу связаться с компанией, не переходя на отдельную страницу контактов.
        </Note>
        <Media p={L.sol2Img1} src={solution2Img1} alt="Первый экран страницы серф-кемпа" />
        <Media p={L.sol2Img2} src={solution2Img2} alt="Галерея серф-кемпа" />
        <Media p={L.sol2Img3} src={solution2Img3} alt="Программа серф-кемпа по дням" />
        <Media p={L.sol2Img4} src={solution2Img4} alt="Блок FAQ серф-кемпа" />
        <Media
          p={L.sol2Img5}
          src={solution2Img5}
          alt="Форма заявки на серф-кемп"
          crop={{ height: '151.91%', top: '-0.03%' }}
        />
      </section>

      <section>
        <h3 className="cs-abs cs-trim cs-h cs-h--solution" {...place(L.sol3H)}>
          решение 03 - доверие к компании
        </h3>
        <Note p={L.sol3Note1}>
          При выборе организованного путешествия пользователю важно понимать не только куда он поедет, но и кому
          доверит организацию поездки. Поэтому страницу о компании я построила вокруг людей, опыта Routes &amp; Vibes и
          подхода к путешествиям.
        </Note>
        <Note p={L.sol3Note2}>
          Блок с создателями компании делает бренд более персональным: пользователь видит людей, которые стоят за
          Routes &amp; Vibes и отвечают за организацию путешествий.
        </Note>
        <Note p={L.sol3Note3}>
          Опыт компании вынесен в несколько конкретных показателей, чтобы ключевые факты можно было {br()}считать быстрее.
        </Note>
        <Note p={L.sol3Note4}>
          Отзывы добавляют к рассказу взгляд участников поездок и дают пользователю дополнительный контекст перед
          выбором путешествия.
        </Note>
        <Media p={L.sol3Img1} src={solution3Img1} alt="Первый экран страницы о компании" />
        <Media p={L.sol3Img2} src={solution3Img2} alt="Блок с создателями компании" />
        <Media p={L.sol3Img3} src={solution3Img3} alt="Показатели опыта компании" />
        <Media p={L.sol3Img4} src={solution3Img4} alt="Блок о подходе к путешествиям" />
        <Media
          p={L.sol3Img5}
          src={solution3Img5}
          alt="Отзывы участников поездок"
          crop={{ height: '152.45%', top: '0.05%' }}
        />
      </section>

      <section>
        <h3 className="cs-abs cs-trim cs-h cs-h--solution" {...place(L.sol4H)}>
          решение 04 - контент вокруг путешествия
        </h3>
        <Note p={L.sol4Note1}>
          Блог помогает пользователю изучать формат путешествий ещё до выбора тура: подготовку к серф-кемпу, питание,
          уровень подготовки и особенности разных направлений.
        </Note>
        <Note p={L.sol4Note2}>
          Из статей пользователь может возвращаться к связанным направлениям и серф-кемпам, продолжая знакомство с
          предложениями Routes &amp; Vibes.
        </Note>
        <Media
          p={L.sol4Img}
          src={solution4}
          alt="Страницы блога Routes & Vibes"
          crop={{ height: '117.23%', top: '-0.02%' }}
        />
      </section>

      <section>
        <h3 className="cs-abs cs-trim cs-h cs-h--84" {...place(L.kitH)}>
          ui kit
        </h3>
        <p className="cs-abs cs-body" {...place(L.kitText)}>
          Несмотря на свободную композицию, интерфейс Routes &amp; Vibes построен на системе повторяющихся элементов. Я
          унифицировала типографику, цвета, навигацию, кнопки, поля ввода и карточки, чтобы сохранять визуальную
          целостность между разными типами страниц и при этом оставлять достаточно свободы для выразительной {br()}подачи
          контента.
        </p>
        <div
          role="img"
          aria-label="UI Kit Routes & Vibes: типографика, цвета, навигация, кнопки, поля ввода и карточки"
          className="cs-group"
          {...placeGroup(KIT_GROUP)}
        >
          {KIT.map(({ id, d, t, m }) => (
            <div key={id} className="cs-in cs-fill cs-kit" style={inGroup(d, t, m)}>
              <img src={KIT_IMAGES[id]} alt="" loading="lazy" decoding="async" />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="cs-abs cs-trim cs-h cs-h--84" {...place(L.adaptH)}>
          адаптивы
        </h3>
        <div className="cs-abs cs-body" {...place(L.adaptText)}>
          <p>
            В desktop-версии Routes &amp; Vibes визуальный характер во многом строится на асимметрии, крупной
            типографике и свободном расположении фотографий. На мобильных экранах я сохранила этот характер, но упростила
            композицию и перестроила контент в более последовательный вертикальный сценарий.
          </p>
          <p>
            При адаптации приоритет смещается с декоративного расположения элементов на читаемость и порядок информации:
            ключевой контент остаётся на первом плане, интерактивные элементы становятся удобнее для небольшого экрана, а
            визуальные акценты сохраняют {br('m')}узнаваемость бренда.
          </p>
        </div>
        <div className="cs-group" {...placeGroup(L.adaptGroup)}>
          <div className="cs-in cs-fill cs-fill--dim" style={inGroup([0, 0, 1093, 635.757])}>
            <img src={adaptiveBg} alt="" loading="lazy" decoding="async" />
          </div>
          <div className="cs-in cs-fill cs-ipad" style={inGroup([480.47, 64.79, 387.64, 506.774])}>
            <img
              src={adaptiveIpad}
              alt="Планшетная версия Routes & Vibes"
              loading="lazy"
              decoding="async"
              style={{ width: '299.73%', height: '152.86%', left: '-89.88%', top: '-36.4%' }}
            />
          </div>
          <div className="cs-in cs-fill cs-softlight" style={inGroup([139.93, 487.84, 257.636, 295.366])}>
            <img src={adaptiveCardBg} alt="" loading="lazy" decoding="async" />
          </div>
          <div className="cs-in cs-fill" style={inGroup([152.83, 500.74, 231.829, 239.474])}>
            <img src={adaptiveCardImg} alt="" loading="lazy" decoding="async" />
          </div>
          <div className="cs-in cs-fill" style={inGroup([115.32, 959.86, 226.802, 467.145])}>
            <img src={adaptivePhone9} alt="Мобильная версия Routes & Vibes" loading="lazy" decoding="async" />
          </div>
          <div className="cs-in cs-fill" style={inGroup([749.51, 695.75, 226.802, 467.145])}>
            <img src={adaptivePhone10} alt="Мобильная версия Routes & Vibes" loading="lazy" decoding="async" />
          </div>
          <div className="cs-in cs-fill" style={inGroup([432.41, 827.82, 226.802, 467.145])}>
            <img src={adaptivePhone8} alt="Мобильная версия Routes & Vibes" loading="lazy" decoding="async" />
          </div>
        </div>
        <Media p={L.ipadPro} src={adaptiveIpadPro} alt="Routes & Vibes на iPad Pro" />
      </section>

      <section>
        <h3 className="cs-abs cs-trim cs-h cs-h--84" {...place(L.resultH)}>
          результат
        </h3>
        <div className="cs-abs cs-body" {...place(L.resultText)}>
          <p>
            В результате я разработала многостраничный сайт Routes &amp; Vibes — от структуры и пользовательских
            сценариев до визуальной системы, адаптивных версий и UI Kit.
          </p>
          <p>
            Сайт помогает пройти путь от первого знакомства с форматом путешествия до подробного изучения направления и
            заявки, сохраняя при этом эмоциональный и узнаваемый характер travel-продукта.
          </p>
        </div>
        <Media p={L.resultLeft} src={resultLeft} alt="Фрагмент сайта Routes & Vibes" />
        <Media p={L.resultRight} src={resultRight} alt="Фрагмент сайта Routes & Vibes" />
        <div className="cs-group" {...placeGroup(L.resultGroup)}>
          <div className="cs-in cs-fill" style={inGroup([0, 0, 1193, 838])}>
            <img src={resultBg} alt="" loading="lazy" decoding="async" />
          </div>
          <div className="cs-in cs-fill" style={inGroup([275, 155, 642, 636])}>
            <img
              src={resultPhones}
              alt="Мобильные экраны Routes & Vibes"
              loading="lazy"
              decoding="async"
              style={{ width: '192.21%', height: '129.36%', left: '-47.49%', top: '-12.69%' }}
            />
          </div>
        </div>
      </section>

      <p className="cs-abs cs-trim cs-thanks" {...place(L.thanks)}>
        спасибо за просмотр!
      </p>
    </>
  )
}
