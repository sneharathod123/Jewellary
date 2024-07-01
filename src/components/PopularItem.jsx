import React from "react";
import { Container } from "react-bootstrap";
import "../css/PopularItem.css";
import Slider from "react-slick";
import { Box, Rating } from "@mui/material";

function PopularItem() {
  let settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  const [value, setValue] = React.useState(2);
  return (
    <div>
      <Container>
        <div className="popular-item-section">
          <div className="popular-item-head">
            <h3>Popular items</h3>
            <div className="logo-section">
              <img src={require("../assets/logoImage.png")} alt="img" />
            </div>
            <p className="gray">
              Lorem ipsum dolor sit amet
              <br /> consectetueradipiscing elit, sed diam nonummy nibh
            </p>
          </div>
          <Slider {...settings}>
            <div className="popular-image-slider">
              <div className="img-box">
                <div className="img-slide">
                  <img src={require("../assets/slide1.png")} alt="img" />
                </div>
                <div className="text-sec">
                  <h5>High Designer Jewellery</h5>
                  <Box
                    sx={{
                      "& > legend": { mt: 2 },
                    }}
                  >
                    {/* <Typography component="legend">Controlled</Typography> */}
                    <Rating
                      style={{ color: "#b3873d" }}
                      name="simple-controlled"
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    />
                    {/* <Typography component="legend">Read only</Typography> */}
                    {/* <Rating name="read-only" value={value} readOnly /> */}
                    {/* <Typography component="legend">Disabled</Typography>
                <Rating name="disabled" value={value} disabled />
                <Typography component="legend">No rating given</Typography>
                <Rating name="no-value" value={null} /> */}
                  </Box>
                </div>
              </div>
            </div>
            <div className="popular-image-slider">
              <div className="img-box">
                <div className="img-slide">
                  <img src={require("../assets/slide1.png")} alt="img" />
                </div>
                <div className="text-sec">
                  <h5>High Designer Jewellery</h5>
                  <Box
                    sx={{
                      "& > legend": { mt: 2 },
                    }}
                  >
                    {/* <Typography component="legend">Controlled</Typography> */}
                    <Rating
                      style={{ color: "#b3873d" }}
                      name="simple-controlled"
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    />
                    {/* <Typography component="legend">Read only</Typography> */}
                    {/* <Rating name="read-only" value={value} readOnly /> */}
                    {/* <Typography component="legend">Disabled</Typography>
                <Rating name="disabled" value={value} disabled />
                <Typography component="legend">No rating given</Typography>
                <Rating name="no-value" value={null} /> */}
                  </Box>
                </div>
              </div>
            </div>
            <div className="popular-image-slider">
              <div className="img-box">
                <div className="img-slide">
                  <img src={require("../assets/slide1.png")} alt="img" />
                </div>
                <div className="text-sec">
                  <h5>High Designer Jewellery</h5>
                  <Box
                    sx={{
                      "& > legend": { mt: 2 },
                    }}
                  >
                    {/* <Typography component="legend">Controlled</Typography> */}
                    <Rating
                      style={{ color: "#b3873d" }}
                      name="simple-controlled"
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    />
                    {/* <Typography component="legend">Read only</Typography> */}
                    {/* <Rating name="read-only" value={value} readOnly /> */}
                    {/* <Typography component="legend">Disabled</Typography>
                <Rating name="disabled" value={value} disabled />
                <Typography component="legend">No rating given</Typography>
                <Rating name="no-value" value={null} /> */}
                  </Box>
                </div>
              </div>
            </div>
            <div className="popular-image-slider">
              <div className="img-box">
                <div className="img-slide">
                  <img src={require("../assets/slide2.png")} alt="img" />
                </div>
                <div className="text-sec">
                  <h5>High Designer Jewellery</h5>
                  <Box
                    sx={{
                      "& > legend": { mt: 2 },
                    }}
                  >
                    {/* <Typography component="legend">Controlled</Typography> */}
                    <Rating
                      style={{ color: "#b3873d" }}
                      name="simple-controlled"
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    />
                    {/* <Typography component="legend">Read only</Typography> */}
                    {/* <Rating name="read-only" value={value} readOnly /> */}
                    {/* <Typography component="legend">Disabled</Typography>
                <Rating name="disabled" value={value} disabled />
                <Typography component="legend">No rating given</Typography>
                <Rating name="no-value" value={null} /> */}
                  </Box>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </Container>
    </div>
  );
}

export default PopularItem;
