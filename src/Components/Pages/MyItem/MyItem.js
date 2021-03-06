import React from "react";
import { Col, Row } from "react-bootstrap";
// import { useAuthState } from "react-firebase-hooks/auth";
// import auth from "../../../firebase.init";
import "./MyItem.css";

const MyItem = ({ item }) => {
  // const [user] = useAuthState(auth);
  const { _id, name, picture, description, Price, Quantity, supplier } = item;

  const handleDeleteProduct = (id) => {
    // const email = user.email;
    const proceed = window.confirm(
      "Are you sure you want to delete this product"
    );
    if (proceed) {
      // console.log("deleting this :", id);
      const url = `https://dry-sea-63438.herokuapp.com/myItem/${id}`;
      fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          window.location.reload();
        });
    }
  };

  return (
    <div className="">
      <Row className="my-4 item py-4">
        <Col xs={12} md={4}>
          <img className="w-100" src={picture} alt="" />
        </Col>
        <Col xs={12} md={6} lg={6} className="item-detail py-2 my-5 mx-3">
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
            onClick={() => handleDeleteProduct(_id)}
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
