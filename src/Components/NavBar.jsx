import { NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <Navbar
      collapseOnSelect
      data-bs-theme="dark"
      expand="lg"
      className="NavbarMain"
    >
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">HOME </Nav.Link>
            <Nav.Link href="#">ABOUT US</Nav.Link>

            {/* <Nav.Link href="#">PROJECTS</Nav.Link> */}
            <NavDropdown title="PROJECTS" id="basic-nav-dropdown">
              <NavDropdown.Item href="/projects/peddaamberpet">
                Pedda amberpet
              </NavDropdown.Item>
              <NavDropdown.Item href="/projects/the-one">
                the one
              </NavDropdown.Item>
              <NavDropdown.Item href="/projects/reserve">
                Reserve
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">PARTNER WITH US</Nav.Link>
            <Nav.Link eventKey={2} href="#">
              GALLERY
            </Nav.Link>
            <Nav.Link eventKey={2} href="#">
              CAREERS
            </Nav.Link>
            <Nav.Link href="#">KNOWLEDGE HUB</Nav.Link>
            <Nav.Link href="#">CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
