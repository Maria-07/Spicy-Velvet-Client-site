import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="nav-body sticky-top">
      <Navbar collapseOnSelect expand="lg" className="nav-bar ">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <span className="brand-name">Spicy Velvet</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link as={Link} to="/">
                <span className="nav-bar link">HOME</span>
              </Nav.Link>
              <Nav.Link as={Link} to="blogs">
                <span className="nav-bar link">BLOGS</span>
              </Nav.Link>
              <Nav.Link as={Link} to="login">
                <span className="nav-bar link">LOG IN</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
