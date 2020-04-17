import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ExButton from "./Button";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="App">
      <h1
        style={{
          color: "rgba(0, 0, 0, 1.0)",
          fontSize: 60,
          textAlign: "center",
          marginTop: 150
        }}
      >
        Car Enters Garage
      </h1>
      <Link to="/scanned">
        <ExButton />
      </Link>
    </div>
  );
}

export default Home;
