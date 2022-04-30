import axios from "axios";
import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./AddNewItem.css";

const AddNewItem = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `http://localhost:5000/products`;
    // axios.post(url, { data }).then(function (response) {
    //   console.log(response);
    // });

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        // if (result.acknowledged === "true") {
        //   alert("done");
        // }
        console.log(result);
      });
  };
  return (
    <div>
      <h1 className="Inventory-header my-5">Add New Item</h1>
      <div className="additem">
        <Container>
          <form className="mx-auto add-Item " onSubmit={handleSubmit(onSubmit)}>
            <input
              className="w-100 p-2 my-2"
              placeholder="Your Product Name"
              {...register("name", { required: true })}
            />

            <input
              className="w-100 p-2 my-2"
              placeholder="Supplier Name"
              {...register("supplier", { required: true })}
            />
            <textarea
              className="w-100 p-2 my-2"
              placeholder="Product Description"
              {...register("description")}
            />
            <input
              className="w-100 p-2 my-2"
              placeholder="Price"
              type="number"
              {...register("Price")}
            />
            <input
              className="w-100 p-2 my-2"
              placeholder="Quantity"
              type="number"
              {...register("Quantity")}
            />
            <input
              className="w-100 p-2 my-2"
              placeholder="Product Photo URL"
              type="text"
              {...register("picture")}
            />
            <input className="delivered" type="submit" value="ADD PRODUCT" />
          </form>
        </Container>
      </div>
    </div>
  );
};

export default AddNewItem;
