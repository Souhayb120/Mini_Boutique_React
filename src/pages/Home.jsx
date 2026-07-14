import React from 'react'
import { useState } from "react";
import "../App.css";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";
import Header from "../components/Header";


export default  function Home({onAddToCart , onRemoveFromCart ,cart, productsList}){
  return (
    <div>
      <Header/>
      <ProductList onAddToCart={onAddToCart} productsList={productsList}/>
      <Cart cart={cart} onRemoveFromCart={onRemoveFromCart}/>
    </div>
  )
}
