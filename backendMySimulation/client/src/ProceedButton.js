import React, { Component } from "react";
import { Button } from "reactstrap";

class ProceedButton extends Component {
  render() {
    return (
      <div className="mb-2 text-center" style={{ marginTop: "5%" }}>
        <Button variant="contained" color="primary" size="lg">
          Proceed
        </Button>
      </div>
    );
  }
}

export default ProceedButton;
/*
<Button color="secondary">secondary</Button>{' '}
<Button color="success">success</Button>{' '}
<Button color="info">info</Button>{' '}
<Button color="warning">warning</Button>{' '}
<Button color="danger">danger</Button>{' '}
<Button color="link">link</Button>
*/
