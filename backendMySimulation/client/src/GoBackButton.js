import React, { Component } from "react";
import { Button } from "reactstrap";

class GoBackButton extends Component {
  render() {
    return (
      <div className="mb-2 text-center" style={{ marginTop: "5%" }}>
        <Button variant="contained" color="primary" size="lg">
          Return to Main Page
        </Button>
      </div>
    );
  }
}

export default GoBackButton;
