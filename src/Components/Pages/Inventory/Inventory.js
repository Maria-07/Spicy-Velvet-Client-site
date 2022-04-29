import React from "react";
import { Link } from "react-router-dom";
import "./Inventory.css";

const Inventory = ({ product }) => {
  const { name, picture, description, Price, Quantity, supplier } = product;
  console.log(product);
  return (
    <div className="product">
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
      </div>
      <div className="product-button w-100">
        <Link to={"inventory:_id"}>
          <button className="w-100 py-2">Product Manage</button>
        </Link>
      </div>
    </div>
  );
};

export default Inventory;
