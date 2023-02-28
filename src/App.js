import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ShoppingCart from "./components/ShoppingCart";
import Login from "./components/Login";
import Products from "./components/Products";
import Register from "./components/Register";
import { auth } from "./Firebase";
function App() {
  const [userName, setuserName] = React.useState("");
  const [cart,setcart]=React.useState([]);
  React.useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setuserName(user.displayName);
      } else {
        setuserName("Nothing");
      }
    }, []);
  });

  const addToCart=(data)=>{
    setcart([...cart, { ...data, quantity: 1 }]);
    
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home name={userName} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/shopping" element={<ShoppingCart cart={cart}/>} />
          <Route path="/products" element={<Products addToCart={addToCart} cart={cart}name={userName} />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
