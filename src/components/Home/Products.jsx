import React, { useState } from "react";
import "../../css/Product.css";
import Popup from "./Popup";
import { Container } from "react-bootstrap";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import {
  product2,
  product1,
  product3,
  product4,
  product5,
  product6,
  product7,
  product8,
  logo,
} from "../asstes";
function Products() {
  const [value, setValue] = React.useState(2);
  const [buttonPopup, SetButtonPopup] = useState(false);
  let data = [
    {
      img: product1,
    },
    {
      img: product2,
    },
    {
      img: product3,
    },
    {
      img: product4,
    },
    {
      img: product5,
    },
    {
      img: product6,
    },
    {
      img: product7,
    },
    {
      img: product8,
    },
  ];
  return (
    <div className="product-section">
      <Container>
        <div className="head">
          <div className="text-section">
            <h3>Our Products</h3>
            <div className="head-img">
              <img src={logo} alt="img" />
            </div>
            <p className="gray">
              Lorem ipsum dolor sit amet <br /> consectetueradipiscing elit, sed
              diam nonummy nibh
            </p>
          </div>
        </div>
        <div className="products row">
          {data.map((item, index) => {
            return (
              <div className="col-12 col-md-6 col-lg-3" key={index}>
                <div className="product-card">
                  <img src={item.img} alt="img" />
                  <div className="product-detail">
                    <h4>High Designer Jewellery</h4>
                    <ul>
                      <li>
                        <i className="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i className="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i className="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i className="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i className="fa-solid fa-star-half-stroke"></i>
                      </li>
                    </ul>
                    <p>100.00$</p>
                    <div className="product-button">
                      <button onClick={() => SetButtonPopup(true)}>
                        Quick View
                      </button>
                    </div>
                    <Popup trigger={buttonPopup} setTrigger={SetButtonPopup}>
                      <hr />
                      <div className="main-box">
                        <div className="popup-img" key={index}>
                          <img src={item.img} alt="img" />
                        </div>
                        <div className="text-section">
                          <h5>High Designer Jewellery</h5>
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
                          <p>
                            Morbi mollis vestibulum sollicitudin. in eros a
                            justo facilisis rutrum. Aenean id ullamcorper
                            libero.
                          </p>
                          <div className="options">
                            <div className="select">
                              <div className="first">
                                <p>
                                  <label htmlFor="/">Select Color</label>
                                </p>
                                <select name="" id="">
                                  <option value="color">Select Color</option>
                                  <option value="color">red</option>
                                  <option value="color">blue</option>
                                  <option value="color">black</option>
                                </select>
                              </div>
                              <div className="second">
                                <p>
                                  <label htmlFor="/">Select size</label>
                                </p>
                                <select name="" id="">
                                  <option value="color">l</option>
                                  <option value="color">xl</option>
                                  <option value="color">xxl</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="cart">
                            <input type="number" />
                            <button>Add </button>
                          </div>
                        </div>
                      </div>
                    </Popup>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

export default Products;
