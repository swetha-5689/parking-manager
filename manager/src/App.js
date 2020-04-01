import React from "react";
import Nav from "./components/Nav";
import Home from "./Home";
import Statistics from "./Statistics";
import Reservations from "./Reservations";
import Calendar from "./Calendar";
import Overview from "./Overview";
import Loading from "./components/Loading";
import { MemoryRouter } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute.js"
import garageGenerator from "./garageGenerator"
import Pricing from "./Pricing"
import { useAuth0 } from "./react-auth0-spa";
import "./App.css";
import history from "./utils/history";
import EditLayout from "./EditLayout";
function App() {
    const { loading } = useAuth0();

    if (loading) {
        return <Loading />;
    }
    else return (
        <MemoryRouter>
            <Router history={history}>
                <Nav />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/home" component={Home} />
                    <PrivateRoute path="/calendar" component={Calendar} />
                    <PrivateRoute path="/statistics" component={Statistics} />
                    <PrivateRoute path="/overview" component={Overview} />
                    <PrivateRoute path="/reservations" component={Reservations} />
                    <PrivateRoute path="/pricing" component={Pricing} />
                    <PrivateRoute path="/editlayout" component={EditLayout} />
                </Switch>
            </Router>
        </MemoryRouter>
    );
  }
export default App;

