import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
// import { Link } from "react-router-dom";
import Inventory from "../Inventory/Inventory";
import "./Inventorys.css";

const Inventorys = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios("http://localhost:5000/products").then((data) => {
      setProducts(data.data);
    });
  }, []);

  return (
    <div className="inventorys">
      <Container>
        <Row>
          <Col>
            <h1 className="Inventory-header">Inventory</h1>
          </Col>
        </Row>
        <Row>
          {products.map(
            (product) =>
              product.index < 6 && (
                <Col key={product._id} xs={12} md={6} lg={4}>
                  <Inventory product={product}></Inventory>
                </Col>
              )
          )}
        </Row>
        <div className="more">
          <p>See All</p>
        </div>
      </Container>
    </div>
  );
};

export default Inventorys;
