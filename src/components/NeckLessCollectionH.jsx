import React from "react";
import FirstNeckS from "./NeckLessCollection/FirstNeckS";
import TopSection from "./TopSection";
import Menu from "./Menu";
import SecondNeckS from "./NeckLessCollection/SecondNeckS";
import ThirdNeckS from "./NeckLessCollection/ThirdNeckS";
import FooterSec from './FooterSec'
import Header from "./Header";

function NeckLessCollectionH() {
  return (
    <>
      {/* <TopSection /> */}
      {/* <Menu /> */}
      <Header/>
      <FirstNeckS />
      <SecondNeckS/>
      <ThirdNeckS/>
      <FooterSec/>
    </>
  );
}

export default NeckLessCollectionH;
