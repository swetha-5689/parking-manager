import React, { Component } from "react";
import { Button } from "reactstrap";

class FailButton extends Component {
  render() {
    return (
      <div className="mb-2 text-center" style={{ marginTop: "5%" }}>
        <Button variant="contained" color="primary" size="lg">
          Not Found
        </Button>
      </div>
    );
  }
}

export default FailButton;
