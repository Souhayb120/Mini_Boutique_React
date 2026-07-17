import { useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Home from "./pages/Home";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AddProduct from "./pages/AddProduct";
import PageNotFound from "./pages/PageNotFound";
import AboutUs from "./pages/AboutUs";
import products from "./components/Products.json";
import ProductDetails from "./pages/ProductDetails";


function App() {
  const [cart, setCart] = useState([]);
  const [productsList, setProductsList] = useState(products)

  const onAddToCart = (product) => {
    setCart((prevCart) => {
      const itemExists = prevCart.find((item) => item.id === product.id);
      if (itemExists) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 , price: item.price} : item,
        );
      }
      return [...prevCart, { ...product, qty: 1 }];
    });
  };

   const onRemoveFromCart = (id) => {
    setCart((prevCart) => {
      const itemDeleted = prevCart.filter((item) => item.id !== id);
      return itemDeleted;
    });
  };

    const onAddToProducts = (product) => {
    setProductsList((prevCart) => {
      return ([...prevCart, product ]);
    });
  };

  
  return (
      <Routes>
      <Route path="/" element={<Home onAddToCart={onAddToCart} onRemoveFromCart={onRemoveFromCart} cart={cart} productsList={productsList} />} />
      <Route path="/AddProduct" element={<AddProduct length={productsList.length} onAddToProducts={onAddToProducts}/>} />
      <Route path="/Products/:id" element={<ProductDetails  productsList={productsList}/>} />
       <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
     
  
  );
}

export default App;
