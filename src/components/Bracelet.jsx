import React from "react";
import TopSection from "./TopSection";
import Menu from "./Menu";
import FooterSec from "./FooterSec";
import CollectOne from "./Collections/CollectOne";
import BraceletSecond from "./Bracelet/BraceletSecond";
import BraceletThird from "./Bracelet/BraceletThird";
import BraceletFourth from "./Bracelet/BraceletFourth";
import Testimoniol from "./Bracelet/Testimoniol";
import Header from "./Header";

function Bracelet() {
  return (
    <div>
      {/* <TopSection /> */}
      {/* <Menu /> */}
      <Header/>
      <CollectOne />
      <BraceletSecond/>
      <BraceletThird/>
      <BraceletFourth/>
      <Testimoniol/>
      <FooterSec />
    </div>
  );
}

export default Bracelet;
