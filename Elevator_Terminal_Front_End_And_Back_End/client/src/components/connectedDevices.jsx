import React, { Component } from "react";
import { devModeEnabled } from "./devMode";
import MessageComp from "./message";
import message from "./message";

//File for determining which devices/components are connected to the SmartPark Elevator Terminal Front End

let devicesConnected = 0;

class connectedDevices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cameraConnected: "❌",
      plateScannerConnected: "❌",
      weightSensorConnected: "❌",
      databaseConnected: "❌",
    };
  }

  getDevicesConnected = () => {
    //Function which checks the states of the connectedDevices class. When these are on,
    //A "1" is transmitted and the elevator terminal advances to the main elevator screen.
    if (
      this.state.cameraConnected == "✔" &&
      this.state.plateScannerConnected == "✔" &&
      this.state.weightSensorConnected == "✔" &&
      this.state.databaseConnected == "✔"
    ) {
      devicesConnected = 1; //All devices are connected, advance the screen.
    } else {
      devicesConnected = 1; //Not all devices are connected, stay on this screen.
    }
  };

  updateCameraStatus = () => {
    //Fuction for updating the Camera Status
    if (this.state.cameraConnected == "❌") {
      this.setState({
        cameraConnected: "✔",
      });
    } else {
      this.setState({
        cameraConnected: "❌",
      });
    }
  };

  updatePlateStatus = () => {
    //Fuction for updating the License Plate Scanner Status
    if (this.state.plateScannerConnected == "❌") {
      this.setState({
        plateScannerConnected: "✔",
      });
    } else {
      this.setState({
        plateScannerConnected: "❌",
      });
    }
  };

  updateWeightStatus = () => {
    //Fuction for updating the Weight Sensor Status
    if (this.state.weightSensorConnected == "❌") {
      this.setState({
        weightSensorConnected: "✔",
      });
    } else {
      this.setState({
        weightSensorConnected: "❌",
      });
    }
  };

  updateDatabaseStatus = () => {
    //Fuction for updating the Database Status
    if (this.state.databaseConnected == "❌") {
      this.setState({
        databaseConnected: "✔",
      });
    } else {
      this.setState({
        databaseConnected: "❌",
      });
    }
  };

  render() {
    return (
      <div>
        <script> {this.getDevicesConnected()}</script>
        {!devicesConnected ? (
          <div>
            <div class="text-center m-5">
              <h1 class="text-center">
                SmartPark Elevator Terminal Boot Setup:
              </h1>
              <h2 style={{ marginTop: "3%" }}>
                Could not boot properly. Check the status of the following
                devices:
              </h2>
            </div>
            <div style={{ marginTop: "5%" }}>
              <h1 class="text-center">Camera</h1>
              <h2 class="text-center">{this.state.cameraConnected}</h2>
            </div>
            <div style={{ marginTop: "3%" }}>
              <h1 class="text-center">Database</h1>
              <h2 class="text-center">{this.state.databaseConnected}</h2>
            </div>
            <div style={{ marginTop: "3%" }}>
              <h1 class="text-center">License Plate Scanner</h1>
              <h2 class="text-center">{this.state.plateScannerConnected}</h2>
            </div>
            <div style={{ marginTop: "3%" }}>
              <h1 class="text-center">Weight Sensor</h1>
              <h2 class="text-center">{this.state.weightSensorConnected}</h2>
            </div>

            {devModeEnabled ? (
              <div
                class="fixed-bottom"
                style={{ marginTop: "3", marginBottom: "0.5%" }}
              >
                <button
                  class="btn-secondary"
                  style={{ float: "right" }}
                  onClick={this.updateWeightStatus}
                >
                  Weight Sensor Status
                </button>
                <button
                  class="btn-secondary"
                  style={{ float: "right" }}
                  onClick={this.updatePlateStatus}
                >
                  License Plate Scanner Status
                </button>

                <button
                  class="btn-secondary"
                  style={{ float: "right" }}
                  onClick={this.updateDatabaseStatus}
                >
                  Database Status
                </button>
                <button
                  class="btn-secondary"
                  style={{ float: "right" }}
                  onClick={this.updateCameraStatus}
                >
                  Camera Status
                </button>
              </div>
            ) : null}
          </div>
        ) : (
          <div class="text-center">
            <MessageComp />
          </div>
        )}
      </div>
    );
  }
}
export default connectedDevices;
