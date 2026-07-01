import { useState } from "react";
import ProductCard from "./ProductCard";
import "../index.css";

const ProductList = ({ initialProducts }) => {
  const [products, setProducts] = useState(initialProducts);
  const [cart, setCart] = useState([]);

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

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={handleAddToCart}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default ProductList;