import React from "react";
import { Container } from "react-bootstrap";
import "../../css/PopularItem.css";
import Slider from "react-slick";
import { Box, Rating } from "@mui/material";
import {slide1,slide2 ,logo} from '../asstes'

function PopularItem() {
  let data = [
    {
      img: slide1,
      title: "High Designer Jewellery",
    },
    {
      img: slide1,
      title: "High Designer Jewellery",
    },
    {
      img: slide2,
      title: "High Designer Jewellery",
    },
    {
      img: slide1,
      title: "High Designer Jewellery",
    },
  ];
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
  const [value, setValue] = React.useState(2);
  return (
    <div>
      <Container>
        <div className="popular-item-section">
          <div className="head">
            <div className="text-section">
              <h3>Popular Items</h3>
              <div className="head-img">
                <img src={logo} alt="img" />
              </div>
              <p className="gray">
                Lorem ipsum dolor sit amet <br /> consectetueradipiscing elit,
                sed diam nonummy nibh
              </p>
            </div>
          </div>
          <div className=" slider-container">
            <Slider {...settings}>
              {data.map((item, index) => {
                return (
                  <div key={index} className="slider-main-box">
                    <div className="slider-box">
                      <div className="img-section">
                        <img src={item.img} alt="img" />
                      </div>
                      <div className="popular-text-sec">
                        <h5 className="">{item.title}</h5>
                        <Box
                          sx={{
                            "& > legend": { mt: 2 },
                          }}
                        >
                          <Rating
                            style={{ color: "#b3873d" }}
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                              setValue(newValue);
                            }}
                          />
                        </Box>
                        <p className="gray">100.00$</p>
                        <div className="popular-button">
                          <button>Quick View</button>
                        </div>
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

export default PopularItem;
