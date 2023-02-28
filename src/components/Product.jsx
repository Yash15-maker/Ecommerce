import React from "react";
import "./css/Product.css";
export default function Product() {
  return (
    <div style={{backgroundColor: "rgb(237,230,219)"}}>
      <div className="features">
        <div className="row">
          <div className="text-col">
            <h2>Enjoy you Shopping</h2>
            <p style={{ width: "90%" }}>
              Prime members also enjoy discounted Same-Day and Morning Delivery
              to pin-codes in select cities across India
            </p>
          </div>
          <div className="img-col">
            <img alt=".." src="./images/feature-1.png" />
          </div>
        </div>
      </div>
      <div className="features">
        <div className="row">
          <div className="img-col">
            <img alt=".." src="./images/Shopping.png" />
          </div>
          <div className="text-col">
            <h2>Enjoy you Shopping</h2>
            <p style={{ width: "90%" }}>
              Prime members also enjoy discounted Same-Day and Morning Delivery
              to pin-codes in select cities across India
            </p>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="row">
          <div className="text-col">
            <h2>Enjoy you Shopping</h2>
            <p style={{ width: "90%" }}>
              Prime members also enjoy discounted Same-Day and Morning Delivery
              to pin-codes in select cities across India
            </p>
          </div>
          <div className="img-col">
            <img alt=".." src="./images/feature-3.png" />
          </div>
        </div>
      </div>
      <div className="features">
        <div className="row">
        <div className="img-col">
            <img alt=".." src="./images/feature-4.png" />
          </div>
          <div className="text-col">
            <h2>Enjoy you Shopping</h2>
            <p style={{ width: "90%" }}>
              Prime members also enjoy discounted Same-Day and Morning Delivery
              to pin-codes in select cities across India
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
}
