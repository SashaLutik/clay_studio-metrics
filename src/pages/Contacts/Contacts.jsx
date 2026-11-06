import "./Contacts.css"

function Contacts(){
    return (
      <>
        <section className="hero contacts-hero">
          <img
            src="/assets/images/bg/hero_contacts_bg.webp"
            alt=""
            className="hero__bg"
            fetchPriority="high"
          />
          <div className="container">
            <small className="subheading">Get in Touch</small>
            <h1>Давайте знакомиться</h1>
            <div className="hero__inner">
              <p className="hero__desc">
                Есть вопросы о наших изделиях или идея для индивидуального
                заказа? Мы будем рады пообщаться и помочь тебе найти что-то
                особенное
              </p>
            </div>
          </div>
        </section>
        <section className="contacts">
          <div className="container contacts-container">
            <div className="contacts-content">
              <h2 className="section-title">Будем на связи</h2>
              <p className="section-text">
                Мы открыты к вопросам, предложениям и новым идеям
              </p>
              <ul className="contacts-list">
                <li className="contacts-list__item">
                  <img
                    src="/assets/images/icons/contacts-1-icon.svg"
                    alt="ic"
                    width="32px"
                    height="32px"
                  />
                  <div className="contacts-list__text">
                    <p className="title-h4">Электронная почта</p>
                    <p>hello@claystudio.com</p>
                  </div>
                </li>
                <li className="contacts-list__item">
                  <img
                    src="/assets/images/icons/contacts-2-icon.svg"
                    alt="ic"
                    width="32px"
                    height="32px"
                  />
                  <div className="contacts-list__text">
                    <p className="title-h4">Instagram</p>
                    <p>@clay.studio</p>
                  </div>
                </li>
                <li className="contacts-list__item">
                  <img
                    src="/assets/images/icons/contacts-3-icon.svg"
                    alt="ic"
                    width="32px"
                    height="32px"
                  />
                  <div className="contacts-list__text">
                    <p className="title-h4">Время ответа</p>
                    <p>Обычно отвечаем в течение 1–2 рабочих дней</p>
                  </div>
                </li>
              </ul>
              <div className="contacts-questions">
                <p className="title-h4">Остались вопросы? Напиши нам</p>
                <p>Заполни форму, и мы свяжемся с тобой.</p>
              </div>
            </div>
            <div className="contacts-form">
              <form className="form">
                <label htmlFor="form-name">Имя</label>
                <input
                  className="input-form"
                  type="text"
                  name="name"
                  id="form-name"
                  placeholder="Как к тебе обращаться?"
                  minLength="2"
                  required
                />
                <label htmlFor="form-email">Почта</label>
                <input
                  className="input-form"
                  type="email"
                  name="email"
                  id="form-email"
                  placeholder="name@example.com"
                  required
                />
                <label htmlFor="form-message">Сообщение</label>
                <textarea
                  className="input-form"
                  name="message"
                  id="form-message"
                  placeholder="Расскажи, чем мы можем помочь"
                  required
                ></textarea>
                <button type="submit" className="button button--theme_light">
                  Отправить сообщение
                </button>
              </form>
            </div>
          </div>
        </section>
      </>
    );
}
export default Contacts