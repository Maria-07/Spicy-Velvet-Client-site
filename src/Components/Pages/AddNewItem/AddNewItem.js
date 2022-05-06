// import axios from "axios";
import React from "react";
import { Container } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../../firebase.init";
import "./AddNewItem.css";

const AddNewItem = () => {
  const {
    register,
    handleSubmit,
    // reset,
    // formState: { isSubmitSuccessful },
  } = useForm();
  const [user] = useAuthState(auth);

  const onSubmit = (data) => {
    // console.log(data);
    const url1 = `https://dry-sea-63438.herokuapp.com/products`;
    const url2 = `https://dry-sea-63438.herokuapp.com/myItem`;

    fetch(url1, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        // console.log(result);
        if (result.insertedId) {
          toast("Your new product is added !!!");
          // data.target.reset();
        }
      });

    fetch(url2, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        // console.log(result);
        if (result.insertedId) {
          toast("Check my-Item for your added product !!!");
          // data.target.reset();
        }
      });
  };

  // React.useEffect(() => {
  //   if (formState.isSubmitSuccessful) {
  //     reset({ something: "" });
  //   }
  // }, [formState, submittedData, reset]);

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
              placeholder="Total Sold"
              type="number"
              {...register("sold")}
            />
            <input
              className="w-100 p-2 my-2"
              placeholder="Product Photo URL"
              type="text"
              {...register("picture")}
            />
            <input
              className="w-100 p-2 my-2"
              placeholder="Product Photo URL"
              type="email"
              value={user.email}
              readOnly
              {...register("email")}
            />
            <input className="delivered" type="submit" value="ADD PRODUCT" />
          </form>
        </Container>
        <ToastContainer />
      </div>
    </div>
  );
};

export default AddNewItem;
