import React, { Component } from "react";
import { devModeEnabled } from "./devMode";
import MessageComp from "./message";
import message from "./message";

let devicesConnected = 0;

class connectedDevices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cameraConnected: "❌",
      plateScannerConnected: "❌",
      weightSensorConnected: "❌",
      databaseConnected: "❌"
    };
  }

  getDevicesConnected = () => {
    if (
      this.state.cameraConnected == "✔" &&
      this.state.plateScannerConnected == "✔" &&
      this.state.weightSensorConnected == "✔" &&
      this.state.databaseConnected == "✔"
    ) {
      devicesConnected = 1;
    } else {
      devicesConnected = 1;
    }
  };

  updateCameraStatus = () => {
    if (this.state.cameraConnected == "❌") {
      this.setState({
        cameraConnected: "✔"
      });
    } else {
      this.setState({
        cameraConnected: "❌"
      });
    }
  };

  updatePlateStatus = () => {
    if (this.state.plateScannerConnected == "❌") {
      this.setState({
        plateScannerConnected: "✔"
      });
    } else {
      this.setState({
        plateScannerConnected: "❌"
      });
    }
  };

  updateWeightStatus = () => {
    if (this.state.weightSensorConnected == "❌") {
      this.setState({
        weightSensorConnected: "✔"
      });
    } else {
      this.setState({
        weightSensorConnected: "❌"
      });
    }
  };

  updateDatabaseStatus = () => {
    if (this.state.databaseConnected == "❌") {
      this.setState({
        databaseConnected: "✔"
      });
    } else {
      this.setState({
        databaseConnected: "❌"
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
              <h1 class="text-center">License Plate Scanner</h1>
              <h2 class="text-center">{this.state.plateScannerConnected}</h2>
            </div>
            <div style={{ marginTop: "3%" }}>
              <h1 class="text-center">Weight Sensor</h1>
              <h2 class="text-center">{this.state.weightSensorConnected}</h2>
            </div>
            <div style={{ marginTop: "3%" }}>
              <h1 class="text-center">Database</h1>
              <h2 class="text-center">{this.state.databaseConnected}</h2>
            </div>
            <button onClick={this.updateDatabaseStatus}>DB</button>
            <button onClick={this.updateCameraStatus}>CM</button>
            <button onClick={this.updatePlateStatus}>PL</button>
            <button onClick={this.updateWeightStatus}>WH</button>
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
