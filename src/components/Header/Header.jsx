import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__inner">
            <Link to="/" aria-label="Главная страница">
              <img
                src="/assets/images/logo/logo.svg"
                alt="logo"
                className="header__logo"
                width="118px"
                height="26px"
              />
            </Link>

            <div className={`header__nav-inner ${isMenuOpen ? "is-open" : ""}`}>
              <button
                type="button"
                aria-label="Закрыть меню"
                className="header-close"
                onClick={closeMenu}
              >
                ✕
              </button>
              <nav className="header-nav">
                <ul className="header-nav__list">
                  <li className="header-nav__iten">
                    <Link to="/catalog" className="header-nav__link">
                      Каталог
                    </Link>
                  </li>
                  <li className="header-nav__iten">
                    <Link to="/about" className="header-nav__link">
                      О мастерской
                    </Link>
                  </li>
                  <li className="header-nav__iten">
                    <Link to="/contacts">Контакты</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="header__actions">
              <div className="header-burger" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <Link to="#" aria-label="Корзина">
                <img
                  src="/assets/images/icons/cart-icon.svg"
                  alt="корзина"
                  width="26px"
                  height="26px"
                />
              </Link>
              <Link to="#" aria-label="Войти">
                <img
                  src="/assets/images/icons/user-icon.svg"
                  alt="войти"
                  width="26px"
                  height="26px"
                />
              </Link>
            </div>
          </div>
        </div>
      </header>
      {isMenuOpen && <div className="overlay" onClick={closeMenu}></div>}
    </>
  );
}
export default Header;
