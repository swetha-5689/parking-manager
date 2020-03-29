//import React from 'react';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { Button } from 'reactstrap';


export default class PriceAdmin extends Component {
    render() {
      return (
       
        <Container>
            <Row>
                <Col>
                <Button href="/viewCurrent" color="primary" size="lg" block>View/Edit Price Model</Button>                    
                </Col>
          </Row>
          <Row>
              <p></p>
          </Row>
          <Row>
                <Col>
                <Button href="/createNew" color="primary" size="lg" block>Edit weights</Button>                    
                </Col>
          </Row>
          <Row>
              <p></p>
          </Row>
          <Row>
                <Col>
                <Button href="/priceModelComparison" color="primary" size="lg" block>Compare Historic Model with Results</Button>                    
                </Col>
          </Row>


        </Container>
        
      )
    }
  }