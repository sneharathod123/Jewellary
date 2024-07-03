import React from "react";
import { Container } from "react-bootstrap";
import { blog1, blog2, blog3 ,logo} from "../asstes";
import "../../css/Blog.css";
 

function Blog() {
  let data = [
    {
      img: blog1,
    },
    {
      img: blog2,
    },
    {
      img: blog3,
    },
  ];
  return (
    <div className="blog-section">
      <Container>
        <div className="head">
          <div className="text-section">
            <h3>Our Blog</h3>
            <div className="head-img">
              <img src={logo} alt="img" />
            </div>
            <p className="gray">
              Lorem ipsum dolor sit amet <br /> consectetueradipiscing elit, sed
              diam nonummy nibh
            </p>
          </div>
        </div>
        <div className="blog-section">
          <div className="row">
            {data.map((item, index) => {
              return (
                <div className="col-12  col-lg-4 blog-main-box" key={index}>
                  <div className="blog-img">
                    <img src={item.img} alt="img" />
                  </div>
                  <div className="text-sec py-3">
                    <h5>Lorem Ipsum Dolor</h5>
                    <ul>
                      <li>
                        <i className="fa-solid fa-calendar-days">
                          <a href="/">May 24 2015</a>
                        </i>
                      </li>
                      <li>
                        <i className="fa-solid fa-comment">
                          <a href="/">12 Comments</a>
                        </i>
                      </li>
                    </ul>
                    <p className="gray">
                      Lorem Ipsum is simply dummy text of the rinting andey
                      typesetting industry.
                    </p>
                    <a href="/" className="readMore">
                      Read More
                    </a>
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

export default Blog;
