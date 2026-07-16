import React from 'react'
import { useState } from "react";
import "../App.css";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";
import Header from "../components/Header";
import products from "../components/Products.json"
import { Link , NavLink } from "react-router-dom";
export default function PageNotFound() {
  return (
    <>
   
    <Header/>
    <div className="page_not_found">
     <img style={{borderRadius : '20'}} src="https://app.enaa.ma/storage/media/user_profile_photo/thumbnails/thumb_69eb4471a73b0.png" alt="" srcset="" />
      <h1>Souhayb Hadi</h1>
      <h3>souhaybhadi06@gmail.com</h3>
      <NavLink to='/'   style={({ isActive }) => ({
                    color: isActive ? "yellow" : "white",
                    fontWeight: isActive ? "bold" : "normal",
                    textDecoration: "none",
                    marginRight: "15px",
                })}>Home</NavLink>
    </div>
     </>
  )
  
}
