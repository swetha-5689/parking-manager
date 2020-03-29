import React, { Component } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import {
    withRouter
  } from 'react-router-dom';
class ReservationTableRow extends React.Component {
    constructor(props) {
        super(props);
        this.deleteRes = this.deleteRes.bind(this);
    }
    deleteRes() {
        axios.all([
        axios.delete('http://localhost:4000/api/res/' + this.props.obj._id),
        axios.get('http://localhost:4000/api/res/')])
        .then((responseArr) => {
            this.setState({data: responseArr.data});
            }).catch((error) => {
                console.log(error)
        });
    }
    render() {
        return (
            <tr>
                <td>{this.props.obj.custFName}</td>
                <td>{this.props.obj.custLName}</td>
                <td>{this.props.obj.username}</td>
                <td>{this.props.obj.type}</td>
                <td>{this.props.obj.Paid.toString()}</td>
                <td>{this.props.obj.startTime} - {this.props.obj.endTime}</td>
                <td>{this.props.obj.reserveTime}</td>
                <td>{this.props.obj.resID.toString()}</td>
                <td>
                    <Button size="sm" variant="danger" onClick={this.deleteRes}>Delete</Button>
                    {!this.props.obj.Paid && <Button size="sm" variant="primary">Bill</Button> }
                </td>
            </tr>
        );
    }
}
export default withRouter(ReservationTableRow);