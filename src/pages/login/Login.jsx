import React from "react";
import { useState, useRef } from "react";
import Home from "../home/Home";
import "./style.css";

const Login = () => {
  const name = useRef();
  const password = useRef();
  const getName = localStorage.getItem("nameData");
  const getPassword = localStorage.getItem("passwordData");
  const handleSubmit = () => {
    // if (name.current.value === "mirac" && password.current.value === "1234") {
    localStorage.setItem("nameData", name.current.value);
    localStorage.setItem("passwordData", password.current.value);
    // }
  };
  return (
    <div>
      {getName && getPassword ? (
        <Home />
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-inner">
            <h2>Login</h2>
            {/* Error */}
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" ref={name} />
            </div>
            {/* <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" />
        </div> */}
            <div className="form-group">
              <label htmlFor="password">Pasword:</label>
              <input type="password" ref={password} />
            </div>
          </div>
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
};

export default Login;
