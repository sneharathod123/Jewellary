import React from "react";
import "../../css/SecondNecks.css";
import {
  logo,
  NecklessSecond1,
  NecklessSecond2,
  NecklessSecond3,
  NecklessSecond4,
  // NecklessSecond5,
  // NecklessSecond6,
  // NecklessSecond7,
} from "../asstes";
function SecondNeckS() {
  return (
    <div className="secondSectionNeck">
      <div className="head">
        <div className="text-section">
          <h3>Trending Now</h3>
          <div className="head-img">
            <img src={logo} alt="img" />
          </div>
        </div>
      </div>
      <div className="about-item">
        <div className="subclass">
          <div>
            <div className="row image-boxes">
              <div className="col-12 col-md-4 boxes">
                <img src={NecklessSecond1} alt="img" />
              </div>
              <div className="col-12 col-md-4 boxes">
                <img src={NecklessSecond2} alt="img" />
              </div>
              <div className="col-12 col-md-4 boxes">
                <img src={NecklessSecond3} alt="img" />
              </div>
            </div>
            <div className="row image-boxes">
              <div className="col-12 col-md-4 boxes">
                <img src={NecklessSecond4} alt="img" />
              </div>
              <div className="col-12 col-md-4 boxes">
                <img src={NecklessSecond1} alt="img" />
              </div>
              <div className="col-12 col-md-4 boxes">
                <img src={NecklessSecond2} alt="img" />
              </div>
            </div>
          </div>
          <div className="side-box">
            <img
              src={require("../../assets/necklessSecondSecSideImg.png")}
              alt="img"
            />
            <div className="text-section">
              <p>Antique Luxury</p>
              <h1>Pearls Jewels</h1>
              <button>SHOP NOW</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondNeckS;
