import { useState } from "react";


const Cart = ({ cart , onRemoveFromCart }) => {
     const total = cart.reduce((sum, item) => {
    return sum + item.price * item.qty;
}, 0);

  return (
    <>
      <div className="pannier">
        {cart.map((p) => (
          <div key={p.id} className="small_card">
            <img src={p.image} height={40} width={40} />
            <h3 className="card_title">{p.name}</h3>
            <h5 className="card_category">{p.category}</h5>
            <h6 className="card_qnt">{p.qty}</h6>
            <h6 className="card_price">{p.price + " MAD"}</h6>
            <button onClick={()=>onRemoveFromCart(p.id)}>delete</button>
          </div>
        ))}
       <h1>{total + " MAD"}</h1>
      </div>
    </>
  );
};

export default Cart;
