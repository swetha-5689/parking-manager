import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavBar from "./AppNavBar";
import Home from "./Home";
import Scanned from "./Scanned";
import NotScanned from "./NotScanned";
import Found from "./Found";
import NotFound from "./NotFound";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <AppNavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/scanned" component={Scanned} />
          <Route path="/notScanned" component={NotScanned} />
          <Route path="/found" component={Found} />
          <Route path="/notFound" component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
