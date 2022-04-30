import React from "react";
import Inventorys from "../../Inventorys/Inventorys";
import LoginBox from "../../LoginBox/LoginBox";
import Banner from "../Banner/Banner";
import SpiceDeals from "../SpiceDeals/SpiceDeals";
import Spices from "../Spices/Spices";

const Footer = () => {
  return (
    <div>
      <Banner></Banner>
      <LoginBox></LoginBox>
      <SpiceDeals></SpiceDeals>
      <Inventorys></Inventorys>
      <Spices></Spices>
    </div>
  );
};

export default Footer;
