import React from "react";
import { Col, Row } from "react-bootstrap";
import "./MyItem.css";

const MyItem = ({ item }) => {
  const { _id, name, picture, description, Price, Quantity, supplier } = item;
  return (
    <div className="">
      <Row className="my-4 item py-4">
        <Col xs={12} md={6}>
          <img className="w-50" src={picture} alt="" />
        </Col>
        <Col className="item-detail py-2 my-5 mx-3" xs={12} md={6}>
          <h3 className="product-name">{name}</h3>
          <p className="description">{description}</p>
          <p className="supplier">
            <span>Supplier :</span> {supplier}
          </p>
          <p className="supplier">
            <span>Quantity :</span> {Quantity}
          </p>
          <p className="supplier">
            <span>Price : </span>
            {Price}
          </p>
          <button
            //   onClick={() => handleDeleteProduct(_id)}
            className="item-dlt-btn my-3"
          >
            Delete
          </button>
        </Col>
      </Row>
    </div>
  );
};

export default MyItem;
