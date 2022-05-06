import React from "react";
import { Link } from "react-router-dom";
import "./ManageInventory.css";

const ManageInventory = ({ product }) => {
  const { _id, name, picture, description, Price, Quantity, supplier } =
    product;
  // console.log(product);

  const handleDeleteProduct = (id) => {
    const proceed = window.confirm(
      "Are you sure you want to delete this product"
    );
    if (proceed) {
      // console.log("deleting this :", id);
      const url = `https://dry-sea-63438.herokuapp.com/products/${id}`;
      fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  };

  return (
    <div className="product-height">
      <img className="w-100" src={picture} alt="" />
      <div className="product-detail">
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
        <p
          onClick={() => handleDeleteProduct(_id)}
          className="delivered-btn my-3"
        >
          Delete
        </p>
      </div>
      <div className="product-button w-100">
        <Link to={`/products/${_id}`}>
          <button className="w-100 py-2">Product Manage</button>
        </Link>
      </div>
    </div>
  );
};

export default ManageInventory;
