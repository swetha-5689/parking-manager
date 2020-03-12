import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import Message from "./components/message";
import Navbar from "./components/navbar";
import DevMode from "./components/devMode";

ReactDOM.render(<Navbar />, document.getElementById("header"));
ReactDOM.render(<Message />, document.getElementById("msgText"));
ReactDOM.render(<DevMode />, document.getElementById("devOption"));
