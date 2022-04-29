import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import UseProduct from "../../../Hooks/UseProduct";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./ProductDetails.css";
import Rating from "react-rating";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product] = UseProduct(productId);
  const { _id, name, picture, description, Price, supplier, sold, Quantity } =
    product;
  let [updateQuantity, setUpadateQuantity] = useState();

  const updateQuantityNumber = () => {
    console.log(updateQuantity);
    setUpadateQuantity(updateQuantity - 1);
  };

  return (
    <div className="productId">
      <div className="product-route">
        <Container>Home / Inventory / {name}</Container>
      </div>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <img className="w-100" src={picture} alt="" />
          </Col>
          <Col xs={12} md={6}>
            <div className="products-detail">
              <h2>{name}</h2>

              <div className="rating">
                <Rating
                  initialRating={5}
                  emptySymbol={<FontAwesomeIcon icon={faStar} />}
                  fullSymbol={
                    <FontAwesomeIcon
                      style={{ color: "goldenrod", fontSize: "1em" }}
                      icon={faStar}
                    />
                  }
                  readonly
                ></Rating>
                <span className="review">{sold} Reviews</span>
              </div>

              <p className="details">{description}</p>
              <p className="supplier">
                <span>Supplier :</span> {supplier}
              </p>
              <p className="supplier">
                <span>Price : </span>
                {Price} / kg
              </p>
              <div className="quantity">
                <p>
                  Quantity : <span>{Quantity}</span>
                </p>
              </div>
              <div className="quantity">
                <p>
                  Quantity : <span>{updateQuantity}</span>
                </p>
              </div>

              <button
                onClick={() => updateQuantityNumber()}
                className="delivered"
              >
                Delivered
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetails;
