import React from "react";
import axios from "axios";
import makeToast from "../Toaster";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const nameRef = React.createRef();
  const emailRef = React.createRef();
  const passwordRef = React.createRef();
  const URL = "https://dizcorddds.herokuapp.com";
  const navigate = useNavigate();

  const registerUser = () => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    axios
      .post(`${URL}/user/register`, {
        name,
        email,
        password,
      })
      .then((response) => {
        makeToast("success", response.data.message);
        navigate("/login");
      })
      .catch((err) => {
        makeToast("error", err.response.data.message);
      });
  };

  return (
    <div>
      <br className="top-page-break" />
      <input
        type="checkbox"
        defaultChecked
        id="toggle"
        className="toggle--checkbox"
      />
      <label htmlFor="toggle" className="toggle--label">
        <span className="toggle--label-background"></span>
      </label>
      <div className="background"></div>
      <div className="sun-2"></div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="card">
        <label className="lab" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          ref={emailRef}
          placeholder="yo@example.com"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          ref={passwordRef}
          id="password"
          placeholder="Enter your new password"
        />
        <label htmlFor="name">Name</label>
        <input
          type="text"
          ref={nameRef}
          name="name"
          id="name"
          placeholder="Enter your Name"
        />

        <button onClick={registerUser}>Register</button>
      </div>
    </div>
  );
}
