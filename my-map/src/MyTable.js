import React from "react";
import { Container, Row, Col } from "reactstrap";

const MyTable = props => {
  return (
    <Container
      className="themed-container border border-primary"
      fluid="lg"
      style={{
        backgroundColor: "lightblue",
        borderWidth: "thick",
        fontFamily: "Georgia",
        fontWeight: "bolder",
        fontSize: "larger",
        color: "purple"
      }}
    >
      <Row className="justify-content-md-center border border-primary">
        <Col className="justify-content-md-center border border-primary">
          A1
        </Col>
        <Col className="justify-content-md-center border border-primary">
          A2
        </Col>
        <Col className="justify-content-md-center border border-primary">
          A3
        </Col>
        <Col className="justify-content-md-center border border-primary">
          A4
        </Col>
        <Col className="justify-content-md-center border border-primary">
          A5
        </Col>
      </Row>
      <Row className="justify-content-md-center border border-primary">
        <Col className="justify-content-md-center border border-primary">
          A6
        </Col>
        <Col className="justify-content-md-center border border-primary">
          A7
        </Col>
        <Col className="justify-content-md-center border border-primary">
          A8
        </Col>
        <Col className="justify-content-md-center border border-primary">
          A9
        </Col>
        <Col className="justify-content-md-center border border-primary">
          A10
        </Col>
      </Row>
    </Container>
  );
};

export default MyTable;
