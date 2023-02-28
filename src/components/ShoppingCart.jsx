
import React from "react";
import "../App.css";

function ShoppingCart({ cart }) {
  const [CART, setCART] = React.useState([]);

  React.useEffect(() => {
    setCART(cart);
  }, [cart]);
  console.log("Empty", cart);

  return (
    <div>
      <h1 style={{padding: "10px "}}>Aaapna Cart</h1>
      {CART?.map((cartItem, cartindex) => {
        return (
          <div key={cartItem.id}>
            < >
              <img src={cartItem.images[0]} style={{ width: "20%" }} alt=".." />
              <span> {cartItem.name} </span>
              <button
                onClick={() => {
                  const _CART = CART.map((item, index) => {
                    return cartindex === index
                      ? {
                          ...item,
                          quantity: item.quantity > 0 ? item.quantity - 1 : 0,
                        }
                      : item;
                  });
                  setCART(_CART);
                }}
              >
                -
              </button>
              <span> {cartItem.quantity} </span>
              <button
                onClick={() => {
                  const _CART = CART.map((item, index) => {
                    return cartindex === index
                      ? { ...item, quantity: item.quantity + 1 }
                      : item;
                  });
                  setCART(_CART);
                }}
              >
                +
              </button>
            </>
            <span> Rs. {cartItem.price * cartItem.quantity} </span>
          </div>
        );
      })}

      <p>
        {" "}
        Total <span></span>
        {CART.map((item) => item.price * item.quantity).reduce(
          (total, value) => total + value,
          0
        )}
      </p>
    </div>
  );
}

export default ShoppingCart;
