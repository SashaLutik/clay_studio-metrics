import "./Home.css";
import { Link } from "react-router-dom";
import products from "../../data/productData.json";
import ProductCard from "../../components/ProductCard/ProductCard";
function Home() {
  return (
    <>
      <section className="hero home-hero">
        <img
          src="/assets/images/bg/hero_home_bg.webp"
          alt=""
          className="hero__bg"
          fetchPriority="high"
        />
        <div className="container">
          <small className="subheading">Handmade ceramics</small>
          <h1>Простые вещи. Особенные моменты</h1>
          <div className="hero__inner">
            <p className="hero__desc">
              Создаём керамику вручную, чтобы наполнить повседневные моменты
              теплом и красотой
            </p>
            <Link to="/catalog" className="button button--with_arrow">
              Смотреть коллекцию <span>→</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="about">
        <div className="container">
          <h2 className="section-title">
            Керамика, созданная с любовью к деталям
          </h2>
          <div className="about__inner">
            <ul className="about__list">
              <li className="about__item">
                <p className="title-h4">Создано вручную</p>
                <p>
                  Каждое изделие проходит путь от кусочка глины до готового
                  предмета, сохраняя тепло рук мастера.
                </p>
              </li>
              <li className="about__item">
                <p className="title-h4">Вдохновлено природой</p>
                <p>
                  Натуральные оттенки, органичные формы и фактуры, которые
                  хочется рассматривать.
                </p>
              </li>
              <li className="about__item">
                <p className="title-h4">Для повседневных моментов</p>
                <p>
                  Создаём вещи, которые становятся частью уютных завтраков,
                  неспешных вечеров и маленьких радостей.
                </p>
              </li>
            </ul>
            <img
              src="/assets/images/about_img.webp"
              alt="dec"
              width="408px"
              height="290px"
            />
          </div>
        </div>
      </section>
      <section className="categories">
        <div className="container">
          <h2 className="section-title">Найди своё особенное</h2>
          <div className="categories__list">
            <Link to="/catalog" className="categories__link">
              <div className="categories-container__img">
                <img
                  src="/assets/images/categories/category_1-img.webp"
                  alt="Вазы"
                  width="352px"
                  height="340px"
                />
              </div>
              <p className="title-h4">Вазы</p>
            </Link>
            <Link to="/catalog" className="categories__link">
              <div className="categories-container__img">
                <img
                  src="/assets/images/categories/category_2-img.webp"
                  alt="Чашки и кружки"
                  width="352px"
                  height="340px"
                />
              </div>
              <p className="title-h4">Чашки и кружки</p>
            </Link>
            <Link to="/catalog" className="categories__link">
              <div className="categories-container__img">
                <img
                  src="/assets/images/categories/category_3-img.webp"
                  alt="Тарелки"
                  width="352px"
                  height="340px"
                />
              </div>
              <p className="title-h4">Тарелки</p>
            </Link>
          </div>
        </div>
      </section>
      <section className="popular-products">
        <div className="container">
          <h2 className="section-title">Популярные изделия</h2>
          <div className="popular-products__list">
            {products.slice(0, 3).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      <section className="FAQ">
        <div className="container">
          <h2 className="section-title">О керамике и не только</h2>
          <div className="FAQ-list">
            <details className="FAQ__detail" open name="faq">
              <summary className="FAQ__summary">
                Все изделия создаются вручную?
              </summary>
              <p className="FAQ__answer">
                Наши средства разработаны для комфортного ежедневного ухода.
                Однако реакция кожи индивидуальна. Рекомендуем изучать состав
                конкретного продукта и перед первым использованием проводить
                тест на небольшом участке кожи.
              </p>
            </details>
            <details className="FAQ__detail" name="faq">
              <summary className="FAQ__summary">
                Могут ли изделия немного отличаться друг от друга?
              </summary>
              <p className="FAQ__answer">
                Да, и в этом заключается особенность ручной керамики. Небольшие
                различия в форме, оттенке или текстуре — естественная часть
                процесса создания. Именно они делают каждое изделие уникальным и
                придают ему особый характер.
              </p>
            </details>
            <details className="FAQ__detail" name="faq">
              <summary className="FAQ__summary">
                Как ухаживать за керамикой?
              </summary>
              <p className="FAQ__answer">
                Мы рекомендуем бережно обращаться с изделиями, избегать резких
                перепадов температуры и сильных ударов. Для повседневного ухода
                достаточно мягкой губки и тёплой воды. Возможность использования
                посудомоечной машины и микроволновой печи зависит от конкретного
                изделия — эту информацию лучше уточнять в его описании.
              </p>
            </details>
            <details className="FAQ__detail" name="faq">
              <summary className="FAQ__summary">
                Можно ли заказать изделие по индивидуальному запросу?
              </summary>
              <p className="FAQ__answer">
                Да, мы открыты к индивидуальным идеям! Вы можете рассказать нам
                о желаемой форме, цвете или размере изделия, а мы обсудим
                возможности его создания. Для оформления индивидуального заказа
                свяжитесь с нами через страницу «Контакты».
              </p>
            </details>
          </div>
        </div>
      </section>
      <section className="CTA home-CTA">
        <div className="container">
          <div className="CTA__inner">
            <h2 className="section-title">Добавь немного тепла в свой дом</h2>
            <p className="section-text">
              Открой коллекцию Clay Studio и найди изделия, которые станут
              частью твоих особенных моментов
            </p>
            <Link to="/catalog" className="button button--with_arrow">
              Перейти в каталог <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
export default Home;
