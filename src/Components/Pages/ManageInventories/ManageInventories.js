import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import ManageInventory from "../ManageInventory/ManageInventory";
import "./ManageInventories.css";

const ManageInventories = () => {
  const [products, setProducts] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(9);

  useEffect(() => {
    axios("https://dry-sea-63438.herokuapp.com/productCount").then((data) => {
      const count = data.data.count;
      const page = Math.ceil(count / 9);
      setPageCount(page);
    });
  }, []);

  useEffect(() => {
    axios(
      `https://dry-sea-63438.herokuapp.com/products?page=${page}&size=${size}`
    ).then((data) => {
      setProducts(data.data);
    });
  }, [page, size]);

  console.log(products.length);
  return (
    <div>
      <PageTitle title="Products"></PageTitle>
      <Container className="my-5">
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
        <Row className="pagination">
          <div>
            {[...Array(pageCount).keys()].map((number) => (
              <button
                className={page === number ? "selected" : ""}
                onClick={() => {
                  setPage(number);
                  window.scrollTo(0, 0);
                }}
              >
                {number}
              </button>
            ))}

            <select
              className="p-2 ms-2"
              onChange={(e) => {
                setSize(e.target.value);
                window.scrollTo(0, 0);
              }}
            >
              <option value="9" selected>
                9
              </option>
              <option value="12">12</option>
              <option value="15">15</option>
              <option value="17">17</option>
              <option value="21">21</option>
            </select>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default ManageInventories;
