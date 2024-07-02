import React from "react";
import "../css/Product.css";
import { Container } from "react-bootstrap";
import {
  product2,
  product1,
  product3,
  product4,
  product5,
  product6,
  product7,
  product8,
} from "./asstes";

function Products() {
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
              <img src={require("../assets/logoImage.png")} alt="img" />
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
                      <button>Quick View</button>
                    </div>
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
