import React from "react";
import { Container, Row, Col } from "reactstrap";

const MyTable2 = props => {
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
          B1
        </Col>
        <Col className="justify-content-md-center border border-primary">
          B2
        </Col>
        <Col className="justify-content-md-center border border-primary">
          B3
        </Col>
        <Col className="justify-content-md-center border border-primary">
          B4
        </Col>
        <Col className="justify-content-md-center border border-primary">
          B5
        </Col>
      </Row>
      <Row className="justify-content-md-center border border-primary">
        <Col className="justify-content-md-center border border-primary">
          B6
        </Col>
        <Col className="justify-content-md-center border border-primary">
          B7
        </Col>
        <Col className="justify-content-md-center border border-primary">
          B8
        </Col>
        <Col className="justify-content-md-center border border-primary">
          B9
        </Col>
        <Col className="justify-content-md-center border border-primary">
          B10
        </Col>
      </Row>
    </Container>
  );
};

export default MyTable2;
