import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyTable from "./MyTable";
import MyTable2 from "./MyTable2";
import MyTable3 from "./MyTable3";
import MyTable4 from "./MyTable4";
import MyTable5 from "./MyTable5";

function App() {
  return (
    <div className="App">
      <h1
        style={{
          color: "black",
          fontFamily: "Georgia",
          fontWeight: "bolder"
        }}
      >
        {" "}
        Spots{" "}
      </h1>
      <br />
      <MyTable />
      <br />
      <br />
      <MyTable2 />
      <br />
      <br />
      <MyTable3 />
      <br />
      <br />
      <MyTable4 />
      <br />
      <br />
      <MyTable5 />
    </div>
  );
}

export default App;
