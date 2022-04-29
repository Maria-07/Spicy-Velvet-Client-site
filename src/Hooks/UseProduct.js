import axios from "axios";
import { useEffect, useState } from "react";

const UseProduct = (productId) => {
  const [product, setProduct] = useState({});
  useEffect(() => {
    axios(`http://localhost:5000/products/${productId}`).then((data) =>
      setProduct(data.data)
    );
  }, [productId]);
  return [product, setProduct];
};

export default UseProduct;
