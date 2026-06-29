// App.jsx
import { useState } from "react";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";
import productsData from "./components/productsJson.json";
import './index.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  const [products, setProducts] = useState(productsData);

  const handleAddToCart = (product) => {
    console.log("Ajouté :", product.name);
  };

  return (
    <div>
      <Header />
      <div style={{ width : "100%" , display : "flex", justifyContent : "center"}}>
        <div style={{ padding: "2rem", display: "grid" ,gridTemplateColumns : "1fr 1fr 1fr", gap: "1rem", flexWrap: "wrap"}}>
          {products.map((p) => (
          <ProductCard key={p.id} product={p} onAddToCart={handleAddToCart} />
        ))}
        </div>
      </div>
        <Footer />
    </div>
  );
}

export default App;