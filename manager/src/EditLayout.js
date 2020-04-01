import React from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";

import ParkingSpot from "./ParkingSpot";
import axios from "axios";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

class EditLayout extends React.Component {
    constructor(props) {
        super(props);
        this.getData = this.getData.bind(this);
        this.getFloors = this.getFloors.bind(this);
        //this.getLayout = this.getLayout.bind(this);
        this.state = {
            data: [],
            floors: []
        };
    }
    componentDidMount() {
        axios.get("http://localhost:4000/api/floors/")
            .then(response => {
                this.setState({ floors: response.data });
            })
            .catch(error => {
                console.log(error);
            });
        axios.get("http://localhost:4000/api/spots/")
            .then(response => {
                this.setState({ data: response.data });
            })
            .catch(error => {
                console.log(error);
            });
    }
    getData(floorNum) {
        axios.get("http://localhost:4000/api/spots/floor/" + floorNum)
            .then(response => {
                this.setState({ data: response.data });
            })
            .catch(error => {
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
                    <Col><ParkingSpot key={i} floorNumber={this.state.floors[i].number} /> </Col>
                </>
            );
        });
    }
    render() {
        return (
            <Container className="mb-4">
                <Table style={{ height: 1, }} class="align-baseline">
                    {this.getFloors()}
                </Table>
            </Container>
        );
    }
}
export default EditLayout;
