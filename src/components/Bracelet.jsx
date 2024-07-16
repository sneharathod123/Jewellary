import React from "react";
import TopSection from "./TopSection";
import Menu from "./Menu";
import FooterSec from "./FooterSec";
import BraceletSecond from "./Bracelet/BraceletSecond";
import BraceletThird from "./Bracelet/BraceletThird";
import BraceletFourth from "./Bracelet/BraceletFourth";
import Testimoniol from "./Bracelet/Testimoniol";
import Header from "./Header";
import BraceleteOne from "./Bracelet/BraceleteOne";
import LoginPopup from "./LoginPopup";

function Bracelet() {
  return (
    <div>
      {/* <TopSection /> */}
      {/* <Menu /> */}
      <LoginPopup/>
      <Header/>
      <BraceleteOne/>
      <BraceletSecond/>
      <BraceletThird/>
      <BraceletFourth/>
      <Testimoniol/>
      <FooterSec />
    </div>
  );
}

export default Bracelet;
