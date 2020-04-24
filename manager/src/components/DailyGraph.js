import React from "react";
import { Bar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import Moment from "react-moment";
import axios from "axios";
import Alert from "react-bootstrap/Alert";
class ChartsPage extends React.Component {
  state = {
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
          data: [120, 600, 320, 40, 20, 45, 50],
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
  componentDidMount() {
    axios
      .get("https://cryptic-depths-70075.herokuapp.com/api/stats/")
      .then((response) => {
        var statsData = { ...this.state.dataBar };
        statsData.datasets[0].data[0] = response.data[0].OverstayCount;
        statsData.datasets[0].data[1] = response.data[0].UnderstayCount;
        statsData.datasets[0].data[2] = response.data[0].noShowCount;
        statsData.datasets[0].data[3] = 79;
        statsData.datasets[0].data[4] =
          response.data[0].WalkinCount + response.data[0].ConfirmedCount;
        statsData.datasets[0].data[5] = response.data[0].WalkinCount;
        statsData.datasets[0].data[6] = response.data[0].ConfirmedCount;
        this.setState({ statsData });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    return (
      <>
        <MDBContainer>
          {this.state.dataBar.datasets[0].data[0] > 2 && (
            <Alert variant="info">
              The number of overstays is higher than usual. Increase overstay fee. {" "}
              <Alert.Link href="/pricing">Go to Dynamic Pricing.</Alert.Link>
            </Alert>
          )}
          <h3 className="mt-5">
            <Moment format="LLLL">{Date.now()}</Moment>
          </h3>
          <Bar data={this.state.dataBar} options={this.state.barChartOptions} />
        </MDBContainer>
      </>
    );
  }
}

export default ChartsPage;
