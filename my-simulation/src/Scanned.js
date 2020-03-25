import React, { Component } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import ScanButton from "./Button_scan";
import ProceedButton from "./ProceedButton";

function Scanned() {
  return (
    <div className="App">
      <h1
        style={{
          color: "rgba(0, 0, 0, 1.0)",
          fontSize: 60,
          textAlign: "center",
          marginTop: 50
        }}
      >
        Scanning License Plate
      </h1>
      <br />
      <br />
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <Link to="/found">
        <ProceedButton />
      </Link>
      <Link to="./notScanned">
        <ScanButton />
      </Link>
    </div>
  );
}

export default Scanned;
