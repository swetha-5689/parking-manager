import React, { Component } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import AfterScanButton from "./Button_aftScan";
import FailButton from "./FailButton";
import axios from "axios";

export default class NotScanned extends Component {
  constructor(props) {
    super(props);

    this.searchResID = this.searchResID.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "No Name Found",
      resID: "No Number Found",
      referenceID: "No number to Reference",
    };
  }

  searchResID(enteredID) {
    axios
      .get("http://localhost:5000/api/customers/searchResID/" + enteredID)
      .then((response) => {
        this.setState({
          name: response.data.name,
          resID: response.data.resID,
        });
      });
  }
  onSubmit(e) {
    e.preventDefault();
    this.setState({ referenceID: this.input.value });
    this.searchResID(this.input.value);
  }

  render() {
    let button;
    const name = this.state.name;

    if (this.state.resID === this.state.referenceID) {
      button = (
        <Link
          to={{
            pathname: "/found",
            name: name,
          }}
        >
          <AfterScanButton />
        </Link>
      );
    } else {
      button = (
        <Link to="/notFound">
          <FailButton />
        </Link>
      );
    }

    return (
      <div className="App">
        <h1
          style={{
            color: "rgba(0, 0, 0, 1.0)",
            fontSize: 50,
            textAlign: "center",
            marginTop: 50,
          }}
        >
          <br />
          Enter Reservation ID Below:
          <br />
          <br />
        </h1>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            //pattern="[0-9]*"
            placeholder="Enter Reservation ID"
            ref={(input) => (this.input = input)}
          />
        </form>

        {button}
      </div>
    );
  }
}
