import logo from '../assets/logo.png';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Nav, Navbar} from 'react-bootstrap';

import Hero from './Hero';

function Header() {

  return (
    <div className="Header">
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            className="d-inline-block align-top"
            alt="Lugar"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="gr-navbar-nav" />
        <Navbar.Collapse id="gr-navbar-nav" className="gr-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Projects</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Hero />
    </div>
  );
}

export default Header;
