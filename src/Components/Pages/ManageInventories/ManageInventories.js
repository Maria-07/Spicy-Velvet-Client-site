import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ManageInventory from "../ManageInventory/ManageInventory";
import "./ManageInventories.css";

const ManageInventories = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios("http://localhost:5000/products").then((data) => {
      setProducts(data.data);
    });
  }, []);
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1 className="Inventory-header">Manage Inventories</h1>
          </Col>
        </Row>
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
