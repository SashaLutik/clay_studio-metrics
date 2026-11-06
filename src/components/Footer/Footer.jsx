import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer__logo-container">
            <Link
              to="/"
              className="footer__logo-link"
              aria-label="Главная страница"
            >
              <img
                src="/assets/images/logo/logo-footer.svg"
                alt=""
                width="118px"
                height="26px"
              />
            </Link>
            <small>
              Создаём уникальные предметы из керамики, вдохновлённые природой,
              простыми формами и красотой повседневных моментов
            </small>
          </div>
          <div className="footer-content">
            <p className="footer-content__title title-h4">Навигация</p>
            <Link to="/" className="footer-content__links">
              Главная
            </Link>
            <Link to="/catalog" className="footer-content__links">
              Каталог
            </Link>
            <Link to="/about" className="footer-content__links">
              О мастерской
            </Link>
          </div>
          <div className="footer-content">
            <p className="footer-content__title title-h4">Покупателям</p>
            <a href="#" className="footer-content__links">
              Уход за керамикой
            </a>
            <a href="#" className="footer-content__links">
              Доставка
            </a>
            <a href="#" className="footer-content__links">
              Индивидуальные заказы
            </a>
          </div>
          <div className="footer-content">
            <p className="footer-content__title title-h4">Контакты</p>
            <a href="#" className="footer-content__links">
              hello@claystudio.com
            </a>
            <div className="footer-content__socials">
              <a
                href="#"
                className="footer-content__socials-link"
                aria-label="vk"
              >
                <svg className="social-icon" width="26" height="26">
                  <use href="/assets/images/icons/socials-sprite.svg#icon-vk"></use>
                </svg>
              </a>
              <a
                href="#"
                className="footer-content__socials-link"
                aria-label="instagram"
              >
                <svg className="social-icon" width="26" height="26">
                  <use href="/assets/images/icons/socials-sprite.svg#icon-inst"></use>
                </svg>
              </a>
              <a
                href="#"
                className="footer-content__socials-link"
                aria-label="telegram"
              >
                <svg className="social-icon" width="26" height="26">
                  <use href="/assets/images/icons/socials-sprite.svg#icon-tg"></use>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <small>© 2026 Clay Studio</small>
          <small>Создано с любовью ♡</small>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
