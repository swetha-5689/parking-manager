import React, { Component } from "react";
import { Button } from "reactstrap";

class AfterScanButton extends Component {
  render() {
    return (
      <div className="mb-2 text-center">
        <Button variant="contained" color="primary" size="lg">
          Search
        </Button>
      </div>
    );
  }
}

export default AfterScanButton;
