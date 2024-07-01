import React from "react";
import "../css/Product.css";
import { Container } from "react-bootstrap";
function Products() {
  return (
    <div className="product-section">
      <Container>
        <div className="heading-box">
          <h3>Our Products</h3>
          <div className="product-icon">
              <div className="product-logo">
                <img src={require('../assets/logoImage.png')} alt="img" />
              </div>
            {/* <ul>
              <li>
                <i className="fa-regular fa-gem"></i>
              </li>
              <li className="center-icon">
                <i className="fa-regular fa-gem"></i>
              </li>
              <li>
                <i className="fa-regular fa-gem"></i>
              </li>
            </ul> */}
          </div>
          <p>
            Lorem ipsum dolor sit amet
            <br /> consectetur adipisicing elit. Tempore, recusandae.
          </p>
        </div>
        <div className="products row">
          <div className="col-12 col-md-6 col-lg-3">
            <div className="product-card">
              <img src={require("../assets/Products1.png")} alt="" />
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
          <div className="col-12 col-md-6 col-lg-3">
            <div className="product-card">
              <img src={require("../assets/Products2.png")} alt="" />
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
          <div className="col-12 col-md-6 col-lg-3">
            <div className="product-card">
              <img src={require("../assets/Products3.png")} alt="" />
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
          <div className="col-12 col-md-6 col-lg-3">
            <div className="product-card">
              <img src={require("../assets/Products4.png")} alt="" />
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
          <div className="col-12 col-md-6 col-lg-3">
            <div className="product-card">
              <img src={require("../assets/Products5.png")} alt="" />
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
          <div className="col-12 col-md-6 col-lg-3">
            <div className="product-card">
              <img src={require("../assets/Products6.png")} alt="" />
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
          <div className="col-12 col-md-6 col-lg-3">
            <div className="product-card">
              <img src={require("../assets/Products7.png")} alt="" />
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
          <div className="col-12 col-md-6 col-lg-3">
            <div className="product-card">
              <img src={require("../assets/Products8.png")} alt="" />
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
        </div>
      </Container>
    </div>
  );
}

export default Products;
