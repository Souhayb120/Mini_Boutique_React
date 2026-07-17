import React from "react";
import { useState } from "react";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";
import Header from "../components/Header";
import products from "../components/Products.json";
import "../App.css";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export default function AddProduct({ onAddToProducts , length }) {
  const schema = yup.object({
    name: yup.string().required("Name is required"),

    category: yup.string().required("category is required"),

    quantite: yup.number(),

    image: yup.string().url(),

    price: yup.number().min(1),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();
  const onSubmit = (data) => {
    onAddToProducts({...data , id : length + 1});
    navigate("/");
  };

  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit(onSubmit)} className="addform">
        <label>Name</label>
        <input type="text" {...register("name")} />
        <p>{errors.name?.message}</p>

        <label>Category</label>
        <input type="text" {...register("category")} />
        <p>{errors.category?.message}</p>

        <label>Quantity</label>
        <input type="number" {...register("quantite")} />
        <p>{errors.quantite?.message}</p>
        <label>Price</label>
        <input type="number" {...register("price")} />
        <p>{errors.price?.message}</p>
        <label>Image URL</label>
        <input type="text" {...register("image")} />

        <button type="submit">Add to Products</button>
      </form>
    </div>
  );
}
