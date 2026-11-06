import { useParams, Link } from "react-router-dom";
import products from "../../data/productData.json";
import "./ProductPage.css";

function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div
        className="container"
        style={{ padding: "100px 0", textAlign: "center" }}
      >
        <h2>Товар не найден</h2>
        <Link to="/catalog" className="button button--theme_light">
          Вернуться в каталог
        </Link>
      </div>
    );
  }
  return (
    <>
      <section className="main-content">
        <div className="container main-content-container">
          <div className="main-content__image-container">
            <img
              src={product.image}
              alt={product.name}
              width="432px"
              height="368px"
            />
          </div>
          <div className="main-content__inner">
            <h2 className="section-title">{product.name}</h2>
            <p>{product.shortDesc}</p>
            <p>{product.longDesc}</p>
            <p className="title-h4">
              Цена: {product.price.toLocaleString("ru-RU")} ₽
            </p>
            <small>Есть в наличии</small>
            <a href="#" className="button button--theme_light">
              Добавить в корзину
            </a>
            <a href="#" className="button button--theme_dark">
              Купить
            </a>
          </div>
        </div>
      </section>
      <section className="characteristics">
        <div className="container">
          <h3>Характеристики</h3>
          <ul className="characteristics-list">
            <li className="characteristics-list__item">
              <h4>Материал:</h4>
              <p>{product.material}</p>
            </li>
            <li className="characteristics-list__item">
              <h4>Покрытие:</h4>
              <p>{product.coating}</p>
            </li>
            <li className="characteristics-list__item">
              <h4>Размеры:</h4>
              <p>{product.dimensions}</p>
            </li>
            <li className="characteristics-list__item">
              <h4>Вес:</h4>
              <p>{product.weight}</p>
            </li>
            <li className="characteristics-list__item">
              <h4>Температура обжига:</h4>
              <p>{product.firingTemp}</p>
            </li>
          </ul>
        </div>
      </section>
      <section className="care">
        <div className="container">
          <h3>Уход</h3>
          <ul className="care-list">
            {product.care.map((item, i) => (
              <li key={i} className="care-list__item">
                <h4>{item.title}:</h4>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="important">
        <div className="container">
          <h3>Важно знать о ручной работе</h3>
          <p>
            {product.name} создается вручную в нашей мастерской. В процессе
            лепки и обжига глина «живет» своей жизнью, поэтому форма и цвет
            могут иметь легкие отличия от фото на сайте. Мы считаем это не
            недостатком, а главной ценностью — вы получаете изделие, второго
            экземпляра которого не существует.
          </p>
        </div>
      </section>
    </>
  );
}
export default ProductPage;
