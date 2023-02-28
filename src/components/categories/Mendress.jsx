import React from 'react'
import "../css/Mendress.css"

export default function Mendress({addToCart}) {
    const [md, setmd] = React.useState([]);
  React.useEffect(() => {
    fetch("https://dummyjson.com/products/category/mens-shirts?limit=6")
      .then((res) => res.json())
      .then((res) => {
        setmd(res.products);
        console.log(res.products);
      })
      .catch((err) => {
        console.log("Bhai Problem hai", err);
      });
  }, []);
  return (
    <div className="product">
    {md.map((items) => (
      <div key={items.id} className="card">
        <div>
          <img
            className="product-image"
            alt={items.title}
            src={items.images[0]}
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
  )
}
