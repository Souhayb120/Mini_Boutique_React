import React from 'react'
import { useState } from "react";
import "../App.css";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";
import Header from "../components/Header";
import products from "../components/Products.json"
import { Link } from "react-router-dom";
export default function PageNotFound() {
  return (
    <div className="page_not_found">
     
      <h1>seem you are lost</h1>
      <h1>404</h1>
      <Link to='/'>Home</Link>
    </div>
  )
}
