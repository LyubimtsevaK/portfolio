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
import './RoutesVibesCase.css'

export const ROUTES_VIBES_ID = 'routes-vibes'
export const ROUTES_VIBES_TITLE_ID = 'routes-vibes-title'
export const ROUTES_VIBES_PANEL_HEIGHT = 20340

const COMPETITORS_SHEET =
  'https://docs.google.com/spreadsheets/d/1PlLgAt1sCVpgN64ulpX2h1J2BqWSXKjWdy9E8lpXN4k/edit?gid=0#gid=0'

// координаты в px панели макета «проект - 1440 - пример»; без w/h размер по содержимому.
// initial не даёт унаследовать --w/--h от родителя-карточки
const at = (x: number, y: number, w?: number, h?: number) =>
  ({ '--x': x, '--y': y, '--w': w ?? 'initial', '--h': h ?? 'initial' }) as CSSProperties

const group = (x: number, y: number, w: number, h: number) =>
  ({ '--x': x, '--y': y, '--gw': w, '--gh': h }) as CSSProperties

// позиция внутри группы: пересчитывается в проценты, поэтому группа масштабируется целиком в обеих раскладках
const inGroup = (x: number, y: number, w: number, h: number) =>
  ({ '--cx': x, '--cy': y, '--cw': w, '--ch': h }) as CSSProperties

type MediaProps = {
  x: number
  y: number
  w: number
  h: number
  src: string
  alt?: string
  crop?: CSSProperties
  // растянуть картинку на рамку без кропа — так она вставлена в макете
  stretch?: boolean
}

function Media({ x, y, w, h, src, alt = '', crop, stretch = false }: MediaProps) {
  return (
    <div className={stretch ? 'cs-abs cs-media cs-fill cs-fill--stretch' : 'cs-abs cs-media cs-fill'} style={at(x, y, w, h)}>
      <img src={src} alt={alt} loading="lazy" decoding="async" style={crop} />
    </div>
  )
}

function Note({ x = 677, y, w = 466, children }: { x?: number; y: number; w?: number; children: ReactNode }) {
  return (
    <div className="cs-abs cs-note cs-body" style={at(x, y, w)}>
      <p>{children}</p>
    </div>
  )
}

const br = <br className="cs-br" />

const cards = [
  {
    x: 50,
    y: 2615,
    title: 'Подробная информация снижает неопределённость',
    text: <>Наиболее убедительно работают сайты, где пользователь может заранее изучить программу, формат поездки, условия и особенности направления. Поэтому в Routes &amp; Vibes я решила подробно раскрывать каждое путешествие на отдельной странице, а не ограничиваться короткой карточкой и фотографиями.</>,
  },
  {
    x: 602,
    y: 2615,
    title: 'Эмоциональная подача работает вместе с конкретикой',
    text: <>Все проекты активно используют фотографии и визуальный контент, но сильнее воспринимаются те, где атмосфера путешествия сопровождается понятной и хорошо структурированной информацией. Это стало одним из основных принципов Routes &amp; Vibes: сначала заинтересовать направлением, а затем дать пользователю достаточно информации для решения.</>,
  },
  {
    x: 50,
    y: 2920,
    title: 'Структура должна поддерживать путь пользователя',
    text: <>На исследованных сайтах ключевые разделы доступны напрямую из основной навигации, а информацию о конкретном направлении можно найти без сложного поиска. Поэтому я вынесла туры и серф-кемпы в отдельные разделы и построила структуру вокруг перехода <b>от выбора формата → к направлению → к подробной программе → к заявке</b>.</>,
  },
  {
    x: 602,
    y: 2920,
    title: 'Доверие формируется не одним элементом',
    text: <>Доверие складывается из нескольких сигналов: информации о компании, отзывов, блога и демонстрации опыта. Поэтому в Routes &amp; Vibes я предусмотрела отдельную страницу о компании, отзывы и контент, который помогает пользователю {br}получить больше контекста до отправки заявки.</>,
  },
]

const principles = [
  {
    y: 3726,
    title: 'Сначала заинтересовать',
    text: <>Путешествие — это эмоциональный продукт, поэтому первый контакт с направлением строится вокруг фотографии, крупной типографики и атмосферы места. Задача первого экрана — заинтересовать направлением и мотивировать пользователя продолжить изучение поездки.</>,
  },
  {
    y: 3928,
    title: 'После дать конкретику',
    text: <>Эмоциональная подача быстро сменяется структурированной информацией: особенностями направления, программой, условиями и ответами на частые вопросы. Пользователю не нужно собирать важные детали по разным страницам.</>,
  },
  {
    y: 4108,
    title: 'Дать причины доверять',
    text: <>Перед заявкой пользователю важно понимать, кто организует путешествие и чего ожидать от поездки. Поэтому сайт раскрывает компанию через её историю {br}и опыт, отзывы, блог и дополнительный контент {br}о путешествиях.</>,
  },
  {
    y: 4288,
    title: 'Сделать следующий шаг очевидным',
    text: <>Путь пользователя выстроен от знакомства с форматом и направлением к подробной информации и заявке. Призыв к действию появляется в логичных точках сценария, чтобы после изучения предложения пользователю не приходилось искать способ связаться с компанией.</>,
  },
]

// порядок как в макете — соседние скриншоты перекрываются на доли пикселя
const uiKit = [
  { src: kit1052, x: 0, y: 0, w: 206.989, h: 133.815 },
  { src: kit1053, x: 0.02, y: 159.33, w: 206.779, h: 118.787 },
  { src: kit1054, x: 221.82, y: 0, w: 206.806, h: 382.427 },
  { src: kit1055, x: 0.02, y: 303.5, w: 206.843, h: 221.498 },
  { src: kit1059, x: 443.63, y: 0, w: 205.747, h: 292.378 },
  { src: kit1060, x: 443.61, y: 292.31, w: 205.677, h: 196.068 },
  { src: kit1061, x: 443.65, y: 486.83, w: 205.743, h: 165.323 },
  { src: kit1063, x: 664.6, y: 380.98, w: 205.724, h: 331.669 },
  { src: kit1062, x: 664.57, y: 0, w: 205.724, h: 381.126 },
  { src: kit1064, x: 664.64, y: 712.52, w: 205.717, h: 324.478 },
  { src: kit1057, x: 885.75, y: 0, w: 207.25, h: 566.307 },
]

export default function RoutesVibesCase() {
  return (
    <>
      <header className="cs-head">
        <h2 id={ROUTES_VIBES_TITLE_ID} className="cs-title">
          <span aria-hidden="true" className="cs-abs cs-paren" style={at(327, 80)}>
            <span>
              <span>(</span>
            </span>
          </span>
          <span className="cs-abs cs-trim cs-title-text" style={at(402.41, 108)}>
            Routes &amp; Vibes
          </span>
          <span aria-hidden="true" className="cs-abs cs-paren" style={at(805, 81)}>
            <span>
              <span>)</span>
            </span>
          </span>
        </h2>
        <p className="cs-abs cs-body cs-intro" style={at(267, 206, 673)}>
          Routes &amp; Vibes – туристическая компания, которая создаёт приключения: от групповых туров и индивидуальных
          путешествий по Камчатке, Сахалину и Байкалу до поездок в живописные уголки Норвегии и Швейцарии. А ещё они
          организуют серф-кемпы в этих локациях – для тех, кто хочет ловить не только впечатления, но и волны.
        </p>
      </header>

      <section className="cs-sec">
        <h3 className="cs-abs cs-trim cs-h" style={at(50, 394)}>
          о проекте
        </h3>
        <div className="cs-abs cs-body" style={at(681, 394, 462)}>
          <p>
            Routes &amp; Vibes — учебный концепт многостраничного сайта travel-компании, которая организует авторские
            туры и серф-кемпы в разных странах.
          </p>
          <p>
            Моей задачей было совместить эмоциональную подачу путешествий с понятной структурой: помочь пользователю
            вдохновиться направлением, быстро разобраться в программе и условиях и перейти к заявке.
          </p>
        </div>
        <div className="cs-group" style={group(50, 620, 1093, 596)}>
          <div aria-hidden="true" className="cs-in cs-deco" style={inGroup(391.53, 19.47, 373.612, 205.657)}>
            <span style={{ width: '93.933%', height: '68.531%' }}>
              <img src={aboutDeco1} alt="" style={{ top: '-0.26%', left: 0, width: '100.14%', height: '100.64%' }} />
            </span>
          </div>
          <div aria-hidden="true" className="cs-in cs-deco" style={inGroup(401.04, 94.74, 338.035, 214.762)}>
            <span style={{ width: '92.016%', height: '73.629%' }}>
              <img src={aboutDeco2} alt="" style={{ top: '-0.23%', left: 0, width: '100.13%', height: '100.57%' }} />
            </span>
          </div>
          <div className="cs-in cs-fill cs-fill--stretch" style={inGroup(0, -0.36, 432.813, 596.581)}>
            <img src={aboutPhoto} alt="Фотографии путешествий в стиле travel journal" loading="lazy" decoding="async" />
          </div>
          <div className="cs-in cs-fill" style={inGroup(443, 220, 650, 376)}>
            <img src={aboutMacbook} alt="Главная страница Routes & Vibes на ноутбуке" loading="lazy" decoding="async" />
          </div>
        </div>
      </section>

      <section className="cs-sec">
        <h3 className="cs-abs cs-trim cs-h" style={at(50, 1316)}>
          задача
        </h3>
        <div className="cs-abs cs-body" style={at(681, 1316, 462)}>
          <p>
            Сайт travel-компании должен не только создавать желание отправиться в путешествие, но и помогать
            пользователю принять решение: понять формат поездки, изучить направление и программу, разобраться в условиях
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
        <div className="cs-group" style={group(50, 1674, 1093, 571)}>
          <div className="cs-in cs-fill" style={inGroup(0, 0, 1093, 571)}>
            <img src={taskBg} alt="" loading="lazy" decoding="async" />
          </div>
          <div className="cs-in cs-fill" style={inGroup(781.4, 36.05, 242.536, 499.189)}>
            <img src={taskPhone3} alt="Мобильная версия Routes & Vibes" loading="lazy" decoding="async" />
          </div>
          <div className="cs-in cs-fill" style={inGroup(419.47, 35.91, 242.536, 499.189)}>
            <img src={taskPhone2} alt="Мобильная версия Routes & Vibes" loading="lazy" decoding="async" />
          </div>
          <div className="cs-in cs-fill" style={inGroup(69.06, 35.76, 242.536, 499.189)}>
            <img src={taskPhone1} alt="Мобильная версия Routes & Vibes" loading="lazy" decoding="async" />
          </div>
        </div>
      </section>

      <section className="cs-sec">
        <h3 className="cs-abs cs-trim cs-h cs-h--tight" style={at(50, 2345, 427)}>
          исследование конкурентов
        </h3>
        <div className="cs-abs cs-body" style={at(681, 2345, 462)}>
          <p>
            Я проанализировала сайты travel-компаний и серф-кемпов, чтобы понять, какая информация помогает
            пользователю разобраться в предложении, что формирует {br}доверие и как устроен путь от первого знакомства с
            направлением до заявки.
          </p>
          <p>
            В сравнении я смотрела на структуру сайта, полноту информации о турах, навигацию, способы подтверждения
            экспертизы, формы обратной связи, контент {br}и визуальную подачу.
          </p>
        </div>
        <div className="cs-cards">
          {cards.map(({ x, y, title, text }) => (
            <article key={title} className="cs-abs cs-card" style={at(x, y, 541, 295)}>
              <h4 className="cs-abs cs-trim cs-card-title" style={at(30, 30, 481)}>
                {title}
              </h4>
              <p className="cs-abs cs-body" style={at(30, 108, 481)}>
                {text}
              </p>
            </article>
          ))}
        </div>
        <p className="cs-abs cs-lead" style={at(681, 3265, 462)}>
          Что это дало проекту:
        </p>
        <div className="cs-abs cs-body" style={at(681, 3310, 462)}>
          <p>
            Исследование помогло определить структуру {br}Routes &amp; Vibes: разделить туры и серф-кемпы, подробно
            раскрывать каждое направление, добавить блоки доверия, FAQ и выстроить понятный путь от выбора поездки до
            заявки.
          </p>
          <p>
            Полный конкурентный анализ можно посмотреть {br}по{' '}
            <a className="cs-link" href={COMPETITORS_SHEET} target="_blank" rel="noreferrer">
              ссылке
            </a>
            .
          </p>
        </div>
      </section>

      <section className="cs-sec">
        <h3 className="cs-abs cs-trim cs-h cs-h--tight" style={at(50, 3586, 473)}>
          принципы проектирования
        </h3>
        <p className="cs-abs cs-body" style={at(681, 3586, 462)}>
          Выводы конкурентного анализа я перевела в четыре принципа, которые определили структуру и подачу
          Routes &amp; Vibes. Они помогли сохранить эмоциональный характер travel-продукта, не жертвуя понятностью и
          количеством информации, необходимым перед заявкой.
        </p>
        {principles.map(({ y, title, text }) => (
          <div key={title} className="cs-principle">
            <h4 className="cs-abs cs-principle-title" style={at(681, y)}>
              {title}
            </h4>
            <div className="cs-abs cs-note cs-note--principle cs-body" style={at(674, y + 45, 469)}>
              <p>{text}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="cs-sec">
        <h3 className="cs-abs cs-trim cs-h cs-h--tight" style={at(50, 4548, 473)}>
          структура сайта
        </h3>
        <p className="cs-abs cs-body" style={at(681, 4548, 462)}>
          Я разделила контент по двум основным продуктовым направлениям — авторским турам и серф-кемпам. В отдельные
          разделы вынесла информацию {br}о компании и блог, которые работают на доверие и помогают пользователю
          подробнее познакомиться с форматом путешествий.
        </p>
        <Media x={50} y={4730} w={1093} h={540} src={structure} alt="Схема структуры сайта Routes & Vibes" />
      </section>

      <section className="cs-sec">
        <h3 className="cs-abs cs-trim cs-h cs-h--tight" style={at(50, 5370, 473)}>
          визуальная концепция
        </h3>
        <div className="cs-abs cs-body" style={at(681, 5370, 462)}>
          <p>
            Визуальный язык Routes &amp; Vibes построен вокруг образа travel journal — личного дневника, собранного из
            фотографий, заметок и впечатлений из поездки.
          </p>
          <p>
            Я объединила выразительную типографику, живую {br}travel-фотографию, рукописные акценты и свободную
            композицию, чтобы сайт передавал ощущение приключения, но сохранял понятную визуальную иерархию.
          </p>
        </div>
        <div className="cs-pair">
          <Media x={50} y={5596.6} w={544.098} h={604.4} src={conceptLeft} alt="Мудборд визуальной концепции" />
          <Media x={600.1} y={5596} w={542.897} h={605} src={conceptRight} alt="Фрагмент визуальной концепции" stretch />
        </div>
      </section>

      <section className="cs-sec">
        <h3 className="cs-abs cs-trim cs-h cs-h--solution" style={at(233, 6301, 727)}>
          решение 01 - знакомство с направлениями
        </h3>
        <Media x={50} y={6452} w={583} h={1231} src={solution1} alt="Каталог направлений Routes & Vibes" />
        <Note y={6620}>
          Каталог направлений я построила не как стандартную сетку одинаковых карточек, а как свободную визуальную
          композицию. Так пользователь сначала знакомится с атмосферой разных мест, а потом выбирает направление для
          более подробного изучения.
        </Note>
        <Note y={6951}>
          Фотографии становятся главным элементом выбора и помогают быстро почувствовать характер каждого места ещё до
          перехода на внутреннюю страницу.
        </Note>
        <Note y={7259}>
          После знакомства с направлениями пользователь может {br}перейти к подробной странице выбранной поездки или
          связаться с компанией.
        </Note>
      </section>

      <section className="cs-sec">
        <h3 className="cs-abs cs-trim cs-h cs-h--solution" style={at(233, 7783, 727)}>
          решение 02- страница серф-кемпа
        </h3>
        <Media x={50} y={7934} w={583} h={525.63} src={solution2Img1} alt="Первый экран страницы серф-кемпа" />
        <Note y={8164}>
          Страница серф-кемпа выстроена от эмоционального знакомства с направлением к информации, необходимой для
          решения: пользователь изучает формат поездки и программу, получает ответы на основные вопросы и может сразу
          перейти к заявке.
        </Note>
        <Media x={50} y={8459.63} w={583} h={525.989} src={solution2Img2} alt="Галерея серф-кемпа" />
        <Note y={8574}>
          Галерея и блок с предложением кемпа раскрывают поездку через реальные ситуации и основные составляющие опыта.
          Пользователь получает более полное представление не только о месте, но {br}и о том, как будет проходить
          путешествие.
        </Note>
        <Media x={50} y={8985.62} w={583} h={525.272} src={solution2Img3} alt="Программа серф-кемпа по дням" />
        <Note y={9098}>
          Программа разбита по дням, чтобы пользователь мог быстро увидеть структуру поездки, оценить её насыщенность и
          понять, подходит ли ему такой {br}формат отдыха.
        </Note>
        <Media x={50} y={9510.89} w={583} h={525.989} src={solution2Img4} alt="Блок FAQ серф-кемпа" />
        <Note y={9644}>
          FAQ собирает основные организационные вопросы в одном месте и снижает количество неизвестных перед заявкой.
          После этого пользователь может сразу связаться с компанией, не переходя на отдельную страницу контактов.
        </Note>
        <Media
          x={50}
          y={10036.85}
          w={583}
          h={346.168}
          src={solution2Img5}
          alt="Форма заявки на серф-кемп"
          crop={{ height: '151.91%', top: '-0.03%' }}
        />
      </section>

      <section className="cs-sec">
        <h3 className="cs-abs cs-trim cs-h cs-h--solution" style={at(233, 10483, 727)}>
          решение 03 - доверие к компании
        </h3>
        <Media x={50} y={10634} w={583} h={519.07} src={solution3Img1} alt="Первый экран страницы о компании" />
        <Note y={10764}>
          При выборе организованного путешествия пользователю важно понимать не только куда он поедет, но и кому
          доверит организацию поездки. Поэтому страницу о компании я построила вокруг людей, опыта Routes &amp; Vibes и
          подхода к путешествиям.
        </Note>
        <Media x={50} y={11153.07} w={583} h={519.07} src={solution3Img2} alt="Блок с создателями компании" />
        <Note y={11348} w={476}>
          Блок с создателями компании делает бренд более персональным: пользователь видит людей, которые стоят за
          Routes &amp; Vibes и отвечают за организацию путешествий.
        </Note>
        <Media x={50} y={11672.14} w={583} h={519.07} src={solution3Img3} alt="Показатели опыта компании" />
        <Note y={11999}>
          Опыт компании вынесен в несколько конкретных показателей, чтобы ключевые факты можно было {br}считать быстрее.
        </Note>
        <Media x={50} y={12191.21} w={583} h={518.711} src={solution3Img4} alt="Блок о подходе к путешествиям" />
        <Media
          x={50}
          y={12709.73}
          w={583}
          h={340.746}
          src={solution3Img5}
          alt="Отзывы участников поездок"
          crop={{ height: '152.45%', top: '0.05%' }}
        />
        <Note y={12845}>
          Отзывы добавляют к рассказу взгляд участников поездок и дают пользователю дополнительный контекст перед
          выбором путешествия.
        </Note>
      </section>

      <section className="cs-sec">
        <h3 className="cs-abs cs-trim cs-h cs-h--solution" style={at(233, 13150, 727)}>
          решение 04 - контент вокруг путешествия
        </h3>
        <Media
          x={50}
          y={13301}
          w={583}
          h={1045}
          src={solution4}
          alt="Страницы блога Routes & Vibes"
          crop={{ height: '117.23%', top: '-0.02%' }}
        />
        <Note y={13513}>
          Блог помогает пользователю изучать формат путешествий ещё до выбора тура: подготовку к серф-кемпу, питание,
          уровень подготовки и особенности разных направлений.
        </Note>
        <Note x={687} y={13942}>
          Из статей пользователь может возвращаться к связанным направлениям и серф-кемпам, продолжая знакомство с
          предложениями Routes &amp; Vibes.
        </Note>
      </section>

      <section className="cs-sec">
        <h3 className="cs-abs cs-trim cs-h cs-h--84" style={at(50, 14446, 473)}>
          ui kit
        </h3>
        <p className="cs-abs cs-body" style={at(681, 14446, 462)}>
          Несмотря на свободную композицию, интерфейс Routes &amp; Vibes построен на системе повторяющихся элементов. Я
          унифицировала типографику, цвета, навигацию, кнопки, поля ввода и карточки, чтобы сохранять визуальную
          целостность между разными типами страниц и при этом оставлять достаточно свободы для выразительной {br}подачи
          контента.
        </p>
        <div
          role="img"
          aria-label="UI Kit Routes & Vibes: типографика, цвета, навигация, кнопки, поля ввода и карточки"
          className="cs-group"
          style={group(50, 14650, 1093, 1037)}
        >
          {uiKit.map(({ src, x, y, w, h }) => (
            <div key={src} className="cs-in cs-fill cs-kit" style={inGroup(x, y, w, h)}>
              <img src={src} alt="" loading="lazy" decoding="async" />
            </div>
          ))}
        </div>
      </section>

      <section className="cs-sec">
        <h3 className="cs-abs cs-trim cs-h cs-h--84" style={at(50, 15787, 473)}>
          адаптивы
        </h3>
        <div className="cs-abs cs-body" style={at(681, 15787, 462)}>
          <p>
            В desktop-версии Routes &amp; Vibes визуальный характер во многом строится на асимметрии, крупной
            типографике и свободном расположении фотографий. На мобильных экранах я сохранила этот характер, но упростила
            композицию и перестроила контент в более последовательный вертикальный сценарий.
          </p>
          <p>
            При адаптации приоритет смещается с декоративного расположения элементов на читаемость и порядок информации:
            ключевой контент остаётся на первом плане, интерактивные элементы становятся удобнее для небольшого экрана, а
            визуальные акценты сохраняют узнаваемость бренда.
          </p>
        </div>
        <div className="cs-group" style={group(50, 16123, 1093, 1427)}>
          <div className="cs-in cs-fill cs-fill--dim" style={inGroup(0, 0, 1093, 635.757)}>
            <img src={adaptiveBg} alt="" loading="lazy" decoding="async" />
          </div>
          <div className="cs-in cs-fill cs-ipad" style={inGroup(480.47, 64.79, 387.64, 506.774)}>
            <img
              src={adaptiveIpad}
              alt="Планшетная версия Routes & Vibes"
              loading="lazy"
              decoding="async"
              style={{ width: '299.73%', height: '152.86%', left: '-89.88%', top: '-36.4%' }}
            />
          </div>
          <div className="cs-in cs-fill cs-softlight" style={inGroup(139.93, 487.84, 257.636, 295.366)}>
            <img src={adaptiveCardBg} alt="" loading="lazy" decoding="async" />
          </div>
          <div className="cs-in cs-fill" style={inGroup(152.83, 500.74, 231.829, 239.474)}>
            <img src={adaptiveCardImg} alt="" loading="lazy" decoding="async" />
          </div>
          <div className="cs-in cs-fill" style={inGroup(115.32, 959.86, 226.802, 467.145)}>
            <img src={adaptivePhone9} alt="Мобильная версия Routes & Vibes" loading="lazy" decoding="async" />
          </div>
          <div className="cs-in cs-fill" style={inGroup(749.51, 695.75, 226.802, 467.145)}>
            <img src={adaptivePhone10} alt="Мобильная версия Routes & Vibes" loading="lazy" decoding="async" />
          </div>
          <div className="cs-in cs-fill" style={inGroup(432.41, 827.82, 226.802, 467.145)}>
            <img src={adaptivePhone8} alt="Мобильная версия Routes & Vibes" loading="lazy" decoding="async" />
          </div>
        </div>
        <Media x={50} y={17600} w={1093} h={653} src={adaptiveIpadPro} alt="Routes & Vibes на iPad Pro" />
      </section>

      <section className="cs-sec">
        <h3 className="cs-abs cs-trim cs-h cs-h--84" style={at(50, 18370, 473)}>
          результат
        </h3>
        <div className="cs-abs cs-body" style={at(681, 18353, 462)}>
          <p>
            В результате я разработала многостраничный сайт Routes &amp; Vibes — от структуры и пользовательских
            сценариев до визуальной системы, адаптивных версий и UI Kit.
          </p>
          <p>
            Сайт помогает пройти путь от первого знакомства с форматом путешествия до подробного изучения направления и
            заявки, сохраняя при этом эмоциональный и узнаваемый характер travel-продукта.
          </p>
        </div>
        <div className="cs-pair">
          <Media x={50} y={18579} w={544.101} h={605} src={resultLeft} alt="Фрагмент сайта Routes & Vibes" />
          <Media x={600.1} y={18579} w={542.9} h={605} src={resultRight} alt="Фрагмент сайта Routes & Vibes" />
        </div>
        <div className="cs-group cs-bleed" style={group(0, 19149, 1193, 838)}>
          <div className="cs-in cs-fill" style={inGroup(0, 0, 1193, 838)}>
            <img src={resultBg} alt="" loading="lazy" decoding="async" />
          </div>
          <div className="cs-in cs-fill" style={inGroup(275, 155, 642, 636)}>
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

      <p className="cs-abs cs-trim cs-thanks" style={at(288, 20164)}>
        спасибо за просмотр!
      </p>
    </>
  )
}
