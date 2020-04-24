import React from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";

import ParkingSpot from "./ParkingSpot";
import axios from "axios";

/* This component allows the garage manager to view spots and their status. In the future,
it will allow them to add spots and delete spots. */
class EditLayout extends React.Component {
  constructor(props) {
    super(props);
    this.getData = this.getData.bind(this);
    this.getFloors = this.getFloors.bind(this);
    this.state = {
      data: [],
      floors: []
    };
  }
  componentDidMount() {
    axios
      .get("https://cryptic-depths-70075.herokuapp.com/api/floors/")
      .then((response) => {
        this.setState({ floors: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get("https://cryptic-depths-70075.herokuapp.com/api/spots/")
      .then((response) => {
        this.setState({ data: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  getData(floorNum) {
    axios
      .get(
        "https://cryptic-depths-70075.herokuapp.com/api/spots/floor/" + floorNum
      )
      .then((response) => {
        this.setState({ data: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getFloors() {
    return this.state.floors.map((response, i) => {
      return (
        <>
        
          <tr>
            <th obj={response}>Floor {this.state.floors[i].number}</th>
          </tr>
          <tr>
            <td><ParkingSpot key={i} floorNumber={this.state.floors[i].number} /></td>
          </tr>
        </>
      );
    });
  }
  render() {
    return (
      <Container className="mb-4">
        <Table style={{ height: 1 }} class="align-baseline">
          {this.getFloors()}
        </Table>
      </Container>
    );
  }
}
export default EditLayout;
