/* Charles Owen
* Page for Admin to view currently live price model
* and make changes to the four most important factors
* for the system.
*/
import React, { Component } from 'react';
import axios from 'axios';
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import { Container, Row, Col } from 'reactstrap';
import { Button } from 'reactstrap';
import { InputGroup, InputGroupText, InputGroupAddon, Input } from 'reactstrap';

export default class ViewCurrent extends Component {
    constructor(){
    super();
    this.onFormSubmit = this.onFormSubmit.bind(this);
    //Establish essential sub variables of state.
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
        dataLine: {
          labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12",
                    "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"],
          datasets: [
            {
              label: "Static Revenue",
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
              data: [65, 59, 80, 81, 56, 55, 40]
              
            },
            {
              label: "Live Model Revenue",
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
              data: [28, 48, 40, 19, 86, 27, 90]
            }
          ]
        }
      }
    }
    /*
    * On button press, push new input values to the live price model
    * database. Component will auto remount and refresh data with new
    * calculations. 
    */
    onFormSubmit(){
        console.log('Hi!!');
        let updateArray = {base_rate: this.state.new_base_rate, base_rate_mult: this.state.new_base_rate_mult,
                            min_thresh: this.state.new_min_thresh, max_thresh: this.state.new_max_thresh};
        //alert(JSON.stringify(updateArray, null, '  '));
        axios.post('http://localhost:5000/api/liveprice', updateArray).then(function(response){ 
            alert(JSON.stringify(response, null, '  '));
        })
       // 
    }
    /*
    * Initial state of graph on mount. Sends request to get current
    * model data from mongoDB
    */
      componentDidMount(){
          axios.get('http://localhost:5000/api/liverevenue').then(livePriceModel => this.setState({
            base_rate: livePriceModel.data[0].base_rate,
            base_rate_mult: livePriceModel.data[0].base_rate_mult,
            min_thresh: livePriceModel.data[0].min_thresh,
            max_thresh: livePriceModel.data[0].max_thresh,
            total_projected_revenue: livePriceModel.data[0].total_proj_rev,
            test: [1],
            new_base_rate: "",
            new_base_rate_mult: "",
            new_min_thresh: "",
            new_max_thresh: "",
            dataLine: {
              labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12",
                        "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"],
              datasets: [
                {
                  label: "Dynamic Revenue",
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
                  data: livePriceModel.data[0].live_revenue
                  
                },
                {
                  label: "Static Revenue",
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
                  data: livePriceModel.data[0].static_revenue
                }
              ]
            }
          }));
          //this data access reference. took forever to figure out
          
          //console.log(this.state.dataLine.labels);
      }
    render() {
      return (
        <Container>
        <Row>
            <MDBContainer>
            <h3 className="mt-5">Dynamic vs. Base Rate Revenue</h3>
            <Line data={this.state.dataLine} options={{ responsive: true }} />
            </MDBContainer>
        </Row>
        <Row>
            <Col>
            <p></p>
            </Col>
        </Row>
        <Row>
            <Col>
            <h5>Revenue based on admin defined values: ${this.state.total_projected_revenue}</h5>
            </Col>
        </Row>
        <Row>
            <Col sm="2">
            Base Rate:
            </Col>
            <Col>
            ${this.state.base_rate}/hr
            </Col>
        </Row>
        <Row>
            <Col sm="2">
            Rate Multiplier:
            </Col>
            <Col>
            {this.state.base_rate_mult}
            </Col>
        </Row>
        <Row>
            <Col sm="2">
            Min. Occ. Thresh:
            </Col>
            <Col>
            {this.state.min_thresh}%
            </Col>
        </Row>
        <Row>
            <Col sm="2">
            Max. Occ. Thresh:
            </Col>
            <Col>
            {this.state.max_thresh}%
            </Col>
        </Row>
        <Row>
            <p></p>
        </Row>
        <form onSubmit={this.onFormSubmit}>
        <Row>
        <Col sm='4'>
        <InputGroup>
            <InputGroupAddon addonType="prepend">
            <InputGroupText>$</InputGroupText>
            </InputGroupAddon>
            <Input 
            type = "text"
            name = "text"
            placeholder = "Base Rate" 
            onChange = {e => this.setState({new_base_rate: e.target.value})}
            />
        </InputGroup>
        </Col>
        </Row>
        <Row>
            <p></p>
        </Row>
        <Row>
        <Col sm='4'>
        <InputGroup>
            <InputGroupAddon addonType="prepend">
            <InputGroupText>x</InputGroupText>
            </InputGroupAddon>
            <Input 
            type = "text"
            name = "text"
            placeholder = "Base Rate Multiplier" 
            
            onChange = {e => this.setState({new_base_rate_mult: e.target.value})}/>
        </InputGroup>
        </Col>
        </Row>
        <Row>
            <p></p>
        </Row>
        <Row>
        <Col sm='4'>
        <InputGroup>
            <InputGroupAddon addonType="prepend">
            <InputGroupText>%</InputGroupText>
            </InputGroupAddon>
            <Input 
            type = "text"
            name = "text"
            placeholder = "Min. Threshold Percent" 
            
            onChange = {e => this.setState({new_min_thresh: e.target.value})}
            />
        </InputGroup>
        </Col>
        </Row>
        <Row>
            <p></p>
        </Row>
        <Row>
        <Col sm='4'>
        <InputGroup>
            <InputGroupAddon addonType="prepend">
            <InputGroupText>%</InputGroupText>
            </InputGroupAddon>
            <Input 
            type = "text"
            name = "text"
            placeholder = "Max. Threshold Percent" 
            
            onChange = {e => this.setState({new_max_thresh: e.target.value})}
            />
        </InputGroup>
        </Col>
        </Row>
        <Row>
            <p></p>
        </Row>
        <Col>
        <Row>
            <Button type = "submit" color="primary">Make Live</Button>
        </Row>
        </Col>
        </form>
        </Container>
      
      );
    }
  }