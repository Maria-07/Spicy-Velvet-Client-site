import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ManageInventory from "../ManageInventory/ManageInventory";
import "./ManageInventories.css";

const ManageInventories = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios("https://dry-sea-63438.herokuapp.com/products").then((data) => {
      setProducts(data.data);
    });
  }, []);
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1 className="Inventory-header">Inventories</h1>
          </Col>
        </Row>
        <Link to={"/addNewItem"}>
          <button className="delivered">Add New Item</button>
        </Link>
        <p className="manage-product"> Total {products.length} Spices</p>
        <Row>
          {products.map((product) => (
            <Col key={product._id} xs={12} md={6} lg={4}>
              <ManageInventory product={product}></ManageInventory>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ManageInventories;
