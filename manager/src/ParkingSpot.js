import React from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Overlay from "react-bootstrap/Overlay";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
class ParkingSpot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.getSpots = this.getSpots.bind(this);
  }
  componentDidMount() {
    axios.get("http://localhost:4000/api/spots/floor/" + this.props.floorNumber)
    .then(response => {
      this.setState({ data: response.data });
      console.log(this.props.floorNumber);
    })
    .catch(error => {
      console.log(error);
    });
  }
  getSpots() {
    return this.state.data.map((response, i) => {
      return (
        <>
        {!this.state.data[i].isVacant &&
        <OverlayTrigger obj = {response} key = {i}
          placement='center'
          overlay={
            <Tooltip>
              Floor Number: {this.state.data[i].floorNumber}<br></br>
              Vacancy Status: {this.state.data[i].isVacant.toString()}<br></br>
              Reserved: {this.state.data[i].isReserved.toString()}<br></br>
              Handicapped: {this.state.data[i].isHandicapped.toString()}<br></br>
              Premimum: {this.state.data[i].isPremium.toString()}
            </Tooltip>
          }
          >
            <Row>
          <Button variant="danger">Spot {this.state.data[i].spotNumber}</Button>
          </Row>
        </OverlayTrigger>
        }
        {this.state.data[i].isReserved && 
        <OverlayTrigger obj = {response} key = {i}
          placement='top'
          overlay={
            <Tooltip>
              Floor Number: {this.state.data[i].floorNumber}<br></br>
              Vacancy Status: {this.state.data[i].isVacant.toString()}<br></br>
              Reserved: {this.state.data[i].isReserved.toString()}<br></br>
              Handicapped: {this.state.data[i].isHandicapped.toString()}<br></br>
              Premimum: {this.state.data[i].isPremium.toString()}
            </Tooltip>
          }
          >
            <Row>
          <Button variant="warning">Spot {this.state.data[i].spotNumber}</Button>
          </Row>
        </OverlayTrigger>
        }
        {this.state.data[i].isVacant && 
        <OverlayTrigger obj = {response} key = {i}
          placement='top'
          overlay={
            <Tooltip>
              Floor Number: {this.state.data[i].floorNumber}<br></br>
              Vacancy Status: {this.state.data[i].isVacant.toString()}<br></br>
              Reserved: {this.state.data[i].isReserved.toString()}<br></br>
              Handicapped: {this.state.data[i].isHandicapped.toString()}<br></br>
              Premimum: {this.state.data[i].isPremium.toString()}
            </Tooltip>
          }
          >
            <Row>
          <Button variant="success">Spot {this.state.data[i].spotNumber}</Button>
          </Row>
        </OverlayTrigger>
        }
      </>
      );
    });
  }
  render() {
    return (
      <>
      {this.getSpots()}
      </>
    );
  }
}
export default ParkingSpot;
