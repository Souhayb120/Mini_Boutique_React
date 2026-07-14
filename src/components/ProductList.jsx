import { useState } from "react";
import CardItem from "./CardItem";
const ProductList = ({ onAddToCart, productsList}) => {
  const [category, setCategory] = useState("ALL");

  const filterByCategory = () => {
    const filterC = category === "ALL";
    if (!filterC) {
      return productsList.filter((i) => i.category === category);
    }

    return productsList;
  };

  console.log(filterByCategory);

  return (
    <>
      <div className="container">
        <div className="category">
             <button
            onClick={() => {
              setCategory("ALL");
            }}
          >
            ALL
          </button>
          <button
            onClick={() => {
              setCategory("Smartphones");
            }}
          >
            Smartphones
          </button>
          <button
            onClick={() => {
              setCategory("Audio");
            }}
          >
            Audio
          </button>
          <button
            onClick={() => {
              setCategory("Accessoires");
            }}
          >
            Accessoires
          </button>
          <button
            onClick={() => {
              setCategory("Moniteurs");
            }}
          >
            Moniteurs
          </button>
          <button
            onClick={() => {
              setCategory("Ordinateurs");
            }}
          >
            Ordinateurs
          </button>
        </div>
        <div className="product_container">
          {filterByCategory().map((p) => (
            <CardItem key={p.id} product={p} onAddToCart={onAddToCart} />
          ))}
        </div>
      </div>
    </>
  );
};
export default ProductList;
