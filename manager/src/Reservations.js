import React from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
//import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import ReservationTableRow from "./ReservationRow"
//import { useAuth0 } from "./react-auth0-spa";
import axios from "axios";
class Reservations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.changeData = this.changeData.bind(this);
  }
  componentDidMount() {
    axios.get('http://localhost:4000/api/res/')
        .then(response => {
            this.setState({data: response.data});
        })
        .catch(function (error) {
            console.log(error);
        })
  }
  changeData() {
    axios.get('http://localhost:4000/api/res/')
        .then(response => {
            this.setState({data: response.data});
        })
        .catch(function (error) {
            console.log(error);
        })
  }
  resTable() {
    return this.state.data.map((response, i) => {
      return <ReservationTableRow obj={response} key={i} data = {this.changeData}/>;
    });
  }
  render() {
    return (
      <div>
        <Container>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                Username
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Search"
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>
        </Container>
        <Container className="mb-4">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
                <th>Reservation Type</th>
                <th>Paid Status</th>
                <th>Stay Period</th>
                <th>Reservation End Time</th>
                <th>Confirmation Number</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data === [] && <td>no data to show</td>}
            {this.state.data !== [] && this.resTable()}             
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}
export default Reservations;
