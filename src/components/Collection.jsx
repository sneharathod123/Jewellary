import React from "react";
import { Container } from "react-bootstrap";
import "../css/Collection.css";

function Collection() {
  return (
    <div className="Collection-section">
      <Container>
        <div className="row main-box">
          <div className="col-12  col-md-4">
            <div className="card">
              <img
                src={require(`../assets/collection1.jpg`)}
                alt="img"
                className="card=img"
              />
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
          <div className="col-12  col-md-4">
            <div className="card">
              <img
                src={require(`../assets/collection2.jpg`)}
                alt="img"
                className="card=img"
              />
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
          <div className="col-12  col-md-4">
            <div className="card">
              <img
                src={require(`../assets/collection3.jpg`)}
                alt="img"
                className="card=img"
              />
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
        </div>
      </Container>
    </div>
  );
}

export default Collection;
