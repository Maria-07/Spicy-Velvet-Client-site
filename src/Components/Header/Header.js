import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };
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

              {user && (
                <>
                  <Nav.Link as={Link} to="products">
                    <span className="nav-bar link">MY ITEMS</span>
                  </Nav.Link>
                  <Nav.Link as={Link} to="addNewItem">
                    <span className="nav-bar link">ADD ITEM</span>
                  </Nav.Link>
                </>
              )}
              {user ? (
                <Nav.Link onClick={handleSignOut} as={Link} to="login">
                  <span className="nav-bar link">SIGN OUT</span>
                </Nav.Link>
              ) : (
                <Nav.Link as={Link} to="login">
                  <span className="nav-bar link">LOG IN</span>
                </Nav.Link>
              )}
              <Nav.Link as={Link} to="signup">
                <span className="nav-bar link">SIGN UP</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
