import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/Login.css";
import InputControl from "./InputControl";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";
export default function Login() {
  const navigate = useNavigate();
  const [values, setValues] = React.useState({
    email: "",
    pass: "",
  });

  //Error
  const [error, seterror] = React.useState("");

  const handleSubmission = () => {
    if (values.email === "" || !values.pass === "") {
      seterror("Fill The Details Please");
      return;
    }
    seterror("");

    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        navigate("/");
      })
      .catch((err) => {
        seterror(err.message);
      });
  };

  return (
    <div className="container">
      <div className="innerBox">
        <h1 className="heading">Login</h1>

        <InputControl
          label="Email"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
          placeholder="Enter email address"
        />
        <InputControl
          label="Password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
          placeholder="Enter Password"
        />

        <div className="footer">
          <b className="error">{error}</b>
          <button onClick={handleSubmission}>Login</button>
          <p>
            Don't have an account?{" "}
            <span>
              <Link to="/register">Sign up</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}