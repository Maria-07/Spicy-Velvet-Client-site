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
                  with its companion plants. For example, I grow basil in my
                  garden alongside with tomatoes, chives with carrots and
                  oregano to almost all vegetables. Thats why I want to share
                  with you the amazing health benefits of herbs and spices.
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
              <div className="article py-4 px-4">
                <h1>10 Most Popular Herbs, Spices and Their Health Benefits</h1>
                <p>
                  Herbs and spices do not only add flavor to our foods, but also
                  prevent diseases. Luckily, the world is more aware now about
                  health benefits of herbs and spices, and its so amazing how we
                  can integrate them into our lifestyle. Whats also great is
                  that herbs can be planted together in small gardens alongside
                  with its companion plants. For example, I grow basil in my
                  garden alongside with tomatoes, chives with carrots and
                  oregano to almost all vegetables. Thats why I want to share
                  with you the amazing health benefits of herbs and spices.
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
