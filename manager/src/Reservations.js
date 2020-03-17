import React from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { useAuth0 } from "./react-auth0-spa";
function Reservations() {
  const { loading } = useAuth0();

  if (loading ) {
    return <div>Loading...</div>;
  }

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
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Reservation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Subscription</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>Walk-in</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Larry</td>
            <td>Bird</td>
            <td>@twitter</td>
            <td>One-Time</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Ross</td>
            <td>Geller</td>
            <td>@dinosaur</td>
            <td>One-Time</td>
          </tr>
        </tbody>
      </Table>
    </Container>
    </div>
  );
}
export default Reservations;
