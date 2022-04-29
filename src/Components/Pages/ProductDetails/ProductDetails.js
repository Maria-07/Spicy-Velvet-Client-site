import React from "react";
import { useParams } from "react-router-dom";
import UseProduct from "../../../Hooks/UseProduct";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product] = UseProduct(productId);
  return <div>this is ProductDetails : {product.name}</div>;
};

export default ProductDetails;
