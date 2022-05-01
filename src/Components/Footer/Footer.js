import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faMessage, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="footer">
      <Container>
        <Row className="3y-2">
          <Col xs={12} md={6} lg={4}>
            <div className="footer-1">
              <h4>Spicy Velvet</h4>
              <p>
                Supermarkets are not always the best places to fulfill your
                spice needs. Depending on where you live, your grocers spice
                selection can be limited. Worse, many mass market spices might
                be years old by the time you buy them, severely lacking the
                robust flavor and fragrance they are supposed to provide.
              </p>

              <h5>Follow Us</h5>
              <div className="Social-part my-3">
                <a href="https://www.facebook.com">
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    className="text-white fa-2x me-3"
                  />
                </a>
                <a href="https://www.instagram.com/?hl=en">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="text-white fa-2x me-3"
                  />
                </a>
                <a href="https://twitter.com">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="text-white fa-2x me-3"
                  />
                </a>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div className="mx-auto">
              <h3 className="my-3">Menu</h3>
              <p>
                <Link to={"/"} className="text-decoration-none Menu">
                  Home
                </Link>
              </p>

              <p>
                <Link to={"/blogs"} className="text-decoration-none Menu">
                  Blogs
                </Link>
              </p>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div className="mx-auto">
              <h3 className="my-3">Contact Us</h3>
              <p>
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-white fa-1x me-3"
                />
                0212345641
              </p>

              <p>
                <p>
                  <FontAwesomeIcon
                    icon={faMessage}
                    className="text-white fa-1x me-3"
                  />
                  spicy@mail.com
                </p>
              </p>
            </div>
          </Col>
        </Row>
        <hr />
        <div className="my-2 copy">
          &copy;{year} Spicy Velvet. All rights reserved.{" "}
        </div>
      </Container>
    </div>
  );
};

export default Footer;
