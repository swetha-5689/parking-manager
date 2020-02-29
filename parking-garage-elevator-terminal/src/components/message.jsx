import React, { Component } from "react";
import SmartPark from "./SmartPark.png";

class message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Welcome to SmartPark. Please approach the elevator terminal.",
      status: 0
    };
  }

  updateContent = () => {
    this.setState({
      message: "Scanning license plate, do not press the button..."
    });
    let timer = setTimeout(() => {
      this.setState({ message: "Reservation found. Thank you for parking." });
    }, 5000);
    timer = setTimeout(() => {
      this.setState({
        message: "Welcome to SmartPark. Please approach the elevator terminal."
      });
    }, 12000);
  };

  render() {
    return (
      <div>
        <div
          className="d-inline-block"
          style={{
            height: 75,
            width: "100%",
            backgroundColor: "rgba(255,0,0,0.8)"
          }}
        >
          <div
            className="shadow p-3 mb-5 rounded"
            style={{ height: 75, width: "100%" }}
          >
            <div
              className="text-white text-left"
              style={{ fontSize: 20, marginTop: 6 }}
            >
              SmartPark Technologies
            </div>
            <div
              className="text-right"
              style={{ width: "20%", height: "auto" }}
            >
              <img src={SmartPark} alt="SmartPark Logo" />
            </div>
          </div>
        </div>
        <div className="h1 text-black text-center" style={{ marginTop: "20%" }}>
          {this.state.message}
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
        <div className="text-center">
          <button
            className="btn btn-secondary m-5"
            onClick={this.updateContent}
          >
            Click Me
          </button>
        </div>
      </div>
    );
  }
}
export default message;
