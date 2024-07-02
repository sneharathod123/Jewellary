import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import partner1 from "../assets/Partner1.png";
import partner2 from "../assets/Partner2.png";
import partner3 from "../assets/Partner3.png";
import partner4 from "../assets/Partner4.png";
import '../css/partner.css'
function Partners() {
  let settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          //   dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  let data = [
    {
      img: partner1,
    },
    {
      img: partner2,
    },
    {
      img: partner3,
    },
    {
      img: partner4,
    },
  ];
  return (
    <div className="partner-section">
      <Container>
      <div className="head">
          <div className="text-section">
            <h3>Our Partners</h3>
            <div className="head-img">
              <img src={require("../assets/logoImage.png")} alt="img" />
            </div>
            <p className="gray">
              Lorem ipsum dolor sit amet <br /> consectetueradipiscing elit, sed
              diam nonummy nibh
            </p>
          </div>
        </div>
        <div className="partner-slider">
          <div className="partner-slider-section">
            <Slider {...settings}>
              {data.map((item, index) => {
                return (
                  <div key={index} className="partner-main-box">
                    <div className="partner-box">
                      <div className="partner-img-section">
                        <img src={item.img} alt="img" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Partners;
