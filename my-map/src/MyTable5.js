import React from "react";
import { Container, Row, Col } from "reactstrap";

const MyTable5 = props => {
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
          E1
        </Col>
        <Col className="justify-content-md-center border border-primary">
          E2
        </Col>
        <Col className="justify-content-md-center border border-primary">
          E3
        </Col>
        <Col className="justify-content-md-center border border-primary">
          E4
        </Col>
        <Col className="justify-content-md-center border border-primary">
          E5
        </Col>
      </Row>
      <Row className="justify-content-md-center border border-primary">
        <Col className="justify-content-md-center border border-primary">
          E6
        </Col>
        <Col className="justify-content-md-center border border-primary">
          E7
        </Col>
        <Col className="justify-content-md-center border border-primary">
          E8
        </Col>
        <Col className="justify-content-md-center border border-primary">
          E9
        </Col>
        <Col className="justify-content-md-center border border-primary">
          E10
        </Col>
      </Row>
    </Container>
  );
};

export default MyTable5;
