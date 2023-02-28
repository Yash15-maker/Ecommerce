import React from "react";
import "./css/Cart.css";
//import Container from "@mui/material/Container";
//import Grid from "@mui/material/Grid";

export default function Cart({ item }) {
  return (
    <div className="product">
      <div class="card">
        <img src={item.images[1]} alt="Denim Jeans" style={{ width: "100%" }} />
        <h1>{item.title}</h1>
        <p class="price">$.{item.price}</p>
        <p class="price">*{item.rating}</p>
        <p>{item.description}</p>
        <p>
          <button>Add to Cart</button>
        </p>
      </div>
    </div>
  );
}
