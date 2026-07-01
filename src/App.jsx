import { useState } from "react";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import productsData from "./components/productsJson.json";
import "./index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  const [products, setProducts] = useState(productsData);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prevCart, { ...product, qty: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleDelete = (product) => {
    if (window.confirm(`Supprimer "${product.name}" ?`)) {
      setProducts((prev) => prev.filter((p) => p.id !== product.id));
    }
  };

  const handleIncrease = (product) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const handleDecrease = (product) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === product.id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const handleRemoveFromCart = (product) => {
    setCart((prev) => prev.filter((item) => item.id !== product.id));
  };

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div>
      <Header cartCount={cartCount} />

      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <div
          style={{
            padding: "2rem",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          {products.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              onAddToCart={handleAddToCart}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>

      <Footer />

      <button className="cart-fab" onClick={() => setIsCartOpen(true)}>
        🛒
        {cartCount > 0 && <span className="cart-fab__badge">{cartCount}</span>}
      </button>

      <Cart
        cart={cart}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onRemove={handleRemoveFromCart}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
      />
    </div>
  );
}

export default App;