import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "reactstrap";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "./MyTable1.css";

class MyTable1 extends Component {
  render() {
    return (
      <div>
        <BootstrapTable data={this.props.data} trClassName="tr-style">
          <TableHeaderColumn dataField="A1">A1</TableHeaderColumn>
          <TableHeaderColumn dataField="A2">A2</TableHeaderColumn>
          <TableHeaderColumn dataField="A3">A3</TableHeaderColumn>
          <TableHeaderColumn dataField="A4">A3</TableHeaderColumn>
          <TableHeaderColumn dataField="A5">A3</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default MyTable1;
