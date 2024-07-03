import React from "react";
import { Container } from "react-bootstrap";
import "../../css/categories.css";
import { category1, category2, category3, category4 ,logo} from "../asstes";

function Categories() {
  let data = [
    {
      img: category1,
    },
    {
      img: category2,
    },
    {
      img: category3,
    },
    {
      img: category4,
    },
  ];
  return (
    <div className="categories-section">
      <Container>
        <div className="head">
          <div className="text-section">
            <h3>Our Categories</h3>
            <div className="head-img">
              <img src={logo} alt="img" />
            </div>
            <p className="gray">
              Lorem ipsum dolor sit amet <br /> consectetueradipiscing elit, sed
              diam nonummy nibh
            </p>
          </div>
        </div>
        <div className="categories-card">
          <div className="row">
            {data.map((item, index) => {
              return (
                <div className="col-12 col-md-6 col-lg-3" key={index}>
                  <div className="category-card">
                    <img src={item.img} alt="img" />
                    <div className="category-text">
                      <h5>Necklaces And Rings</h5>
                      <p className="gray">View the collection</p>
                    </div>
                    <div className="category-card-body">
                      <div className="txt-sec">
                        <h5>Necklaces And Rings</h5>
                        <p>
                          Lorem Ipsum is a dummy text that is mainly used by.
                        </p>
                        <button><a href="/collection">View Shop</a></button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Categories;
