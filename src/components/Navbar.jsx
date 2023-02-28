import React from "react";
import "./css/Navbar.css";
import "./css/Login.css";
import { auth } from "../Firebase";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
function Navbar(props) {
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then((res) => {
        console.log("Sign-out successful.");
        navigate("/register");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const handleSignIn = () => {
    navigate("/login");
  };

  const gotoProducts = () => {
    navigate("/products");
  };

  return (
    <div>
      <nav className="navbar">
        <div style={{ color: "#fff", padding: "10px" }}>Ecommerce Site</div>

        <span>
          <Button
            style={{ color: "#fff" }}
            variant="outlined"
            onClick={gotoProducts}
          >
            Products
          </Button>
        </span>
        <div style={{ color: "#fff", padding: "10px" }}>
          {props.name === "Nothing" ? "Hey,Please Sign In" :  props.name}
        </div>
        {props.name !== "Nothing" ? (
          <button style={{ width: "10%" }} onClick={handleSignOut}>
            Logout
          </button>
        ) : (
          <button style={{ width: "10%" }} onClick={handleSignIn}>
            Login
          </button>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
