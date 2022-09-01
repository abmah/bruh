import React from "react";
import axios from "axios";
import makeToast from "../Toaster";
import { useNavigate } from "react-router-dom";

import "./login-register.css";
export default function TestPage(props) {
  const navigate = useNavigate();
  // const token = localStorage.getItem("DC_Token");

  // React.useEffect(() => {
  //   if (token) {
  //     navigate("/dashboard");
  //   }
  // }, []);
  // // localStorage.removeItem("DC_Token");

  const emailRef = React.createRef();
  const passwordRef = React.createRef();
  const loginUser = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    axios
      .post("https://dizcorddds.herokuapp.com/user/login", {
        email,
        password,
      })
      .then((response) => {
        makeToast("success", response.data.message);
        localStorage.setItem("DC_Token", response.data.token);

        navigate("/dashboard");
        props.setupSocket();
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
          placeholder="password"
        />
        <button onClick={loginUser}>Login</button>
      </div>
    </div>
  );
}
