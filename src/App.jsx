import { useState } from "react";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import productsData from "./components/productsJson.json";
import "./index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  const [productToDelete, setProductToDelete] = useState(null);
  const [products, setProducts] = useState(productsData);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
const cartItems = cart.length;
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
  setProductToDelete(product);
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

  

  const categories = ["all", ...new Set(products.map((p) => p.category))];
  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div>
      <Header cartItems={cartItems}/>

      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <div style={{ width: "100%", maxWidth: "1200px", padding: "2rem" }}>
          <div className="category-buttons">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${
                  selectedCategory === cat ? "active" : ""
                }`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat === "all" ? "Toutes" : cat}
              </button>
            ))}
          </div>

          {filteredProducts.length > 0 ? (
            <div className="product-grid">
              {filteredProducts.map((p) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  onAddToCart={handleAddToCart}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          ) : (
            <div className="notFound">
              <h3>Aucun produit trouvé</h3>
            </div>
          )}
        </div>
        
      </div>

      <Footer />

      <button className="cart-fab" onClick={() => setIsCartOpen(true)}>
        🛒
       <p>{cartItems}</p>
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