import React from "react";
import TopSection from "./TopSection";
import Menu from "./Menu";
import Slider from "./Slider";
import Collection from "./Collection";
import Products from "./Products";
import FeatureProduct from "./FeatureProduct";
import Categories from "./Categories";
import PopularItem from "./PopularItem";

function Home() {
  return (
    <>
      <TopSection />
      <Menu/>
      <Slider/>
      <Collection/>
      <Products/>
      <FeatureProduct/>
      <Categories/>
      <PopularItem/>
    </>
  );
}

export default Home;
