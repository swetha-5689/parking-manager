import React, { Component } from "react";
import { devModeEnabled } from "./devMode";

class message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Welcome to SmartPark. Please approach the elevator terminal.",
      spinnerOn: 0,
      canScan: 0,
      scanColor: "red",
      resFound: 0,
      resColor: "red"
    };
  }

  updateMsg = () => {
    this.setState({
      message: "Scanning license plate...",
      spinnerOn: 1
    });

    if (this.state.canScan != 1) {
      setTimeout(() => {
        this.setState({
          message: "License plate could not be scanned.",
          spinnerOn: 0
        });
      }, 5000);

      setTimeout(() => {
        this.setState({
          message:
            "Welcome to SmartPark. Please approach the elevator terminal.",
          spinnerOn: 0
        });
      }, 12000);
    } else {
      setTimeout(() => {
        if (this.state.resFound == 1) {
          this.setState({
            message: "Reservation found. Thank you for parking.",
            spinnerOn: 0
          });
        } else {
          this.setState({
            message: "Reservation not found.",
            spinnerOn: 0
          });
        }
      }, 5000);
      setTimeout(() => {
        this.setState({
          message:
            "Welcome to SmartPark. Please approach the elevator terminal.",
          spinnerOn: 0
        });
      }, 12000);
    }
  };

  updateResButton = () => {
    if (this.state.resFound == 0) {
      this.setState({
        resFound: 1,
        resColor: "green"
      });
    } else if (this.state.resFound == 1) {
      this.setState({
        resFound: 0,
        resColor: "red"
      });
    }
  };

  updateScanButton = () => {
    if (this.state.canScan == 0) {
      this.setState({
        canScan: 1,
        scanColor: "green"
      });
    } else if (this.state.canScan == 1) {
      this.setState({
        canScan: 0,
        scanColor: "red"
      });
    }
  };

  render() {
    return (
      <div>
        <div className="h1 text-black text-center" style={{ marginTop: "20%" }}>
          {this.state.message}
          <span>
            {this.state.spinnerOn ? (
              <div class="spinner-border m-2" role="status"></div>
            ) : null}
          </span>
        </div>
        <div className="text-center">
          {devModeEnabled ? (
            <div>
              <button
                className="btn btn-secondary m-5"
                onClick={this.updateMsg}
              >
                Start Elevator Sequence
              </button>
              <div>
                <button
                  class="m-3"
                  onClick={this.updateScanButton}
                  style={{ backgroundColor: this.state.scanColor }}
                >
                  License Plate can be Scanned?
                </button>
                <button
                  onClick={this.updateResButton}
                  style={{ backgroundColor: this.state.resColor }}
                >
                  Reservation Number Found?
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
export default message;
