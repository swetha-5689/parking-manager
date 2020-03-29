import React, { Component } from "react";

let devModeEnabled = 1; //When this value is 1, devmode- or demo mode- is on, when 0 it is off.
class devMode extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="fixed-bottom">
        <span>
          {devModeEnabled ? (
            <span className="rounded float-left text-danger">
              DEMO MODE ENABLED
            </span>
          ) : null}
        </span>
      </div>
    );
  }
}
export default devMode;
export { devModeEnabled };
