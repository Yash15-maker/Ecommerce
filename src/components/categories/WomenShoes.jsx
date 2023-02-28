import React from "react";

function WomenSHoes() {
  const [ws, setws] = React.useState([]);
  React.useEffect(() => {
    fetch("https://dummyjson.com/products/category/womens-shoes")
      .then((res) => res.json())
      .then((res) => {
        setws(res.products);
        console.log(res.products);
      })
      .catch((err) => {
        console.log("Bhai Problem hai", err);
      });
  }, []);
  return (
    <div className="product">
      {ws.map((items) => (
        <div className="card">
          <div>
            <img
              className="product-image"
              alt={items.title}
              src={items.images[1]}
            />
          </div>
          <div>
            <h5 className="product-name">{items.title.trim(" ")}</h5>
          </div>
          <div className="product-price">
            $-{items.price} || Discount-{items.discountPercentage}
          </div>
          {/* <span>
            <b>{items.brand}</b>
          </span> */}
          <div>
            <button className="product-add">Add To Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WomenSHoes;
