import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div className="my-5 py-4">
      <Spinner animation="border" />
    </div>
  );
};

export default Loading;
