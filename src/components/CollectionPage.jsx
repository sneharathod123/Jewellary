import React from "react";
import CollectOne from "./Collections/CollectOne";
import TopSection from "../components/TopSection";
import Menu from "../components/Menu";
import CollectSecond from "./Collections/CollectSecond";
import CollectThird from "./Collections/CollectThird";
import CollectionFour from "./Collections/CollectionFour";
import FooterSec from "./FooterSec";
import Header from "./Header";

function CollectionPage() {
  return (
    <>
      {/* <TopSection /> */}
      {/* <Menu /> */}
      <Header/>
      <CollectOne />
      <CollectSecond/>
      <CollectThird/>
      <CollectionFour/>
      <FooterSec/>
    </>
  );
}

export default CollectionPage;
