import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./LoginBox.css";

const LoginBox = () => {
  return (
    <Container>
      <div className="login-box">
        {/* <Row>
          <Col>
            <h5>Sign in to see what's available in your Spicy Inventory</h5>
          </Col>
          <Col>
            <Link to={"login"}>
              <button className="login">Log in</button>
            </Link>
            <Link to={"login"}>
              <button className="signup">Create Account</button>
            </Link>
          </Col>
        </Row> */}
        <div className="d-flex flex-wrap bd-highlight example-parent">
          <div className="p-2 mt-2 flex-grow-1 bd-highlight col-example">
            <h4>Sign in to see what's available in our Spicy Inventory .</h4>
          </div>

          <div className="mx-5 p-3 bd-highlight col-example">
            {" "}
            <Link to={"login"}>
              <button className="login ">Sign in</button>
            </Link>
            <Link to={"signup"}>
              <button className="signup">Create Account</button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default LoginBox;
