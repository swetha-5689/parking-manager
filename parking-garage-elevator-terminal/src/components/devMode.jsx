import React, { Component } from "react";

let devModeEnabled = 1;
class devMode extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="fixed-bottom">
        <span>
          {devModeEnabled ? (
            <span className="rounded float-right text-danger">
              DEVMODE ENABLED
            </span>
          ) : null}
        </span>
      </div>
    );
  }
}
export default devMode;
export { devModeEnabled };
