import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../css/Slider.css";

function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={require("../assets/slider1.jpg")} alt="img" />
        <Carousel.Caption>
          <h1>Designer Jewellery</h1>
          <p>
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin
            <br />
            lorem quis bibendum auctor elit
          </p>
          <button type="button">Shop Now</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={require("../assets/slider2.jpg")} alt="img" />
        <Carousel.Caption >
          <h1>Designer Jewellery</h1>
          <p>
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin
            <br />
            lorem quis bibendum auctor elit
          </p>
          <button type="button">Shop Now</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={require("../assets/slider3.jpg")} alt="img" />

        <Carousel.Caption>
          <h1>Designer Jewellery</h1>
          <p>
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin
            <br />
            lorem quis bibendum auctor elit
          </p>
          <button type="button">Shop Now</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
