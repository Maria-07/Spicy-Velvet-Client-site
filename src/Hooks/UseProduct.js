import axios from "axios";
import { useEffect, useState } from "react";

const UseProduct = (productId) => {
  const [product, setProduct] = useState({});
  useEffect(() => {
    axios(`https://dry-sea-63438.herokuapp.com/products/${productId}`).then(
      (data) => setProduct(data.data)
    );
  }, [productId]);
  return [product, setProduct];
};

export default UseProduct;
