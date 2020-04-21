import React, { Component } from "react";
import { devModeEnabled } from "./devMode";
import DeviceCheck from "./connectedDevices";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";
import Button from "react-bootstrap/Button";
import QRCode from "qrcode.react";
import NumPad from "react-numpad";
import axios from "axios";

//File for the output message of the SmartPark system, THE MAINFRAME OF THE ELEVATOR FRONT END DISPLAY

let promptCheck = false;
let memCheck = false;
let reset = 0;
let inputMemNum = -1;
let scanSuccess;

class message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Welcome to SmartPark. Please approach the elevator terminal.",
      spinnerOn: 0,
      canScan: 0, //CONNECT TO BACK END- LICENSE PLATE NUM
      scanColor: "red",
      resFound: 0,
      resColor: "red",
      hasMemNum: 0, //CONNECT TO BACK END - RETRIEVE MEM NUM
      validMemNum: 0, //CONNECT TO BACK END - CHECK MEM NUM
      memColor: "red",
      buttonPressed: 0,
      promptUser: 0,
      memRead: 0,
      nextScreen: 1,
      buttonDisabled: 0,
      garageFull: 0, //CONNECT TO BACK END - CHECK ALL SPOTS
      garageColor: "red",
      advanceColor: "white",
      displaySpotNum: 0, //CONNECT TO BACK END - SPOT NUMBER WAS FOUND (TRUE/FALSE)
      displayQRCode: 0,
      promptMemNum: 0,
      spotNum: "None", //CONNECT TO BACK END- SPOT NUMBER
      resStart: 0, //CONNECT TO BACK END- RESERVATION START TIME
      resEnd: 0, //CONNECT TO BACK END- RESERVATION END TIME
      licensePlate: "No License Plate Found",
      referencePlate: "",
      resID: "No Reservation Found",
      referenceResID: null,
    };
  }

  searchLicensePlate(scannedPlate) {
    axios
      .get("http://localhost:5000/api/customers/searchPlate/" + scannedPlate)
      .then((response) => {
        this.setState(
          {
            licensePlate: response.data.licensePlate,
          },
          function () {
            if (this.state.licensePlate === this.state.referencePlate) {
              console.log("Plate!!");
              this.searchResID(this.state.licensePlate);
              this.setState({ canScan: 1 }, function () {
                setTimeout(() => {
                  this.setState({
                    message: "License plate successfully scanned.",
                    spinnerOn: 0,
                  });
                }, 2000);
              });
            } else {
              scanSuccess = false;
              setTimeout(() => {
                this.setState({
                  message: "License plate could not be scanned.",
                  spinnerOn: 0,
                });
              }, 2000);
            }
          }
        );
        this.setState(
          {
            resID: response.data.resID,
          },
          function () {
            this.getReservedSpot(this.state.resID);
          }
        );
      });
  }

  searchResID(input) {
    axios
      .get("http://localhost:5000/api/customers/searchResID/" + input)
      .then((response) => {
        this.setState({
          resID: response.data.resID,
        });
      });
  }

  getReservedSpot(id) {
    axios
      .get("http://localhost:5000/api/spots/searchResID/" + id)
      .then((response) => {
        this.setState({
          spotNum: response.data.spotNumber,
        });
      });
  }

  handleChange(event) {
    this.setState({ referencePlate: event.target.value });
  }

  advanceScreen = () => {
    //The main method for the front end of the elevator. Employs smaller methods (as follows)
    //in order to advance the elevator sequence.
    if (reset) {
      this.setState({
        message: "Welcome to SmartPark. Please approach the elevator terminal.",
        spinnerOn: 0,
        buttonPressed: 0,
        displaySpotNum: 0,
        displayQRCode: 0,
      });
      reset = 0;
      inputMemNum = -1;
    } else {
      if (this.state.nextScreen == 1) {
        this.setState({
          message: "Scanning license plate...",
          spinnerOn: 1,
          buttonPressed: 1,
        });

        this.searchLicensePlate(this.state.referencePlate);

        this.disableButton(2000);

        // this.getReservedSpot(this.state.resID);
      } else if (this.state.nextScreen == 2) {
        if (this.wasScanned()) {
          this.setState({
            message: "Searching for a reservation...",
            spinnerOn: 1,
          });

          this.disableButton(2000);

          if (this.wasResFound()) {
            setTimeout(() => {
              this.setState({
                message: "Reservation found.",
                spinnerOn: 0,
              });
            }, 2000);
          } else if (!this.wasResFound()) {
            setTimeout(() => {
              this.setState({
                message: "Reservation could not be found.",
                spinnerOn: 0,
              });
            }, 2000);
          }
        } else {
          if (!promptCheck) {
            this.setState({
              promptUser: 1,
            });
            promptCheck = true;
          }
          this.waitForInput();

          this.setState({
            message: "Please press the advance button.",
          });
        }
      } else if (this.state.nextScreen == 3) {
        if (this.wasResFound() && !this.isGarageFull() && this.wasScanned()) {
          this.setState({
            message: "Thank you for parking with us. Your spot number is:",
            spinnerOn: 0,
            displaySpotNum: 1,
            displayQRCode: 1,
          });
          reset = 1;
        } else if (
          this.wasResFound() &&
          this.isGarageFull() &&
          this.wasScanned()
        ) {
          this.setState({
            message: "The garage is full. Issuing rain-check...",
            spinnerOn: 1,
          });
          this.disableButton(2000);

          setTimeout(() => {
            this.setState({
              message: "Rain-check issued. We hope to see you again soon!",
              spinnerOn: 0,
            });
          }, 2000);
          reset = 1;
        } else if (this.state.hasMemNum && promptCheck) {
          this.setState({
            message:
              "Reservation number search complete. Please press the advance button.",
            spinnerOn: 0,
            promptMemNum: 1,
          });
          memCheck = true;
          this.waitNumpad();
        } else if (!this.state.hasMemNum && promptCheck) {
          this.setState({
            message:
              "You do not have a reservation number. Please exit the elevator terminal.",
            spinnerOn: 0,
          });
          promptCheck = false;
          reset = 1;
        } else {
          if (!this.wasResFound()) {
            if (!promptCheck) {
              this.setState({
                promptUser: 1,
              });
              promptCheck = true;
            }
            this.waitForInput();

            this.setState({
              message: "Please press the advance button.",
            });
          }
        }
      } else if (this.state.nextScreen == 4) {
        if (this.isValidMemNumber() && memCheck) {
          this.setState({
            message:
              "Valid reservation number entered. Searching for reservation...",
            spinnerOn: 1,
          });

          this.disableButton(2000);

          if (this.wasResFound()) {
            setTimeout(() => {
              this.setState({
                message: "Reservation found.",
                spinnerOn: 0,
              });
            }, 2000);
            promptCheck = false;
            memCheck = false;
          } else if (!this.wasResFound()) {
            setTimeout(() => {
              this.setState({
                message:
                  "Reservation could not be found. Please exit the elevator.",
                spinnerOn: 0,
              });
            }, 2000);
            promptCheck = false;
            reset = 1;
          }
        } else if (!this.isValidMemNumber() && memCheck) {
          this.setState({
            message:
              "Valid reservation number could not be found. Please exit the elevator.",
            spinnerOn: 0,
          });
          promptCheck = false;
          memCheck = false;
          reset = 1;
        } else if (
          this.wasResFound() &&
          !this.isGarageFull() &&
          this.isValidMemNumber()
        ) {
          this.setState({
            message: "Thank you for parking with us. Your spot number is:",
            displaySpotNum: 1,
            displayQRCode: 1,
            spinnerOn: 0,
          });
          reset = 1;
        } else if (
          this.wasResFound() &&
          !this.isGarageFull() &&
          this.isValidMemNumber()
        ) {
          this.setState({
            message: "The garage is full. Issuing rain-check...",
            spinnerOn: 1,
          });
          this.disableButton(2000);

          setTimeout(() => {
            this.setState({
              message: "Rain-check issued. We hope to see you again soon!",
              spinnerOn: 0,
            });
          }, 2000);
          reset = 1;
        } else if (this.state.hasMemNum && promptCheck) {
          this.setState({
            message:
              "Reservation number search complete. Please press the advance button.",
            spinnerOn: 0,
            promptMemNum: 1,
          });
          memCheck = true;
          this.waitNumpad();
        } else if (!this.state.hasMemNum && promptCheck) {
          this.setState({
            message:
              "You do not have a reservation number. Please exit the elevator terminal.",
            spinnerOn: 0,
          });
          promptCheck = false;
          reset = 1;
        }
      } else if (this.state.nextScreen == 5) {
        if (this.isValidMemNumber() && memCheck) {
          this.setState({
            message:
              "Valid reservation number entered. Searching for reservation...",
            spinnerOn: 1,
          });

          if (this.wasResFound()) {
            this.disableButton(2000);
            setTimeout(() => {
              this.setState({
                message: "Reservation found.",
                spinnerOn: 0,
              });
            }, 2000);
            promptCheck = false;
            memCheck = false;
          } else if (!this.wasResFound() && memCheck) {
            this.disableButton(4000);
            setTimeout(() => {
              this.setState({
                message:
                  "Reservation could not be found. Please exit the elevator.",
                spinnerOn: 0,
              });
            }, 4000);
            promptCheck = false;
            memCheck = false;
            reset = 1;
          }
        } else if (!this.isValidMemNumber()) {
          this.setState({
            message:
              "Valid reservation number could not be found. Please exit the elevator.",
            spinnerOn: 0,
          });
          promptCheck = false;
          reset = 1;
        } else if (this.wasResFound() && !this.isGarageFull()) {
          this.setState({
            message: "Thank you for parking with us. Your spot number is:",
            spinnerOn: 0,
            displaySpotNum: 1,
            displayQRCode: 1,
          });
          reset = 1;
        } else if (this.wasResFound() && this.isGarageFull()) {
          this.setState({
            message: "The garage is full. Issuing rain-check...",
            spinnerOn: 1,
          });
          this.disableButton(2000);

          setTimeout(() => {
            this.setState({
              message: "Rain-check issued. We hope to see you again soon!",
              spinnerOn: 0,
            });
          }, 2000);
          reset = 1;
        }
      }
    }
    return;
  };

  waitForInput = () => {
    //Waits for the "Yes"/"No" input to be decided by the user
    if (this.state.memRead === 0) {
      this.setState({ advanceColor: "gray" });
      setTimeout(this.waitForInput, 50);
      console.log("Waiting...");
      return;
    }
    this.setState({
      promptUser: 0,
      memRead: 0,
      advanceColor: "white",
    });
    return;
  };

  waitForPlateUpdate = () => {
    if (this.state.licensePlate === "No License Plate Found") {
      setTimeout(this.waitForPlateUpdate, 50);
      console.log("Waiting...");
    }
    return;
  };

  waitNumpad = () => {
    //Waits for a reservation number to be entered using the numpad
    if (inputMemNum === -1) {
      this.setState({ advanceColor: "gray" });
      setTimeout(this.waitNumpad, 50);
      console.log("Waiting forNumPad...");
      return;
    }
    console.log("MemNum value " + inputMemNum);
    this.setState({
      promptMemNum: 0,
      advanceColor: "white",
    });
    return;
  };

  wasScanned = () => {
    //Checks to see if a license plate was scanned successfully by reading the state.
    if (this.state.canScan == 0) {
      return false;
    } else {
      return true;
    }
  };

  wasResFound = () => {
    //Checks to see if a reservation was found.
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

  isValidMemNumber = () => {
    //Checks to see if a valid reservation number exists.
    //if number successfully found in database, return 1
    //otherwise, return 0
    if (this.state.validMemNum == 1) {
      return true;
    } else if (this.state.validMemNum == 0) {
      return false;
    }
  };

  isGarageFull = () => {
    //Checks to see if the garage is full or not
    if (this.state.garageFull == 1) {
      return true;
    } else if (this.state.garageFull == 0) {
      return false;
    }
  };

  updateResButton = () => {
    //Updates the "reservation found" button to be true or false
    if (this.state.resFound == 0) {
      this.setState({
        resFound: 1,
        resColor: "green",
      });
    } else if (this.state.resFound == 1) {
      this.setState({
        resFound: 0,
        resColor: "red",
      });
    }
  };

  updateScanButton = () => {
    //Updates the "license plate can be scanned" button to be true or false
    //  if (this.state.canScan == 0) {
    //  this.setState({
    //  canScan: 1,
    //scanColor: "green",
    //});
    //} else if (this.state.canScan == 1) {
    //this.setState({
    //canScan: 0,
    //scanColor: "red",
    //});
    //}
  };

  updateMemButton = () => {
    //Updates the "has a valid reservation number" button to be true or false
    if (this.state.validMemNum == 0) {
      this.setState({
        validMemNum: 1,
        memColor: "green",
      });
    } else if (this.state.validMemNum == 1) {
      this.setState({
        validMemNum: 0,
        memColor: "red",
      });
    }
  };

  updateGarageButton = () => {
    //Updates the "garage full" button to be true or false
    if (this.state.garageFull == 0) {
      this.setState({
        garageFull: 1,
        garageColor: "green",
      });
    } else if (this.state.garageFull == 1) {
      this.setState({
        garageFull: 0,
        garageColor: "red",
      });
    }
  };

  noButton = () => {
    //Sets the state of if the customer does not have a reservation number.
    this.setState({ hasMemNum: 0, memRead: 1 });
  };

  yesButton = () => {
    //Sets the state of if the customer does have a reservation number.
    this.setState({ hasMemNum: 1, memRead: 1 });
  };

  advanceButton = () => {
    //The button for advancing the screen.
    if (!reset) {
      this.setState({
        nextScreen: this.state.nextScreen + 1,
      });
    } else {
      this.setState({
        nextScreen: 1,
      });
    }

    this.advanceScreen();
  };

  disableButton = (time) => {
    //Disables a button from being pressed for a given amount of time.
    this.setState({
      buttonDisabled: 1,
      advanceColor: "gray",
    });
    setTimeout(() => {
      this.setState({ buttonDisabled: 0, advanceColor: "white" });
    }, time);
  };

  qrMessage = () => {
    return (
      "Thank you for parking with us. Your reservation information is:" +
      "\n" +
      "Spot Number: " +
      this.state.spotNum +
      "\n" +
      "Reservation Start Time: " +
      this.state.resStart +
      "\n" +
      "Reservation End Time: " +
      this.state.resEnd
    );
  };

  render() {
    return (
      <div>
        <div>
          {!this.state.promptUser ? (
            <div>
              {this.state.promptMemNum ? (
                <div>
                  <div
                    className="h1 text-black text-center"
                    style={{
                      marginTop: "5%",
                      marginBottom: "10%",
                      fontSize: 75,
                    }}
                  >
                    Please enter your reservation number, then press the check
                    button.
                  </div>
                  <div>
                    <NumPad.Number
                      onChange={(value) => {
                        inputMemNum = value;
                        this.setState({ referenceResID: inputMemNum });
                      }}
                      inline={true}
                      negative={false}
                      decimal={false}
                    />
                  </div>
                </div>
              ) : (
                <div>
                  <div
                    className="h1 text-black text-center"
                    style={{
                      marginTop: "15%",
                      fontSize: 75,
                    }}
                  >
                    {this.state.message}
                    <span>
                      {this.state.spinnerOn ? (
                        <div className="spinner-border m-2" role="status"></div>
                      ) : null}
                    </span>
                  </div>
                  <div>
                    {this.state.displaySpotNum ? (
                      <div
                        className="h1 text-black text-center"
                        style={{ fontSize: 100 }}
                      >
                        {this.state.spotNum}
                      </div>
                    ) : null}
                  </div>
                  <div>
                    {this.state.displayQRCode ? (
                      <div
                        style={{
                          height: 200,
                          width: "100%",
                          marginTop: "3%",
                        }}
                      >
                        <QRCode value={this.qrMessage()} />
                      </div>
                    ) : null}{" "}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div>
              <div>
                <h1
                  style={{ marginTop: "5%", marginBottom: "12%", fontSize: 75 }}
                >
                  Do you have a reservation number?
                </h1>
                <button
                  class="m-5 button bigButton"
                  style={{ backgroundColor: "green" }}
                  onClick={this.yesButton}
                >
                  Yes
                </button>
                <div class="divider" />
                <button
                  class="m-5 button bigButton"
                  style={{
                    marginTop: "15%",
                    marginLeft: "15%",
                    backgroundColor: "red",
                  }}
                  onClick={this.noButton}
                >
                  No
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="text-center">
          {devModeEnabled ? (
            <div>
              <button
                className="btn btn-secondary m-5"
                onClick={this.advanceButton}
                disabled={this.state.buttonPressed}
              >
                Start Elevator Sequence
              </button>
              <br></br>
              <form>
                <input
                  type="text"
                  name="topicBox"
                  placeholder="Enter License Plate Number"
                  value={this.state.referencePlate}
                  onChange={this.handleChange.bind(this)}
                />
              </form>
              <div>
                <button
                  type="button"
                  class="btn btn-circle btn-xl m-3 text-white"
                  onClick={this.updateScanButton}
                  disabled={this.state.buttonPressed}
                  style={{ backgroundColor: this.state.scanColor }}
                >
                  License Plate can be Scanned?
                </button>
                <button
                  type="button"
                  class="btn btn-circle btn-xl text-white"
                  onClick={this.updateResButton}
                  disabled={this.state.buttonPressed}
                  style={{ backgroundColor: this.state.resColor }}
                >
                  Customer has a Reservation?
                </button>
                <button
                  type="button"
                  class="btn btn-circle btn-xl m-3 text-white"
                  onClick={this.updateMemButton}
                  disabled={this.state.buttonPressed}
                  style={{ backgroundColor: this.state.memColor }}
                >
                  Valid Reservation Number?
                </button>

                <button
                  type="button"
                  class="btn btn-circle btn-xl text-white"
                  onClick={this.updateGarageButton}
                  disabled={this.state.buttonPressed}
                  style={{ backgroundColor: this.state.garageColor }}
                >
                  Garage Full?
                </button>
              </div>
              <div class="fixed-bottom">
                {this.state.buttonPressed ? (
                  <button
                    class="button2 bigButton text-dark float-right"
                    style={{
                      backgroundColor: this.state.advanceColor,
                    }}
                    onClick={this.advanceButton}
                    disabled={
                      !this.state.buttonPressed ||
                      this.state.promptUser ||
                      this.state.buttonDisabled ||
                      this.state.promptMemNum
                    }
                  >
                    Advance
                  </button>
                ) : null}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default message;
