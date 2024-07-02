import React from "react";
import { Container } from "react-bootstrap";
import "../css/banner.css";
function Banner() {
  return (
    <div className="Banner-section">
      <div className="banner-img"></div>
      <Container>
        <div className="text-sec">
          <h1>The ultimate in luxury and style.</h1>
          <p>Flat 15% off on Diamond Jewellery</p>
          <button type="button">Shop Now</button>
        </div>
      </Container>
    </div>
  );
}

export default Banner;
