import React, { Component } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import ScanButton from "./Button_scan";
import ProceedButton from "./ProceedButton";
import axios from "axios";

export default class Scanned extends Component {
  constructor(props) {
    super(props);

    this.searchLicensePlate = this.searchLicensePlate.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "No Name Found",
      licensePlate: "No License Plate Found",
      referencePlate: "No Plate to Reference",
    };
  }

  searchLicensePlate(scannedPlate) {
    axios
      .get("http://localhost:5000/api/customers/searchPlate/" + scannedPlate)
      .then((response) => {
        this.setState({
          name: response.data.name,
          licensePlate: response.data.licensePlate,
        });
      });
  }
  onSubmit(e) {
    e.preventDefault();
    this.setState({ referencePlate: this.input.value });
    this.searchLicensePlate(this.input.value);
  }

  render() {
    let button;
    const name = this.state.name;
    //const l = this.state.licensePlate;

    if (this.state.licensePlate === this.state.referencePlate) {
      button = (
        <Link
          to={{
            pathname: "/found",
            name: name,
            //l: l,
          }}
        >
          <ProceedButton />
        </Link>
      );
    } else {
      button = (
        <Link to="/notScanned">
          <ScanButton />
        </Link>
      );
    }

    return (
      <div className="App">
        <form onSubmit={this.onSubmit}>
          <label>License Plate </label>

          <input
            type="text"
            name="licensePlate"
            //name="username"
            ref={(input) => (this.input = input)}
          />
        </form>
        <h1
          style={{
            color: "rgba(0, 0, 0, 1.0)",

            fontSize: 60,

            textAlign: "center",

            marginTop: 50,
          }}
        >
          Scanning License Plate
        </h1>
        <br />
        <br />
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        {button}
      </div>
    );
  }
}
