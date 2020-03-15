import React from "react"; 
import Nav from "./Nav";
import Home from "./Home";
import Statistics from "./Statistics";
import Reservations from "./Reservations";
import Overview from "./Overview";
import { MemoryRouter } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <MemoryRouter>
      <Router>
        <div className="App">
          <Nav />
          <Route path="/home" component={Home} />
          <Route path="/statistics" component={Statistics} />
          <Route path="/reservations" component={Reservations} />
          <Route path="/overview" component={Overview} />
        </div>
      </Router>
    </MemoryRouter>
  );
}

export default App;
