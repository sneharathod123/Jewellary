import React from "react";
import { Container } from "react-bootstrap";
import "../css/Collection.css";
import { collection1, collection2, collection3 } from "./asstes";

function Collection() {
  let data = [
    {
      img: collection1,
    },
    {
      img: collection2,
    },
    {
      img: collection3,
    },
  ];
  return (
    <div className="Collection-section">
      <Container>
        <div className="row main-box">
          {data.map((item, index) => {
            return (
              <div key={index} className="col-12  col-md-4">
                <div className="card">
                  <img src={item.img} alt="img" className="card=img" />
                  <div className="card-body">
                    <div className="card-title">
                      <h3>
                        Women's <br />
                        Diamond Jewellery
                      </h3>
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

export default Collection;
