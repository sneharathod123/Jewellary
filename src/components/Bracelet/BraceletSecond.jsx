import React from "react";
import "../../css/braceletSecond.css";
import { Container } from "react-bootstrap";
function BraceletSecond() {
  return (
    <div className="bracelet-second-section">
      <Container>
        <div className="row">
          <div className="col-12 col-lg-4">
            <div className="img-section">
              <img src={require("../../assets/gift.png")} alt="" />
              <div className="text-section">
                <h4>Gift Package</h4>
                <p>We'll choose the perfect gift box for your present.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="img-section">
              <img src={require("../../assets/diamond-icon.png")} alt="" />
            </div>
            <div className="text-section">
              <h4>Diamond Selection</h4>
              <p>Our consultants will help you to choose the right size.</p>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="img-section">
              <img src={require("../../assets/ring-icon.png")} alt="" />
            </div>
            <div className="text-section">
              <h4>Design Your Ring</h4>
              <p>Individual engraving to perpetuate the deepest feelings.</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default BraceletSecond;
