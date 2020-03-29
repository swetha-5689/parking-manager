/* Charles Owen
* Comparison graph page. No mount data, uses
* date picker to retrieve relevent data and
* calculates using backend API calls.
*/
//import React from 'react';
import React, { Component } from 'react';
//import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

export default class PriceModelComparison extends Component {
  constructor(){
  super();
  this.handleDateChange = this.handleDateChange.bind(this);
    this.state = {
        base_rate: "Try refreshing",
        base_rate_mult: "Try refreshing",
        min_thresh: "Try refreshing",
        max_thresh: "Try refreshing",
        test: [1],
        new_base_rate: "",
        new_base_rate_mult: "",
        new_min_thresh: "",
        new_max_thresh: "",
        total_projected_revenue: "",
        actual_revenue_total: "",
        startDate: new Date(),
        dataLine: {
          labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12",
                    "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"],
          datasets: [
            {
              label: "Projected Revenue",
              fill: true,
              lineTension: 0.3,
              backgroundColor: "rgba(225, 204,230, .3)",
              borderColor: "rgb(205, 130, 158)",
              borderCapStyle: "butt",
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: "miter",
              pointBorderColor: "rgb(205, 130,1 58)",
              pointBackgroundColor: "rgb(255, 255, 255)",
              pointBorderWidth: 10,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgb(0, 0, 0)",
              pointHoverBorderColor: "rgba(220, 220, 220,1)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: []
              
            },
            {
              label: "Actual Revenue",
              fill: true,
              lineTension: 0.3,
              backgroundColor: "rgba(184, 185, 210, .3)",
              borderColor: "rgb(35, 26, 136)",
              borderCapStyle: "butt",
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: "miter",
              pointBorderColor: "rgb(35, 26, 136)",
              pointBackgroundColor: "rgb(255, 255, 255)",
              pointBorderWidth: 10,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgb(0, 0, 0)",
              pointHoverBorderColor: "rgba(220, 220, 220, 1)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: []
            }
          ]
        },
        dataLine2: {
          labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12",
                    "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"],
          datasets: [
            {
              label: "Actual Occupancy",
              fill: true,
              lineTension: 0.3,
              backgroundColor: "rgba(225, 204,230, .3)",
              borderColor: "rgb(205, 130, 158)",
              borderCapStyle: "butt",
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: "miter",
              pointBorderColor: "rgb(205, 130,1 58)",
              pointBackgroundColor: "rgb(255, 255, 255)",
              pointBorderWidth: 10,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgb(0, 0, 0)",
              pointHoverBorderColor: "rgba(220, 220, 220,1)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: []
              
            },
            {
              label: "Occupancy Weights",
              fill: true,
              lineTension: 0.3,
              backgroundColor: "rgba(184, 185, 210, .3)",
              borderColor: "rgb(35, 26, 136)",
              borderCapStyle: "butt",
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: "miter",
              pointBorderColor: "rgb(35, 26, 136)",
              pointBackgroundColor: "rgb(255, 255, 255)",
              pointBorderWidth: 10,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgb(0, 0, 0)",
              pointHoverBorderColor: "rgba(220, 220, 220, 1)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: []
            }
          ]
        }
      }
    }
    appendLeadingZeros(value){
      if(value <= 9){
        return "0"+value;
      }
      return value;
    }
    handleDateChange(dateObj){
      this.setState({startDate: dateObj});
      let day = this.appendLeadingZeros(dateObj.getDate());
      let month = this.appendLeadingZeros(dateObj.getMonth()+1);
      let year = this.appendLeadingZeros(dateObj.getFullYear());
      let d = year + "-" + month + "-" + day;
      console.log(d);
      axios.post('http://localhost:5000/api/historic', {date: d}).then(historicmodel => 
          this.setState({
            base_rate: historicmodel.data[0].base_rate,
            base_rate_mult: historicmodel.data[0].base_rate_mult,
            min_thresh: historicmodel.data[0].min_thresh,
            max_thresh: historicmodel.data[0].max_thresh,
            total_projected_revenue: historicmodel.data[0].total_proj_rev,
            actual_revenue_total: historicmodel.data[0].actual_revenue_total,
            dataLine: {
              labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12",
                        "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"],
              datasets: [
                {
                  label: "Projected Revenue",
                  fill: true,
                  lineTension: 0.3,
                  backgroundColor: "rgba(225, 204,230, .3)",
                  borderColor: "rgb(205, 130, 158)",
                  borderCapStyle: "butt",
                  borderDash: [],
                  borderDashOffset: 0.0,
                  borderJoinStyle: "miter",
                  pointBorderColor: "rgb(205, 130,1 58)",
                  pointBackgroundColor: "rgb(255, 255, 255)",
                  pointBorderWidth: 10,
                  pointHoverRadius: 5,
                  pointHoverBackgroundColor: "rgb(0, 0, 0)",
                  pointHoverBorderColor: "rgba(220, 220, 220,1)",
                  pointHoverBorderWidth: 2,
                  pointRadius: 1,
                  pointHitRadius: 10,
                  data: historicmodel.data[0].live_revenue
                  
                },
                {
                  label: "Actual Revenue",
                  fill: true,
                  lineTension: 0.3,
                  backgroundColor: "rgba(184, 185, 210, .3)",
                  borderColor: "rgb(35, 26, 136)",
                  borderCapStyle: "butt",
                  borderDash: [],
                  borderDashOffset: 0.0,
                  borderJoinStyle: "miter",
                  pointBorderColor: "rgb(35, 26, 136)",
                  pointBackgroundColor: "rgb(255, 255, 255)",
                  pointBorderWidth: 10,
                  pointHoverRadius: 5,
                  pointHoverBackgroundColor: "rgb(0, 0, 0)",
                  pointHoverBorderColor: "rgba(220, 220, 220, 1)",
                  pointHoverBorderWidth: 2,
                  pointRadius: 1,
                  pointHitRadius: 10,
                  data: historicmodel.data[0].actual_revenue
                }
              ]
            },
            dataLine2: {
              labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12",
                        "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"],
              datasets: [
                {
                  label: "Actual Occupancy",
                  fill: true,
                  lineTension: 0.3,
                  backgroundColor: "rgba(225, 204,230, .3)",
                  borderColor: "rgb(205, 130, 158)",
                  borderCapStyle: "butt",
                  borderDash: [],
                  borderDashOffset: 0.0,
                  borderJoinStyle: "miter",
                  pointBorderColor: "rgb(205, 130,1 58)",
                  pointBackgroundColor: "rgb(255, 255, 255)",
                  pointBorderWidth: 10,
                  pointHoverRadius: 5,
                  pointHoverBackgroundColor: "rgb(0, 0, 0)",
                  pointHoverBorderColor: "rgba(220, 220, 220,1)",
                  pointHoverBorderWidth: 2,
                  pointRadius: 1,
                  pointHitRadius: 10,
                  data: historicmodel.data[0].occupancy_percent
                  
                },
                {
                  label: "Occupancy Weights",
                  fill: true,
                  lineTension: 0.3,
                  backgroundColor: "rgba(184, 185, 210, .3)",
                  borderColor: "rgb(35, 26, 136)",
                  borderCapStyle: "butt",
                  borderDash: [],
                  borderDashOffset: 0.0,
                  borderJoinStyle: "miter",
                  pointBorderColor: "rgb(35, 26, 136)",
                  pointBackgroundColor: "rgb(255, 255, 255)",
                  pointBorderWidth: 10,
                  pointHoverRadius: 5,
                  pointHoverBackgroundColor: "rgb(0, 0, 0)",
                  pointHoverBorderColor: "rgba(220, 220, 220, 1)",
                  pointHoverBorderWidth: 2,
                  pointRadius: 1,
                  pointHitRadius: 10,
                  data: historicmodel.data[0].actual_occupancy_percent
                }
              ]
            }
          }));
        }
    render() {
      return (
        <Container>
          <MDBContainer>
            <h3 className="mt-5">Projected vs. Actual Revenue</h3>
            <Line data={this.state.dataLine} options={{ responsive: true }} />
            <h3 className="mt-5">Actual Occupacy Rate vs. Occupancy Weights </h3>
            <Line data={this.state.dataLine2} options={{ responsive: true }} />
            </MDBContainer>
          <Row>
            <h5>Select a date to review:</h5>
          </Row>
          <Row>
            <DatePicker 
                  selected={this.state.startDate}  
                  onChange={this.handleDateChange}
                  dateFormat="yyyy-MM-dd"/>
          </Row>
          <Row>
            <p></p>
          </Row>
          <Row>
            <Col>
            <h5>Projected Revenue for the Day: ${this.state.total_projected_revenue}</h5>
            </Col>
          </Row>
          <Row>
            <Col>
            <h5>Actual Revenue for the Day: ${this.state.actual_revenue_total}</h5>
            </Col>
          </Row>
          <Row>
            <Col sm="3">
            Base Rate:
            </Col>
            <Col>
            ${this.state.base_rate}/hr
            </Col>
          </Row>
          <Row>
            <Col sm="3">
            Rate Multiplier:
            </Col>
            <Col>
            {this.state.base_rate_mult}
            </Col>
        </Row>
        <Row>
            <Col sm="3">
            Min. Occ. Thresh:
            </Col>
            <Col>
            {this.state.min_thresh}%
            </Col>
        </Row>
        <Row>
            <Col sm="3">
            Max. Occ. Thresh:
            </Col>
            <Col>
            {this.state.max_thresh}%
            </Col>
        </Row>

        </Container>
      );
    }
  }
