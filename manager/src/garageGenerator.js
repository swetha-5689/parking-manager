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
        <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="Rows">Enter the Number of Rows each floor has</span>
        </div>
        <input type="text" class="form-control" placeholder="Number of Rows" oninput="createGarage()" aria-label="Username" aria-describedby="basic-addon1"></input>
      </div>
      <h3>Look at Your Garage:</h3>
      <div id="demo"> </div>
      {
        function createGarage(){
          var x = "";
          var i, j = 1;
          var rows = document.getElementById("Rows").nodeValue;
          var spots = document.getElementById("Spots").nodeValue;
    
          for (i = 1; i <= rows; i++) {
            x = x + "<tr>";
            for (j = j; j <= spots; j++) {
              x = x + "<td>     Spot " + j + "     </td>";
              x = x + "<td>     Road     </td>";
            }
            x = x + "</tr>";
          }
          document.getElementById("demo").innerHTML = "<Table>"+x+"</Table>";
        }
        
      }


    <Table striped bordered hover>
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
    </Table>
    </div >
  );
}
export default GenerateGarage;
/*
function creategarage() {
  var x = "";
  var i, j = 1;
  var rows = document.getElementById("Rows").nodeValue;
  var spots = document.getElementById("Spots").nodeValue;

  for (i = 1; i <= rows; i++) {
    x = x + "<tr>";
    for (j = j; j <= spots; j++) {
      x = x + "<td>     Spot " + j + "     </td>";
      x = x + "<td>     Road     </td>";
    }
    x = x + "</tr>";
  }
  document.getElementById("demo").innerHTML = x;
}

*/


