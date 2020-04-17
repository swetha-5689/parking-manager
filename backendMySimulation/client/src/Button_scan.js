import React, { Component } from "react";
import { Button } from "reactstrap";

class ScanButton extends Component {
  render() {
    return (
      <div className="mb-2 text-center" style={{ marginTop: "5%" }}>
        <Button variant="contained" color="primary" size="lg">
          Enter Membership Number
        </Button>
      </div>
    );
  }
}

export default ScanButton;
