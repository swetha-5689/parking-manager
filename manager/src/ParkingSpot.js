import React from "react";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import axios from "axios";
class ParkingSpot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.getSpots = this.getSpots.bind(this);
  }
  componentDidMount() {
    axios.get("https://cryptic-depths-70075.herokuapp.com/api/spots/floor/" + this.props.floorNumber)
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
      if (this.state.data[i].spotNumber % 10 != 0) {
      return (
        <>
        {!this.state.data[i].isVacant && 
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
            <td>
          <Button variant="danger">Spot {this.state.data[i].spotNumber}</Button>
          </td>
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
            <td>
          <Button variant="warning">Spot {this.state.data[i].spotNumber}</Button>
          </td>
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
            <td>
          <Button variant="success">Spot {this.state.data[i].spotNumber}</Button>
          </td>
        </OverlayTrigger>
        }
      </>
      );
      }
      else {
        return (
        <>
        {!this.state.data[i].isVacant && 
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
          ><><tr></tr>
            <td>
          <Button variant="danger">Spot {this.state.data[i].spotNumber}</Button>
          </td>
          </>
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
          ><>
          <tr></tr>
            <td>
          <Button variant="warning">Spot {this.state.data[i].spotNumber}</Button>
          </td>
          </>
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
          ><>
          <tr></tr>
            <td>
          <Button variant="success">Spot {this.state.data[i].spotNumber}</Button>
          </td>
          </>
        </OverlayTrigger>
        }
      </>
      );
      }
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
