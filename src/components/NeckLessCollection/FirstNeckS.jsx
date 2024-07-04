import React from "react";
import { necklessHeroImg } from "../asstes";
import "../../css/heroSectionNeck.css";

function FirstNeckS() {
  return (
    <div className="heroSection">
      <div className="img-section">
        <img src={necklessHeroImg} alt="img" />
        <div className="img-style"></div>
        <div className="text-section">
          <h1>
            Elegant and timeless pieces <br />
            for the modern woman
          </h1>
          <button>Shop Now</button>
        </div>
      </div>
    </div>
  );
}

export default FirstNeckS;
