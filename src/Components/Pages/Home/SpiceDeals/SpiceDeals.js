import React from "react";
import "./SpiceDeals.css";
import img1 from "../../../../images/Spices/spices-2.png";
import img2 from "../../../../images/Spices/spices-3.png";
import { Col, Container, Row } from "react-bootstrap";

const SpiceDeals = () => {
  return (
    <div className="spice-dong ">
      <Container>
        <div className="spice-info p-5">
          <Row>
            <Col xs={12} md={6}>
              <div className="article py-4 px-4">
                <h1>10 Most Popular Herbs, Spices and Their Health Benefits</h1>
                <p>
                  Herbs and spices do not only add flavor to our foods, but also
                  prevent diseases. Luckily, the world is more aware now about
                  health benefits of herbs and spices, and its so amazing how we
                  can integrate them into our lifestyle. Whats also great is
                  that herbs can be planted together in small gardens alongside
                  with its companion plants.
                </p>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <img src={img1} className="w-100" alt="" />
            </Col>
          </Row>
          <Row className="my-3">
            <Col xs={12} md={6}>
              <img src={img2} className="w-100" alt="" />
            </Col>
            <Col xs={12} md={6}>
              <div className="article py-4 px-4 mt-5">
                <h1>Spices To Build And Boost Immunity</h1>
                <p>
                  Turmeric, or haldi, is a pungent, yellow powder that is not
                  only used to add color and flavour to your dishes, but also
                  helps keep you healthy. Commonly used to add sweetness and an
                  amazing flavour, cinnamon or contains a chemical known as
                  coumarin. One of the active ingredients in cinnamon, known as
                  Cayenne is known to have anti-inflammatory properties and is
                  considered as a metabolism booster spice.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default SpiceDeals;
