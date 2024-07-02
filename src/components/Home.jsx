import React from "react";
import TopSection from "./TopSection";
import Menu from "./Menu";
import Slider from "./Slider";
import Collection from "./Collection";
import Products from "./Products";
import FeatureProduct from "./FeatureProduct";
import Categories from "./Categories";
import PopularItem from "./PopularItem";
import Banner from "./Banner";
import Blog from "./Blog";
import Partners from "./Partners";
import FooterSec from "./FooterSec";

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
      <Banner/>
      <Blog/>
      <Partners/>
      <FooterSec/>
    </>
  );
}

export default Home;
