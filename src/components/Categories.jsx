import React from "react";
import { Container } from "react-bootstrap";
import "../css/categories.css";

function Categories() {
  return (
    <div className="categories-section">
      <Container>
        <div className="categories-head">
          <div className="text-section">
            <h3>Our Categories</h3>
            <div className="categories-head-img">
              <img src={require("../assets/logoImage.png")} alt="img" />
            </div>
            <p className="gray">
              Lorem ipsum dolor sit amet <br /> consectetueradipiscing elit, sed
              diam nonummy nibh
            </p>
          </div>
        </div>
        <div className="categories-card">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="category-card">
                <img src={require("../assets/category1.png")} alt="img" />
                <div className="category-text">
                  <h5>Necklaces And Rings</h5>
                  <p className="gray">View the collection</p>
                </div>
                <div className="category-card-body">
                  <div className="txt-sec">
                    <h5>Necklaces And Rings</h5>
                    <p>Lorem Ipsum is a dummy text that is mainly used by.</p>
                    <button>View Shop</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="category-card">
                <img src={require("../assets/category2.png")} alt="img" />
                <div className="category-text">
                  <h5>Necklaces And Rings</h5>
                  <p className="gray">View the collection</p>
                </div>
                <div className="category-card-body">
                  <div className="txt-sec">
                    <h5>Necklaces And Rings</h5>
                    <p>Lorem Ipsum is a dummy text that is mainly used by.</p>
                    <button>View Shop</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="category-card">
                <img src={require("../assets/category3.png")} alt="img" />
                <div className="category-text">
                  <h5>Necklaces And Rings</h5>
                  <p className="gray">View the collection</p>
                </div>
                <div className="category-card-body">
                  <div className="txt-sec">
                    <h5>Necklaces And Rings</h5>
                    <p>Lorem Ipsum is a dummy text that is mainly used by.</p>
                    <button>View Shop</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="category-card">
                <img src={require("../assets/category4.png")} alt="img" />
                <div className="category-text">
                  <h5>Necklaces And Rings</h5>
                  <p className="gray">View the collection</p>
                </div>
                <div className="category-card-body">
                  <div className="txt-sec">
                    <h5>Necklaces And Rings</h5>
                    <p>Lorem Ipsum is a dummy text that is mainly used by.</p>
                    <button>View Shop</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Categories;
