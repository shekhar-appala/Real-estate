import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function ProjectNav() {
  

  return (
    <Navbar collapseOnSelect expand="lg" className="p-nav">
      <Container>
        <Navbar.Brand href="#">Peddaamberpet</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#pHighlights">Project Highlights</Nav.Link>
            <Nav.Link href="#LHighlights">Location Highlights</Nav.Link>
            <Nav.Link href="#gallery">gallery</Nav.Link>
            <Nav.Link href="#contact">Contact us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ProjectNav;
