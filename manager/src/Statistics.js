import React from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import FormGroup from "react-bootstrap/FormGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";

function Statistics() {
  return (
    <div>
      {/*Start*/}
      <h1>Parking Garage Statistics</h1>
      <Container>
        {/*Data Table*/}
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Month</th>
              <th>Overstays</th>
              <th>No-Shows</th>
              <th>Availabilities</th>
              <th>Occupancies</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>100</td>
              <td>10</td>
              <td>200</td>
              <td>50</td>
            </tr>
            <tr>
              <td>2</td>
              <td>100</td>
              <td>10</td>
              <td>200</td>
              <td>50</td>
            </tr>
            <tr>
              <td>3</td>
              <td>100</td>
              <td>10</td>
              <td>200</td>
              <td>50</td>
            </tr>
            <tr>
              <td>4</td>
              <td>100</td>
              <td>10</td>
              <td>200</td>
              <td>50</td>
            </tr>
            <tr>
              <td>5</td>
              <td>100</td>
              <td>10</td>
              <td>200</td>
              <td>50</td>
            </tr>
            <tr>
              <td>6</td>
              <td>100</td>
              <td>10</td>
              <td>200</td>
              <td>50</td>
            </tr>
            <tr>
              <td>7</td>
              <td>100</td>
              <td>10</td>
              <td>200</td>
              <td>50</td>
            </tr>
            <tr>
              <td>8</td>
              <td>100</td>
              <td>10</td>
              <td>200</td>
              <td>50</td>
            </tr>
            <tr>
              <td>9</td>
              <td>100</td>
              <td>10</td>
              <td>200</td>
              <td>50</td>
            </tr>
            <tr>
              <td>10</td>
              <td>100</td>
              <td>10</td>
              <td>200</td>
              <td>50</td>
            </tr>
            <tr>
              <td>11</td>
              <td>100</td>
              <td>10</td>
              <td>200</td>
              <td>50</td>
            </tr>
            <tr>
              <td>12</td>
              <td>100</td>
              <td>10</td>
              <td>200</td>
              <td>50</td>
            </tr>
          </tbody>
        </Table>
      </Container>
      {/* Data Selection: OPTION 1*/}
      <Container>
        <Form inline>
          <ButtonToolbar
            className="mb-3"
            aria-label="Toolbar with Button groups"
          >
            <ButtonGroup className="mr-2" aria-label="First group">
              <Button>Daily</Button>
              <Button>Weekly</Button>
              <Button>Monthly</Button>
              <DropdownButton
                as={ButtonGroup}
                title="By Year"
                id="bg-nested-dropdown"
              >
                <Dropdown.Item eventKey="1">2020</Dropdown.Item>
                <Dropdown.Item eventKey="2">2021</Dropdown.Item>
              </DropdownButton>
            </ButtonGroup>
            <InputGroup>
              <FormControl
                type="text"
                placeholder="Enter Data Range"
                aria-label="Enter Data Range"
                aria-describedby="btnGroupAddon"
              />
            </InputGroup>
            {/* Search Button */}
            <Button variant="outline-success">Search</Button>
          </ButtonToolbar>
        </Form>
      </Container>
      {/* Data Selection: OPTION 2*/}
      <Container>
        <Form>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <Button variant="outline-secondary">Daily</Button>
              <Button variant="outline-secondary">Weekly</Button>
              <Button variant="outline-secondary">Monthly</Button>
            </InputGroup.Prepend>
            <DropdownButton
              as={InputGroup.Prepend}
              variant="outline-secondary"
              title="By Year"
              id="input-group-dropdown-1"
            >
              <Dropdown.Item href="#">2019</Dropdown.Item>
              <Dropdown.Item href="#">2020</Dropdown.Item>
              <Dropdown.Item href="#">2021</Dropdown.Item>
              <Dropdown.Divider />
            </DropdownButton>
            <FormControl
              type="text"
              placeholder="Enter Data Range"
              aria-label="Enter Data Range"
              aria-describedby="basic-addon1"
            />
            <InputGroup.Append>
              <Button variant="outline-secondary">Search</Button>
            </InputGroup.Append>
          </InputGroup>
        </Form>
      </Container>
      {/* End*/}
    </div>
  );
}
export default Statistics;
