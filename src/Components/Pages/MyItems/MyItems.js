import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import MyItem from "../MyItem/MyItem";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      const email = user.email;
      // console.log(user.email);
      const { data } = await axios.get(
        `https://dry-sea-63438.herokuapp.com/myItem?email=${email}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      setItems(data);
    };
    getItems();
  }, [user]);

  // console.log(items);
  return (
    <div>
      <Container className="my-5">
        <h1 className="my-5">my items {items.length}</h1>
        <Row>
          {items.map((item) => (
            <MyItem key={item._id} item={item}></MyItem>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default MyItems;
