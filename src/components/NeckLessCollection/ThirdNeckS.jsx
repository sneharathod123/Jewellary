import React from "react";
import { NecklessThird1, NecklessThirdLogo,gridAfter } from "../asstes";
import "../../css/thirdNeck.css";
function ThirdNeckS() {
  return (
    <div className="thirdNecklessSection">
      <div className="row">
        <div className="col-12 col-lg-6">
          <img src={NecklessThird1} alt="img" />
        </div>
        <div className="col-12 col-lg-6 second-col">
          <div className="first-text-sec">
            <p>FESTIVE SALE OFFERS</p>
            <h2>Handmade Jewelry For Special Occasions</h2>
            <p>
              Aliquet eget sit amet tellus cras adipiscing enim. Non quam lacus
              suspendisse faucibus interdum posuere. Lobortis mattis aliquam
              faucibus purus in massa tempor nec.
            </p>
            <div className="third-sec-logo">
              <img src={NecklessThirdLogo} alt="img" />
            </div>
            <h2>Double Row Earrings</h2>
            <button>Explore Now</button>
          </div>
          <div className="second-sec">
            <div className="second-sec-img">
            <img src={gridAfter} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThirdNeckS;
