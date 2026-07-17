import React, { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../components/Products.json";
import Header from "../components/Header";

const ProductDetails = ({productsList}) => {

  const { id } = useParams();
const product = productsList.find(
    p => p.id === Number(id)
);
 console.log(productsList);
  console.log(id);
  return (
    <>
    <Header/>
    <div className="card">
      <img src={product.image} />
      <h3 className="card_title">{product.name}</h3>
      <h5 className="card_category">{product.category}</h5>
      <h6 className="card_qnt">quantite : {product.quantite}</h6>
      <h6 className="card_price">price : {product.price}</h6>
    </div>
     </>
  );
 
};

export default ProductDetails;
