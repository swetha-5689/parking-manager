import React from "react";
import { Bar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import axios from "axios";
import Moment from "react-moment";
import Alert from 'react-bootstrap/Alert';
class ChartsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataBar: {
        labels: [
          "Overstays",
          "Understays",
          "No-Shows",
          "Availabilities",
          "Occupancies",
          "Walk-ins",
          "Confirmed",
        ],
        datasets: [
          {
            label: "# of Customers",
            data: [20000, 11900, 3010, 6070, 2940, 3600, 5080],
            backgroundColor: [
              "rgba(255, 134,159,0.4)",
              "rgba(98,  182, 239,0.4)",
              "rgba(255, 218, 128,0.4)",
              "rgba(113, 205, 205,0.4)",
              "rgba(170, 128, 252,0.4)",
              "rgba(255, 177, 101,0.4)",
            ],
            borderWidth: 2,
            borderColor: [
              "rgba(255, 134, 159, 1)",
              "rgba(98,  182, 239, 1)",
              "rgba(255, 218, 128, 1)",
              "rgba(113, 205, 205, 1)",
              "rgba(170, 128, 252, 1)",
              "rgba(255, 177, 101, 1)",
            ],
          },
        ],
      },
      barChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              barPercentage: 1,
              gridLines: {
                display: true,
                color: "rgba(0, 0, 0, 0.1)",
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                display: true,
                color: "rgba(0, 0, 0, 0.1)",
              },
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/api/stats/")
      .then((response) => {
        var statsData = { ...this.state.dataBar };
        statsData.datasets[0].data[0] = response.data[0].OverstayCount * 100;
        statsData.datasets[0].data[1] = response.data[0].UnderstayCount * 100;
        statsData.datasets[0].data[2] = response.data[0].noShowCount * 1000;
        statsData.datasets[0].data[3] = response.data[0].AvailCount * 4;
        statsData.datasets[0].data[4] =
          response.data[0].WalkinCount * 200 +
          response.data[0].ConfirmedCount * 100;
        statsData.datasets[0].data[5] = response.data[0].WalkinCount * 200;
        statsData.datasets[0].data[6] = response.data[0].ConfirmedCount * 100;
        this.setState({ statsData });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <MDBContainer>
        {this.state.dataBar.datasets[0].data[4] > 300 && (
          <Alert variant="success">
            The number of occupancies is normal.
          </Alert>
        )}
        <h3 className="mt-5">
          Month of <Moment format="MMMM">{Date.now()}</Moment>
        </h3>
        <Bar data={this.state.dataBar} options={this.state.barChartOptions} />
      </MDBContainer>
    );
  }
}

export default ChartsPage;
