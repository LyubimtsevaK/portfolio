import footerCat from '../assets/images/footer-cat.png'
import ArrowIcon from './ArrowIcon'
import './stage.css'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="stage-section footer">
      <div className="stage footer-stage">
        <h2 className="abs txt trim footer-heading">контакты:</h2>

        <ul className="abs footer-list">
          <li>
            телеграм:{' '}
            <a
              href="https://t.me/lyubimtseva_k"
              target="_blank"
              rel="noreferrer"
              className="footer-contact-link"
            >
              @lyubimtseva_k
            </a>
          </li>
          <li>
            телефон: <a href="tel:+79649861716" className="footer-contact-link">+7 (964) 986 17 16</a>
          </li>
          <li>
            почта: <a href="mailto:lyubimtseva.kr@mail.ru" className="footer-contact-link">lyubimtseva.kr@mail.ru</a>
          </li>
          {/* на <1200px — в одну строку; на десктопе (как в макете) — каждая ссылка отдельной строкой */}
          <li className="footer-links">
            <a href="https://disk.yandex.ru/i/aZXmIsXE41766w" target="_blank" rel="noreferrer" className="footer-link">
              <ArrowIcon className="footer-arrow" />
              резюме
            </a>
            <a href="https://www.behance.net/lyubimtseva" target="_blank" rel="noreferrer" className="footer-link">
              <ArrowIcon className="footer-arrow" />
              behance
            </a>
            <a href="https://ru.pinterest.com/lyubimtseva_/" target="_blank" rel="noreferrer" className="footer-link">
              <ArrowIcon className="footer-arrow" />
              pinterest
            </a>
          </li>
        </ul>

        <p className="abs txt trim footer-thanks">спасибо за просмотр!</p>

        <div className="abs box footer-cat">
          <img src={footerCat} alt="Кот складывает лапки сердечком" />
        </div>
      </div>
    </footer>
  )
}
