import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Graph from "./components/Graph";
import DailyGraph from "./components/DailyGraph";
import YearlyGraph from "./components/YearlyGraph";
import WeeklyGraph from "./components/WeeklyGraph";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

/* The Statistics class creates the graphs for the Statistics page in the Manager Access Portal.*/
class Statistics extends React.Component {
    /* Statistics class constructor */

    constructor(props) {
        super(props); //handles calls to the parent constructor
        this.handleToggle = this.handleToggle.bind(this); //binds handleToggle to this
        this.state = { selectedOption: 1 }; // state property
    }
    //handleToggle sets state property to the assigned state value of the button change
    handleToggle(event) {
        this.setState({ selectedOption: event.target.value });
    }
    //Renders a stats graph each time information is modified or when a new button is picked
    render() {
        return (
            <div>
                {/*Header*/}
                <h1 className="d-flex justify-content-center">
                    Parking Garage Statistics
                </h1>
                {/* Creates corresponding graph for selected option*/}
                {this.state.selectedOption == 1 && <DailyGraph></DailyGraph>}
                {this.state.selectedOption == 2 && <WeeklyGraph></WeeklyGraph>}
                {this.state.selectedOption == 3 && <Graph></Graph>}
                {this.state.selectedOption == 4 && <YearlyGraph></YearlyGraph>}

                {/* Creates ToggleButtons for Daily, Weekly, Monthly, Yearly*/}
                <Container className="p-5">
                    <Form>
                        <InputGroup>
                            {/* Hanfl*/}
                            <div onChange={this.handleToggle}>
                                <ToggleButtonGroup
                                    type="radio"
                                    name="options"
                                    defaultValue={1}
                                >
                                    {/* Daily button = selectedOption 1 */}
                                    <ToggleButton
                                        value={1}
                                        checked={
                                            this.state.selectedOption === 1
                                        }
                                    >
                                        Daily
                                    </ToggleButton>
                                    {/* Weekly button = selectedOption 2 */}
                                    <ToggleButton
                                        value={2}
                                        checked={
                                            this.state.selectedOption === 2
                                        }
                                    >
                                        Weekly
                                    </ToggleButton>
                                    {/* Monthly button = selectedOption 3 */}
                                    <ToggleButton
                                        value={3}
                                        checked={
                                            this.state.selectedOption === 3
                                        }
                                    >
                                        Monthly
                                    </ToggleButton>
                                    {/* Yearly button = selectedOption 4 */}
                                    <ToggleButton
                                        value={4}
                                        checked={
                                            this.state.selectedOption === 4
                                        }
                                    >
                                        Yearly
                                    </ToggleButton>
                                </ToggleButtonGroup>
                                {/* Search Bar: Not yet functional, need to connect to backend*/}
                                <span>
                                    <FormControl
                                        type="text"
                                        placeholder="Enter Data Range"
                                        aria-label="Enter Data Range"
                                        aria-describedby="basic-addon1"
                                    />
                                </span>
                                {/* Search Button: Not yet functional, need to connect to backend*/}
                                <Button variant="outline-secondary">
                                    Search
                                </Button>
                            </div>
                        </InputGroup>
                    </Form>
                </Container>

                {/* End*/}
            </div>
        );
    }
}

export default Statistics;
