import "./ProductCard.css"
import { Link } from "react-router-dom";
function ProductCard({product}) {
  return (
    <article className="product">
      <div className="product-container__image">
        <img
          src={product.image}
          alt={product.name}
          width="352px"
          height="300px"
        />
      </div>
      <div className="product__header">
        <p className="title-h4">{product.name}</p>
        <p className="title-h4">{product.price.toLocaleString("ru-RU")} ₽</p>
      </div>
      <small className="product__desc">{product.shortDesc}</small>
      <Link
        to={`/product/${product.id}`}
        className="button button--theme_light"
      >
        Подробнее
      </Link>
    </article>
  );
}
export default ProductCard