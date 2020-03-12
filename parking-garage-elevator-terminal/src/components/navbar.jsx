import React, { Component } from "react";
import SmartPark from "./SmartPark.png";

class navbar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div
          className="d-inline-block"
          style={{
            height: 75,
            width: "100%",
            backgroundColor: "rgba(255,0,0,1.0)"
          }}
        >
          <img
            src={SmartPark}
            class="rounded float-right"
            height="100%"
            alt="SmartPark Logo"
          />
          <div
            className="shadow p-3 mb-5 rounded"
            style={{ height: 75, width: "100%" }}
          >
            <div
              className="text-white text-left"
              style={{ fontSize: 20, marginTop: 6 }}
            >
              <strong>SmartPark Technologies</strong>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default navbar;
