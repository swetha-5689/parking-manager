import React from "react";
import logo from "./assets/car-1149997_640.jpg";
import mini from "./assets/google-home-mini.jpg";
import clock from "./assets/clock.jpg";
import chart from "./assets/chart.jpg";
import pig from "./assets/piggy-bank.jpg";
import park from "./assets/parking.jpg";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardGroup";

function Home() {
  return (
    <>
      <h1 class="d-flex justify-content-center pt-5" style={{ font: "Arial" }}>
        Welcome to SmarkPark!
      </h1>
      <p></p>
      <h2
        class="d-flex justify-content-center pb-5"
        style={{ color: "red", fontFamily: "Arial" }}
      >
        RU Ready to Park Smart?
      </h2>
      <div>
        <Container>
          <CardDeck>
            {/*Home*/}
            <Card>
              <Card.Img variant="top" src={logo} />
              <Card.Body>
                <Card.Title>SmartPark Home</Card.Title>
                <Card.Text>
                  Hello, and welcome to SmartPark! RU Ready to Park Smart? Learn
                  all about us and how we make parking, simplified.
                </Card.Text>
                <Card.Link href="/home">Home</Card.Link>
              </Card.Body>
            </Card>
            {/*Reservations*/}
            <Card>
              <Card.Img variant="top" src={clock} href="./reservations" />
              <Card.Body>
                <Card.Title>Reservations</Card.Title>
                <Card.Text>
                  Manager override for creating, altering, deleting, and
                  searching for customer reservations. Send billing alerts to
                  customer emails.
                </Card.Text>
                <Card.Link href="/reservations">Reservations</Card.Link>
              </Card.Body>
            </Card>
            {/*Google Home*/}
            <Card>
              <Card.Img variant="top" src={mini} />
              <Card.Body>
                <Card.Title>Voice Assistance</Card.Title>
                <Card.Text>
                  Connect to Google Assistant with your smartphone or
                  smart-speaker and make hands-free parking reservations .
                </Card.Text>
                <Card.Link href="https://assistant.google.com/">
                  Google Assistant
                </Card.Link>
              </Card.Body>
            </Card>
          </CardDeck>

          <CardDeck>
            {/*Stats*/}
            <Card>
              <Card.Img variant="top" src={chart} />
              <Card.Body>
                <Card.Title>Parking Statistics</Card.Title>
                <Card.Text>
                  View the parking garage statistics for the day, month, week,
                  or year.
                </Card.Text>
                <Card.Link href="/statistics">Statistics</Card.Link>
              </Card.Body>
            </Card>
            {/*Garage*/}
            <Card>
              <Card.Img variant="top" src={park} />
              <Card.Body>
                <Card.Title>Garage View</Card.Title>
                <Card.Text>
                  Check out our parking garage simulation! Find your parking
                  spot.
                </Card.Text>
                <Card.Link href="/overview">Overview</Card.Link>
              </Card.Body>
            </Card>
            {/*Pricing*/}
            <Card>
              <Card.Img variant="top" src={pig} />
              <Card.Body>
                <Card.Title>Dynamic Pricing</Card.Title>
                <Card.Text>
                  Change the current reservation prices and fees for your
                  parking garage through the use of our dynamic pricing
                  algorithm.
                </Card.Text>
                <Card.Link href="/pricing">Dynamic Pricing</Card.Link>
              </Card.Body>
            </Card>
          </CardDeck>
        </Container>
      </div>
    </>
  );
}
export default Home;
