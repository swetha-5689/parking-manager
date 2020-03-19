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

function GenerateGarage() {
  return (
    <div>
      <h1>Parking Garage Generator</h1>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="FLoors">Enter the Number of Floors Your Garage Has</span>
        </div>
        <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="Spots">Enter the Number of Parking Spots Per Floor</span>
        </div>
        <input type="text" class="form-control" placeholder="Username" oninput="createSpotEntry()" aria-label="Username" aria-describedby="basic-addon1"></input>
      </div>
      <h3>Look at Your Garage:</h3>
      <div id="demo"></div>

      <script>
        var x ="", i;
        for (i=1; i<=6; i++) {
          x = x + "<h" + i + ">Heading " + i + "</h" + i + ">";
        }
        document.getElementById("demo").innerHTML = x;
      </script>

      </div>       

      


      {/*<Table striped bordered hover>
        <thead>
          <tr>
            <td>Spot 1</td>
            <td>  Road  </td>
            <td>Spot 2</td>
            <td>  Road  </td>
            <td>Spot 3</td>
            <td>  Road  </td>
            <td>Spot 4</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Spot 5</td>
            <td>  Road  </td>
            <td>Spot 6</td>
            <td>  Road  </td>
            <td>Spot 7</td>
            <td>  Road  </td>
            <td>Spot 8</td>
          </tr>
          <tr>
            <td>Spot 9</td>
            <td>  Road  </td>
            <td>Spot 10</td>
            <td>  Road  </td>
            <td>Spot 11</td>
            <td>  Road  </td>
            <td>Spot 12</td>
          </tr>
        </tbody>
      </Table>*/}
  );
}
export default GenerateGarage;


