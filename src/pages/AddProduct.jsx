import React from "react";
import { useState } from "react";
import "../App.css";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";
import Header from "../components/Header";
import products from "../components/Products.json";
import "../App.css";
import { useNavigate } from "react-router-dom";


export default function AddProduct({onAddToProducts}) {
const navigate = useNavigate();
const [form, setForm] = useState({
  name: "",
  category: "",
  quantite: "",
  image:"",
  price: "",
});


  return (
    <div>
      <Header />
      <form onSubmit={(e) => {e.preventDefault();
         onAddToProducts(form)
         navigate("/");
         }} className="addform">
  <label>Name</label>
  <input
    type="text"
    value={form.name}
    onChange={(e) =>
      setForm({ ...form, name: e.target.value })
    }
  />

  <label>Category</label>
  <input
    type="text"
    value={form.category}
    onChange={(e) =>
      setForm({ ...form, category: e.target.value })
    }
  />

  <label>Quantity</label>
  <input
    type="number"
    value={form.quantite}
    onChange={(e) =>
      setForm({ ...form, quantite: e.target.value })
    }
  />

  <label>Price</label>
  <input
    type="number"
    value={form.price}
    onChange={(e) =>
      setForm({ ...form, price: e.target.value })
    }
  />

  <label>Image URL</label>
  <input
    type="text"
    value={form.image}
    onChange={(e) =>
      setForm({ ...form, image: e.target.value })
    }
  />

  <button type="submit">
    Add to Products
  </button>
</form>
    </div>
  );
}
