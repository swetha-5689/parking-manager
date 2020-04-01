import React from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";


function EditLayout() {
  return (
    <>
      <h1>Parking Garage Viewer</h1>

      <Container id="Floor 1">
        <div class="d-flex justify-content-center">
          <h3>Floor 1:</h3>
        </div>
        <Table style={{ height: 1, }} class="align-baseline">
          <thead>
            <tr>
              <td class="text-center" >
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">
                  <h6>Spot information!</h6>
                  <p>This spot is taken</p>
                </Tooltip>}>
                  <span className="d-inline-block">
                    <Button variant="danger">Spot A1</Button>
                  </span>
                </OverlayTrigger>

              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">
                  <h6>Spot information!</h6>
                  <p>This spot is reserved</p>
                </Tooltip>}>
                  <span className="d-inline-block">
                    <Button variant="warning">Spot A2</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">
                  <h6>Spot information!</h6><p>This spot is open for walk-in</p>
                </Tooltip>}>
                  <span className="d-inline-block">
                    <Button variant="success">Spot A3</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot A4</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot A5</Button>
                  </span>
                </OverlayTrigger>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot A6</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot A7</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot A8</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot A9</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot A10</Button>
                  </span>
                </OverlayTrigger>
              </td>
            </tr>
          </tbody>
        </Table>
        <Table style={{ height: 1, }} class="align-baseline">
          <thead>
            <tr>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot B1</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot B2</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot B3</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot B4</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot B5</Button>
                  </span>
                </OverlayTrigger>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot B6</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot B7</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot B8</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot B9</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <Button>Spot B10</Button>
              </td>
            </tr>
          </tbody>
        </Table>
        <Table style={{ height: 1, }} class="align-baseline">
          <thead>
            <tr>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot C1</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot C2</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot C3</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot C4</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot C5</Button>
                  </span>
                </OverlayTrigger>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot C6</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot C7</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot C8</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot C9</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot C10</Button>
                  </span>
                </OverlayTrigger>
              </td>
            </tr>
          </tbody>
        </Table>
        <Table style={{ height: 1, }} class="align-baseline">
          <thead>
            <tr>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot D1</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot D2</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot D3</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot D4</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot D5</Button>
                  </span>
                </OverlayTrigger>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot D6</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot D7</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot D8</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot D9</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot D10</Button>
                  </span>
                </OverlayTrigger>
              </td>
            </tr>
          </tbody>
        </Table>
        <Table style={{ height: 1, }} class="align-baseline">
          <thead>
            <tr>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot E1</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot E2</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot E3</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot E4</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot E5</Button>
                  </span>
                </OverlayTrigger>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot E6</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot E7</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot E8</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot E9</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot E10</Button>
                  </span>
                </OverlayTrigger>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
      <Container id="Floor 2">
        <div class="d-flex justify-content-center">
          <h3>Floor 2:</h3>
        </div>
        <Table style={{ height: 1, }} class="align-baseline">
          <thead>
            <tr>
              <td class="text-center" >
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot A1</Button>
                  </span>
                </OverlayTrigger>

              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot A2</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot A3</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot A4</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot A5</Button>
                  </span>
                </OverlayTrigger>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot A6</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot A7</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot A8</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot A9</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot A10</Button>
                  </span>
                </OverlayTrigger>
              </td>
            </tr>
          </tbody>
        </Table>
        <Table style={{ height: 1, }} class="align-baseline">
          <thead>
            <tr>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot B1</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot B2</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot B3</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot B4</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot B5</Button>
                  </span>
                </OverlayTrigger>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot B6</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot B7</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot B8</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot B9</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <Button>Spot B10</Button>
              </td>
            </tr>
          </tbody>
        </Table>
        <Table style={{ height: 1, }} class="align-baseline">
          <thead>
            <tr>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot C1</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot C2</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot C3</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot C4</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot C5</Button>
                  </span>
                </OverlayTrigger>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot C6</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot C7</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot C8</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot C9</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot C10</Button>
                  </span>
                </OverlayTrigger>
              </td>
            </tr>
          </tbody>
        </Table>
        <Table style={{ height: 1, }} class="align-baseline">
          <thead>
            <tr>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot D1</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot D2</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot D3</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot D4</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot D5</Button>
                  </span>
                </OverlayTrigger>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot D6</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot D7</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot D8</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot D9</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot D10</Button>
                  </span>
                </OverlayTrigger>
              </td>
            </tr>
          </tbody>
        </Table>
        <Table style={{ height: 1, }} class="align-baseline">
          <thead>
            <tr>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot E1</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot E2</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot E3</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot E4</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot E5</Button>
                  </span>
                </OverlayTrigger>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot E6</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot E7</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot E8</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot E9</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot E10</Button>
                  </span>
                </OverlayTrigger>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
      <Container id="Floor 3">
        <div class="d-flex justify-content-center">
          <h3>Floor 3:</h3>
        </div>
        <Table style={{ height: 1, }} class="align-baseline">
          <thead>
            <tr>
              <td class="text-center" >
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot A1</Button>
                  </span>
                </OverlayTrigger>

              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot A2</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot A3</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot A4</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot A5</Button>
                  </span>
                </OverlayTrigger>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot A6</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot A7</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot A8</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot A9</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot A10</Button>
                  </span>
                </OverlayTrigger>
              </td>
            </tr>
          </tbody>
        </Table>
        <Table style={{ height: 1, }} class="align-baseline">
          <thead>
            <tr>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot B1</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot B2</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot B3</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot B4</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot B5</Button>
                  </span>
                </OverlayTrigger>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot B6</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot B7</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot B8</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot B9</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <Button>Spot B10</Button>
              </td>
            </tr>
          </tbody>
        </Table>
        <Table style={{ height: 1, }} class="align-baseline">
          <thead>
            <tr>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot C1</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot C2</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot C3</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot C4</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot C5</Button>
                  </span>
                </OverlayTrigger>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot C6</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot C7</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot C8</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot C9</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot C10</Button>
                  </span>
                </OverlayTrigger>
              </td>
            </tr>
          </tbody>
        </Table>
        <Table style={{ height: 1, }} class="align-baseline">
          <thead>
            <tr>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot D1</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot D2</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot D3</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot D4</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot D5</Button>
                  </span>
                </OverlayTrigger>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot D6</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot D7</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot D8</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot D9</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot D10</Button>
                  </span>
                </OverlayTrigger>
              </td>
            </tr>
          </tbody>
        </Table>
        <Table style={{ height: 1, }} class="align-baseline">
          <thead>
            <tr>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot E1</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot E2</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot E3</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot E4</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot E5</Button>
                  </span>
                </OverlayTrigger>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot E6</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot E7</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot E8</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot E9</Button>
                  </span>
                </OverlayTrigger>
              </td>
              <td class="text-center">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Spot information!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button>Spot E10</Button>
                  </span>
                </OverlayTrigger>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
}
export default EditLayout;
