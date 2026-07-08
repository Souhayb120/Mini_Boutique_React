import { useState } from "react";
import ProductCard from "./ProductCard";
import "../index.css";

const ProductList = ({ initialProducts }) => {
  const [products, setProducts] = useState(initialProducts);
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, qty: 1 }];
    });
  };

  const handleDelete = (product) => {
    setProducts((prevProducts) =>
      prevProducts.filter((p) => p.id !== product.id)
    );
  };

  const handleFilterClick = (category) => {
    setSelectedCategory(category);
  };

  const categories = ["all", ...new Set(products.map((p) => p.category))];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="filter-container">
      <div className="category-buttons">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${selectedCategory === cat ? "active" : ""}`}
            onClick={() => handleFilterClick(cat)}
          >
            {cat === "all" ? "Toutes" : cat}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
              onDelete={handleDelete}
            />
          ))
        ) : (
          <div className="notFound">
            <h3>Aucun produit trouvé</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;