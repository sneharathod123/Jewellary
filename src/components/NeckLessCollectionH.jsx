import React from "react";
import FirstNeckS from "./NeckLessCollection/FirstNeckS";
// import TopSection from "./TopSection";
// import Menu from "./Menu";
import SecondNeckS from "./NeckLessCollection/SecondNeckS";
import ThirdNeckS from "./NeckLessCollection/ThirdNeckS";
import FooterSec from './FooterSec'
import Header from "./Header";
import LoginPopup from "./LoginPopup";

function NeckLessCollectionH() {
  return (
    <>
      {/* <TopSection /> */}
      {/* <Menu /> */}
      <LoginPopup/>
      <Header/>
      <FirstNeckS />
      <SecondNeckS/>
      <ThirdNeckS/>
      <FooterSec/>
    </>
  );
}

export default NeckLessCollectionH;
