import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={12} md={6} lg={4}>
            <h4>Spicy Velvet</h4>
            <p></p>
          </Col>
          <Col xs={12} md={6} lg={4}></Col>
          <Col xs={12} md={6} lg={4}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
