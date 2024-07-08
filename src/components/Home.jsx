import React from "react";
import TopSection from "./TopSection";
import Menu from "./Menu";
import Slider from "../components/Home/Slider";
import Collection from "../components/Home/Collection";
import Products from "../components/Home/Products";
import FeatureProduct from "../components/Home/FeatureProduct";
import Categories from "../components/Home/Categories";
import PopularItem from "../components/Home/PopularItem";
import Banner from "../components/Home/Banner";
import Blog from "../components/Home/Blog";
import Partners from "../components/Home/Partners";
import FooterSec from "./FooterSec";
import Header from "./Header";

function Home() {
  return (
    <>
      {/* <TopSection /> */}
      {/* <Menu /> */}
      <Header/>
      <Slider />
      <Collection />
      <Products />
      <FeatureProduct />
      <Categories />
      <PopularItem />
      <Banner />
      <Blog />
      <Partners />
      <FooterSec />
    </>
  );
}

export default Home;
