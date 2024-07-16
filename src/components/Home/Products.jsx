import React, { useState } from "react";
import "../../css/Product.css";
import Popup from "./Popup";
import { Container } from "react-bootstrap";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
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
  NecklessSecond5,
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
                      <div className="main-box">
                        <div className="popup-img" key={index}>
                          <img
                            src={require("../../assets/imagePopup.jpg")}
                            alt="img"
                          />
                        </div>
                        <div className="text-section">
                          <h3>Get 20% discount shipped to your inbox</h3>
                          <p>
                            Subscribe to our newlletter and we will ship{" "}
                            <strong>20% discount code</strong>today
                          </p>
                          <input type="text" placeholder="Email Address..." />
                          <MailOutlineIcon />
                          <p><a href="/">ContactUs: 3333 222 1111</a></p>
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
