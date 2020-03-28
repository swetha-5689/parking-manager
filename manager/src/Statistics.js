import React, { useState } from "react";
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
import DailyGraph from "./components/DailyGraph";
import YearlyGraph from "./components/YearlyGraph";
import WeeklyGraph from "./components/WeeklyGraph";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

var selectedOption;
function Daily() {
  return <DailyGraph></DailyGraph>;
}
function Weekly() {
  return <WeeklyGraph></WeeklyGraph>;
}
function Yearly() {
  return <YearlyGraph></YearlyGraph>;
}

class Statistics extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
    this.state = { selectedOption: 1 };
  }
  handleToggle(event) {
    this.setState({ selectedOption: event.target.value });
  }

  render() {
    return (
      <div>
        {/*Header*/}
        <h1 class="d-flex justify-content-center">Parking Garage Statistics</h1>

        {this.state.selectedOption == 1 && <DailyGraph></DailyGraph>}
        {this.state.selectedOption == 2 && <WeeklyGraph></WeeklyGraph>}
        {this.state.selectedOption == 3 && <YearlyGraph></YearlyGraph>}
        <Container className = "p-5">
          <Form>
            <InputGroup>
              <div onChange={this.handleToggle}>
                <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                  <ToggleButton
                    value={1}
                    checked={this.state.selectedOption === 1}
                  >
                    Daily
                  </ToggleButton>
                  <ToggleButton
                    value={2}
                    checked={this.state.selectedOption === 2}
                  >
                    Weekly
                  </ToggleButton>
                  <ToggleButton
                    value={3}
                    checked={this.state.selectedOption === 3}
                  >
                    Yearly
                  </ToggleButton>
                </ToggleButtonGroup>
              </div>
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
}

export default Statistics;
