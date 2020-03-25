import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import AfterScanButton from "./Button_aftScan";
import FailButton from "./FailButton";

function NotScanned() {
  return (
    <div className="App">
      <h1
        style={{
          color: "rgba(0, 0, 0, 1.0)",
          fontSize: 50,
          textAlign: "center",
          marginTop: 50
        }}
      >
        <br />
        Enter Membership Number Below:
        <br />
        <br />
      </h1>
      <div class="input-group input-group-lg">
        <input
          class="form-control form-control-lg"
          type="text"
          placeholder="Enter Membership Number"
        />
        <div class="input-group-append">
          <Link to="/found">
            <AfterScanButton />
          </Link>
        </div>
      </div>
      <Link to="/notFound">
        <FailButton />
      </Link>
    </div>
  );
}

export default NotScanned;
