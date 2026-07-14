import React, { useState } from 'react'
const CardItem = ({product, onAddToCart}) => {


  return (
   <div className="card">
        <img src={product.image} />
        <h3  className="card_title">{product.name}</h3>
        <h5 className="card_category">{product.category}</h5>
        <h6 className="card_qnt">quantite : {product.quantite}</h6>
        <h6 className="card_price">price : {product.price}</h6>
        <button onClick={() => onAddToCart(product)}>Add to Panier</button>
    </div>)
  
}

export default CardItem