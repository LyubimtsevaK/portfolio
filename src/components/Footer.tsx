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
          <li>телеграм: @lyubimtseva_k</li>
          <li>телефон: +7 (964) 986 17 16</li>
          <li>почта: lyubimtseva.kr@mail.ru</li>
          <li>
            <a href="https://www.behance.net/lyubimtseva" target="_blank" rel="noreferrer" className="footer-link">
              <ArrowIcon className="footer-arrow" />
              behance
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
