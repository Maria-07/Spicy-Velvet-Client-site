import React from "react";
import Inventorys from "../../Inventorys/Inventorys";
import LoginBox from "../../LoginBox/LoginBox";
import Banner from "../Banner/Banner";

const Footer = () => {
  return (
    <div>
      <Banner></Banner>
      <LoginBox></LoginBox>
      <Inventorys></Inventorys>
    </div>
  );
};

export default Footer;
