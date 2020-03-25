import React, { Component } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import ProceedButton from "./ProceedButton";

function Found() {
  return (
    <div className="App">
      <h3
        style={{
          color: "rgba(0, 0, 0, 1.0)",
          fontSize: 50,
          textAlign: "center",
          marginTop: 125
        }}
      >
        Hello Mr. Rogers, <br /> Your Spot Number is 24 on Level 6!
      </h3>
      <Link to="/">
        <ProceedButton />
      </Link>
    </div>
  );
}

export default Found;
