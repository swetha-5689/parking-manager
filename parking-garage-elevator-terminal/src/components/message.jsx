import React, { Component } from "react";
import { devModeEnabled } from "./devMode";
import DeviceCheck from "./connectedDevices";

class message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Welcome to SmartPark. Please approach the elevator terminal.",
      spinnerOn: 0,
      canScan: 0,
      scanColor: "red",
      resFound: 0,
      resColor: "red",
      validMemNum: 0,
      memColor: "red",
      buttonPressed: 0
    };
  }

  elevatorSequence = () => {
    this.setState({
      message: "Scanning license plate...",
      spinnerOn: 1,
      buttonPressed: 1
    });
    if (this.wasScanned()) {
      setTimeout(() => {
        this.setState({
          message: "License plate successfully scanned.",
          spinnerOn: 0
        });
      }, 3000);
      setTimeout(() => {
        this.setState({
          message: "Searching for a reservation...",
          spinnerOn: 1
        });
      }, 6000);

      if (this.wasResFound()) {
        setTimeout(() => {
          this.setState({
            message: "Reservation found.",
            spinnerOn: 0
          });
        }, 9000);

        setTimeout(() => {
          this.setState({
            message:
              "Thank you for parking with us. Your spot number is: NUMBER",
            spinnerOn: 0
          });
        }, 12000);

        setTimeout(() => {
          this.setState({
            message:
              "Welcome to SmartPark. Please approach the elevator terminal.",
            spinnerOn: 0,
            buttonPressed: 0
          });
        }, 20000);
      } else {
        setTimeout(() => {
          this.setState({
            message:
              "Reservation could not be found. Please exit the elevator.",
            spinnerOn: 0
          });
        }, 9000);
        setTimeout(() => {
          this.setState({
            message:
              "Welcome to SmartPark. Please approach the elevator terminal.",
            spinnerOn: 0,
            buttonPressed: 0
          });
        }, 17000);
      }
    } else {
      setTimeout(() => {
        this.setState({
          message: "License plate could not be scanned.",
          spinnerOn: 0
        });
      }, 3000);
      setTimeout(() => {
        this.setState({
          message: "Do you have a membership number?",
          spinnerOn: 0
        });
      }, 6000);

      if (this.isValidMemNumber()) {
        setTimeout(() => {
          this.setState({
            message:
              "Valid membership number entered. Looking for reservation...",
            spinnerOn: 1
          });
        }, 9000);

        if (this.wasResFound()) {
          setTimeout(() => {
            this.setState({
              message: "Reservation found.",
              spinnerOn: 0
            });
          }, 12000);

          setTimeout(() => {
            this.setState({
              message:
                "Thank you for parking with us. Your spot number is: NUMBER",
              spinnerOn: 0
            });
          }, 15000);

          setTimeout(() => {
            this.setState({
              message:
                "Welcome to SmartPark. Please approach the elevator terminal.",
              spinnerOn: 0,
              buttonPressed: 0
            });
          }, 23000);
        } else {
          setTimeout(() => {
            this.setState({
              message:
                "Reservation could not be found. Please exit the elevator.",
              spinnerOn: 0
            });
          }, 12000);
          setTimeout(() => {
            this.setState({
              message:
                "Welcome to SmartPark. Please approach the elevator terminal.",
              spinnerOn: 0,
              buttonPressed: 0
            });
          }, 20000);
        }
      } else {
        setTimeout(() => {
          this.setState({
            message:
              "Invalid membership number entered. Please exit the elevator terminal.",
            spinnerOn: 0
          });
        }, 9000);
        setTimeout(() => {
          this.setState({
            message:
              "Welcome to SmartPark. Please approach the elevator terminal.",
            spinnerOn: 0,
            buttonPressed: 0
          });
        }, 17000);
      }
    }
  };

  wasScanned = () => {
    if (this.state.canScan == 0) {
      return false;
    } else {
      return true;
    }
  };

  isValidMemNumber = () => {
    //if number successfully found in database, return 1
    //otherwise, return 0
    if (this.state.validMemNum == 1) {
      return true;
    } else {
      return false;
    }
  };

  wasResFound = () => {
    if (this.state.canScan == 1) {
      //obtain license plate number
      if (this.state.resFound == 1) {
        return true;
      } else {
        return false;
      }
    } else if (this.isValidMemNumber()) {
      if (this.state.resFound == 1) {
        return true;
      } else {
        return false;
      }
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

  updateMemButton = () => {
    if (this.state.validMemNum == 0) {
      this.setState({
        validMemNum: 1,
        memColor: "green"
      });
    } else if (this.state.validMemNum == 1) {
      this.setState({
        validMemNum: 0,
        memColor: "red"
      });
    }
  };

  render() {
    return (
      <div>
        <div>{this.props.allDevicesConnected}</div>
        <div className="h1 text-black text-center" style={{ marginTop: "20%" }}>
          {this.state.message}
          <span>
            {this.state.spinnerOn ? (
              <div className="spinner-border m-2" role="status"></div>
            ) : null}
          </span>
        </div>
        <div className="text-center">
          {devModeEnabled ? (
            <div>
              <button
                className="btn btn-secondary m-5"
                onClick={this.elevatorSequence}
                disabled={this.state.buttonPressed}
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
                  Customer has a Reservation?
                </button>
                <button
                  class="m-3"
                  onClick={this.updateMemButton}
                  style={{ backgroundColor: this.state.memColor }}
                >
                  Valid Membership Number?
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
