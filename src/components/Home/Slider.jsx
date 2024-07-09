import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../../css/Slider.css";
import { slider1, slider3, slider2 ,sliderS1,sliderS2,sliderS3} from "../asstes";

function Slider() {
  let data = [
    {
      img: slider1,
      title: "Designer Jewellery",
    },
    {
      img: slider2,
      title: "Designer Jewellery",
    },
    {
      img: slider3,
      title: "Designer Jewellery",
    },
  ];
  return (
    <Carousel>
      {data.map((item, index) => {
        return (
          <Carousel.Item key={index}>
            <img src={item.img} alt="img" />
            <Carousel.Caption>
              <h1>{item.title}</h1>
              <p>
                Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin{" "}
                <br />
                lorem quis bibendum auctor elit
              </p>
              <button type="button">Shop Now</button>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default Slider;
