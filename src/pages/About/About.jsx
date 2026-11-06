import "./About.css";
import { Link } from "react-router-dom";
function About() {
  return (
    <>
      <section className="hero about-hero">
        <img
          src="/assets/images/bg/hero_about_bg.webp"
          alt=""
          className="hero__bg"
          fetchPriority="high"
        />
        <div className="container">
          <small className="subheading">About our studio</small>
          <h1>Создаём не просто предметы, а маленькие истории</h1>
          <div className="hero__inner">
            <p className="hero__desc">
              Clay Studio — небольшая мастерская авторской керамики, где любовь
              к натуральным материалам встречается с вниманием к деталям. Мы
              создаём предметы вручную, вкладывая в каждый из них тепло,
              характер и частичку своего вдохновения
            </p>
          </div>
        </div>
      </section>
      <section className="beginning">
        <div className="container beginning-container">
          <div className="beginning-text__content">
            <h2 className="section-title">Всё начинается с маленькой идеи</h2>
            <p>
              Clay Studio появилась из любви к простым вещам, натуральным
              фактурам и предметам, которые делают повседневность немного
              уютнее.
            </p>
            <p>
              Нас вдохновляет сама глина — живой и податливый материал, который
              каждый раз раскрывается по-новому. Нам нравится наблюдать, как из
              небольшого кусочка глины постепенно рождается предмет со своей
              формой и характером.
            </p>
            <p>
              Так появилась идея создавать керамику, которая будет не просто
              украшением интерьера, а частью маленьких повседневных радостей
            </p>
          </div>
          <div className="beginning-container__image">
            <img
              src="/assets/images/beginning_img.webp"
              alt="vase"
              width="482px"
              height="283px"
            />
          </div>
        </div>
      </section>
      <section className="ceramic">
        <div className="container">
          <h2 className="section-title">Как создаётся керамика</h2>
          <ul className="ceramic-list">
            <li className="ceramic-list__item">
              <img
                src="/assets/images/about_us/step-1_img.webp"
                alt="step-1"
                width="120px"
                height="120px"
              />
              <div className="ceramic-list__text-content">
                <p className="title-h4">01. Работа с глиной</p>
                <p>
                  Всё начинается с подготовки материала. Мы придаём глине нужную
                  форму, уделяя внимание пропорциям и каждой детали будущего
                  изделия.
                </p>
              </div>
            </li>
            <li className="ceramic-list__item">
              <img
                src="/assets/images/about_us/step-2_img.webp"
                alt="step-2"
                width="120px"
                height="120px"
              />
              <div className="ceramic-list__text-content">
                <p className="title-h4">02. Формирование и глазурование</p>
                <p>
                  После формирования изделие проходит сушку и подготовку к
                  глазурованию. Именно на этом этапе появляются оттенки и
                  фактуры, которые делают его особенным.
                </p>
              </div>
            </li>
            <li className="ceramic-list__item">
              <img
                src="/assets/images/about_us/step-3_img.webp"
                alt="step-3"
                width="120px"
                height="120px"
              />
              <div className="ceramic-list__text-content">
                <p className="title-h4">03. Обжиг и финальная обработка</p>
                <p>
                  Обжиг помогает керамике приобрести прочность. После него мы
                  проверяем готовое изделие и уделяем внимание последним
                  деталям.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className="details">
        <div className="container">
          <h2 className="section-title">Красота в простоте и деталях</h2>
          <ul className="details-list">
            <li className="details-list__item">
              <img
                src="/assets/images/about_us/detail-1_img.webp"
                alt="detail-1"
                width="300px"
                height="230px"
              />
              <div className="details-list__text-content">
                <p className="title-h4">Индивидуальность</p>
                <p>
                  Мы ценим естественность ручной работы и верим, что небольшие
                  особенности делают каждое изделие неповторимым
                </p>
              </div>
            </li>
            <li className="details-list__item">
              <img
                src="/assets/images/about_us/detail-2_img.webp"
                alt="detail-2"
                width="300px"
                height="230px"
              />
              <div className="details-list__text-content">
                <p className="title-h4">Осознанный подход</p>
                <p>
                  Уделяем внимание материалам, формам и оттенкам, стремясь
                  создавать вещи вне мимолётных тенденций
                </p>
              </div>
            </li>
            <li className="details-list__item">
              <img
                src="/assets/images/about_us/detail-3_img.webp"
                alt="detail-3"
                width="300px"
                height="230px"
              />
              <div className="details-list__text-content">
                <p className="title-h4">Тепло повседневности</p>
                <p>
                  Хотим, чтобы наша керамика радовала не только по особым
                  случаям, но и каждый день
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className="CTA about-CTA">
        <div className="container">
          <h2 className="section-title">
            Каждое изделие имеет свой характер. И в этом его красота
          </h2>
          <Link to="/catalog" className="button button--with_arrow">
            Перейти в каталог <span>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
export default About;
