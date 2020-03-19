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
import Pagination from "react-bootstrap/Pagination";
import Graph from "./components/Graph";
import { Alert } from "react-bootstrap";
//import { BrowserRouter as Router, Route } from "react-router-dom";
function myClick() {
  alert("hello");
}
function Statistics () {
  return (
    <div style={{ justifyContent: "center" }}>
      {/*Header*/}
      <h1 style={{ justifyContent: "center", alignItems: "center" }}>
        Parking Garage Statistics
      </h1>
      <Graph></Graph>

      {/* Data Selection: OPTION 2*/}
      <Container>
        <Form>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <Button variant="outline-secondary"
              onClick={myClick}
              >Daily</Button>
              <Button variant="outline-secondary">Weekly</Button>
              <Button variant="outline-secondary">Monthly</Button>
            </InputGroup.Prepend>
            {/*Dropdown menu*/}
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
