import React from "react";
import Slider from "react-slick/lib/slider";
import "../../css/testimononial.css";
import { Box, Rating } from "@mui/material";
function Testimoniol() {
  const [value, setValue] = React.useState(2);
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };
  return (
    <div className="t-section">
      <div className="testimononial-section">
        <div className="slider-container">
          <Slider {...settings}>
            <div className="testimononial">
              <div className="text-container">
                <h5>HAPPY CLIENTS SAYS</h5>
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
                <h2>
                  If there was a choice on spending a lot of money on
                  <br /> accessories or dresses, I always chose accessories. I
                  think <br />
                  jewelry can change an outfit more than anything else.
                </h2>
              </div>
            </div>
            <div className="testimononial">
              <div className="text-container">
                <h5>HAPPY CLIENTS SAYS</h5>
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
                <h2>
                  If there was a choice on spending a lot of money on
                  <br /> accessories or dresses, I always chose accessories. I
                  think <br />
                  jewelry can change an outfit more than anything else.
                </h2>
              </div>
            </div>
            <div className="testimononial">
              <div className="text-container">
                <h5>HAPPY CLIENTS SAYS</h5>
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
                <h2>
                  If there was a choice on spending a lot of money on
                  <br /> accessories or dresses, I always chose accessories. I
                  think <br />
                  jewelry can change an outfit more than anything else.
                </h2>
              </div>
            </div>
            <div className="testimononial">
              <div className="text-container">
                <h5>HAPPY CLIENTS SAYS</h5>
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
                <h2>
                  If there was a choice on spending a lot of money on
                  <br /> accessories or dresses, I always chose accessories. I
                  think <br />
                  jewelry can change an outfit more than anything else.
                </h2>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Testimoniol;
