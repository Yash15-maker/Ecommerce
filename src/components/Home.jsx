import React from "react";
import Navbar from "./Navbar";

import Product from "./Product";
import Carousel from "./Carousel";
import Footer from "./Footer";

function Home(props) {
  console.log(props.name);
  return (
    <div>
      <Navbar name={props.name} />

      <Product />
      <Carousel />
      <Footer />
    </div>
  );
}

export default Home;
