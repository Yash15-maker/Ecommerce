import React from "react";

export default function SunGlasses({addToCart}) {
  const [SunGlass, setSunGlass] = React.useState([]);
  
  React.useEffect(() => {
    fetch("https://dummyjson.com/products/category/sunglasses")
      .then((res) => res.json())
      .then((res) => {
        setSunGlass(res.products);

        console.log(res.products);
      })
      .catch((err) => {
        console.log("Bhai Problem hai", err);
      });
  }, []);

  return (
    <div className="product">
      {SunGlass.map((items) => (
        <div key={items.id} className="card">
          <div>
            <img
              className="product-image"
              alt={items.title}
              src={items.images[1]}
            />
          </div>
          <div>
            <h5 className="product-name">{items.title}</h5>
          </div>
          <div className="product-price">
            $-{items.price} || Discount-{items.discountPercentage}
          </div>
          <span>
            <b>{items.brand}</b>
          </span>
          <div>
            <button className="product-add" onClick={()=>{
              addToCart(items)
            }}>Add To Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}
