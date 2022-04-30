import React from "react";
import "./Spices.css";
import image from "../../../../images/Spices/spices-1.png";
import { Container } from "react-bootstrap";

const Spices = () => {
  return (
    <div className="spice">
      <Container>
        <h1>Spices A to Z</h1>
        <p className="mx-auto w-50">
          From Adobo to Za'atar, the Spicy Velvet has every type of spice, herb,
          and seasoning to create exquisite flavor in all your dishes.
        </p>
        <img className="img-fluid" src={image} alt="" />
      </Container>
    </div>
  );
};

export default Spices;
