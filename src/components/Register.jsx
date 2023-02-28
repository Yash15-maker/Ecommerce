import React from "react";
import "./css/Signup.css";
import InputControl from "./InputControl";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../Firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export default function Register() {
  const navigate = useNavigate();

  const [values, setValues] = React.useState({
    name: "",
    email: "",
    pass: "",
  });
  const [submitButtonDisabled, setsubmitButtonDisabled] = React.useState(false);
  const [error, seterror] = React.useState("");

  const handleSubmission = () => {
    if (values.email === "" || values.name === "" || !values.pass === "") {
      seterror("Fill all the field kya kar rha hai tuh");
      return;
    }
    seterror("");
    setsubmitButtonDisabled(true);

    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setsubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        navigate("/");
      })
      .catch((err) => {
        seterror(err.message);
      });
  };

  return (
    <div className="container">
      <div className="innerBox">
        <h1 className="heading">Signup</h1>

        <InputControl
          label="Name"
          placeholder="Enter your name"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
          required
        />
        <InputControl
          label="Email"
          placeholder="Enter email address"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
          required
        />
        <InputControl
          label="Password"
          placeholder="Enter password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
          required
        />

        <div className="footer">
          <b className="error">{error}</b>
          <button onClick={handleSubmission} disabled={submitButtonDisabled}>
            Signup
          </button>
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/login">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
