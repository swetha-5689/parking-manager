import React, { Component } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import GoBackButton from "./GoBackButton";

function NotFound() {
  return (
    <div className="App">
      <h1
        style={{
          color: "rgba(0, 0, 0, 1.0)",
          fontSize: 50,
          textAlign: "center",
          marginTop: 60
        }}
      >
        We found no reservation under your name. <br />
        Please try again or Proceed to the Walk-In Terminal.
      </h1>
      <Link to="/">
        <GoBackButton />
      </Link>
    </div>
  );
}

export default NotFound;
