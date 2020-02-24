import React from 'react';
import logo from './SmartParkLogo.png';
import { MemoryRouter} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import FormControl from 'react-bootstrap/FormControl';
import ImageLoader from 'react-load-image';
import Preloader from 'react-load-image';
const nav = () => (
    <MemoryRouter>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">
        <ImageLoader src={logo}>
        <img /><div>Error!</div>
        <Preloader />
        </ImageLoader>
        </Navbar.Brand>
        <Navbar.Brand href="/">SmartPark</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/statistics">Statistics</Nav.Link>
            <NavDropdown title="Garage View" id="basic-nav-dropdown">
              <NavDropdown.Item href="/reservations">
                Reservations
              </NavDropdown.Item>
              <NavDropdown.Item href="/overview">Overview</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </MemoryRouter>
  );
  export default nav;