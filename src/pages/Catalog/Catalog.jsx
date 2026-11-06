import { useState } from "react";
import { Link } from "react-router-dom";
import products from "../../data/productData.json";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./Catalog.css";

const categories = [
  { value: "all", label: "Все категории" },
  { value: "vase", label: "Вазы" },
  { value: "cup", label: "Чашки и кружки" },
  { value: "plate", label: "Тарелки" },
];

function Catalog() {
  const [filter, setFilter] = useState("all");
  const filtered =
    filter === "all" ? products : products.filter((p) => p.category === filter);
  return (
    <>
      <section className="hero catalog-hero">
        <img
          src="/assets/images/bg/hero_catalog_bg.webp"
          alt=""
          className="hero__bg"
          fetchPriority="high"
        />
        <div className="container">
          <small className="subheading">Our collection</small>
          <h1>
            Коллекция <br /> Clay Studio
          </h1>
          <div className="hero__inner">
            <p className="hero__desc">
              Предметы, которые делают обычные моменты особенными
            </p>
          </div>
        </div>
      </section>
      <section className="catalog">
        <div className="container">
          <div className="fiters">
            <h2 className="section-title">Фильтры</h2>
            <div className="filters__list">
              {categories.map((cat) => (
                <label key={cat.value} className="filter-option">
                  <input
                    type="radio"
                    name="category"
                    value={cat.value}
                    checked={filter === cat.value}
                    onChange={(e) => setFilter(e.target.value)}
                  />
                  <span>{cat.label}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="cards-grid">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
export default Catalog;
