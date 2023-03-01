import React from "react";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import "./css/Products.css";
import MenShoes from "./categories/MenShoes";
import WomenDress from "./categories/WomenDress";
import Mendress from "./categories/Mendress";
import Menwatch from "./categories/Menwatch";

import SmartPhones from "./categories/SmartPhones";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

function Products(props) {
  const navigate = useNavigate();
  const { addToCart } = props;

  console.log(props);

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          padding: "20px 10px",
          width: "100%",

          backgroundColor: "rgb(88,61,125)",
        }}
      >
        <button>
          {" "}
          <ArrowBackIcon style={{ hover: "cursor" }} onClick={handleBack} />
        </button>
        <span>
          <b>{props.name === "Nothing" ? "Hey,Please Sign In" : props.name}</b>
        </span>
        <button>
          <IconButton aria-label="cart">
            <ShoppingCartIcon
              onClick={() => {
                navigate("/shopping");
              }}
            />
            <div>{props.cart.length}</div>
          </IconButton>
        </button>
      </div>

      <div class="wrapper">
        <input type="radio" name="slider" id="home" />
        <input type="radio" name="slider" id="blog" />
        <input type="radio" name="slider" id="code" />
        <input type="radio" name="slider" id="help" />
        <input type="radio" name="slider" id="about" />
        <nav>
          <label for="home" class="home">
            {/* <i class="fas fa-home"></i> */}
            WomenDress
          </label>
          <label for="blog" class="blog">
            MenDress
          </label>
          <label for="code" class="code">
            MenShoes
          </label>
          <label for="help" class="help">
            MenWatch
          </label>
          <label for="about" class="about">
            SmartPhones
          </label>
          <div class="slider"></div>
        </nav>
        <section>
          <div class="content content-1">
            <WomenDress addToCart={addToCart} />
          </div>
          <div class="content content-2">
            <Mendress addToCart={addToCart} />
          </div>
          <div class="content content-3">
            <MenShoes addToCart={addToCart} />
          </div>
          <div class="content content-4">
            <Menwatch addToCart={addToCart} />
          </div>
          <div class="content content-5">
            <SmartPhones addToCart={addToCart} />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Products;
