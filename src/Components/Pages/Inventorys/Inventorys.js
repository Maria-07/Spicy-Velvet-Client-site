import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import Inventory from "../Inventory/Inventory";
import "./Inventorys.css";

const Inventorys = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios("https://dry-sea-63438.herokuapp.com/products").then((data) => {
      setProducts(data.data);
    });
  }, []);

  const sixProducts = products.slice(0, 6);
  // console.log(sixProducts);
  return (
    <div className="inventorys">
      <Container>
        <Row>
          <Col>
            <h1 className="Inventory-header">Inventory</h1>
          </Col>
        </Row>
        <Row>
          {sixProducts.map((product) => (
            <Col key={product._id} xs={12} md={6} lg={4}>
              <Inventory product={product}></Inventory>
            </Col>
          ))}
        </Row>
        <Link className="text-decoration-none link-texts" to={"/products"}>
          {" "}
          <div className="more">
            Manage Inventories <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </Link>
      </Container>
    </div>
  );
};

export default Inventorys;
