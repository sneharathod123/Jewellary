import React from "react";
import {
  exploreCollection1,
  exploreCollection2,
  exploreCollection3,
  exploreCollection4,
} from "../asstes";
import "../../css/CollectionFour.css";
function CollectionFour() {
  return (
    <div className="explore-collection">
      <h1>EXPLORE OUR COLLECTIONS</h1>
      <div className="row">
        <div className="col-12 col-lg-6">
          <img src={exploreCollection1} alt="img" />
          <h5>Birthstone Bands Collection</h5>
        </div>
        <div className="col-12 col-lg-6">
          <img src={exploreCollection2} alt="img" />
          <h5>Ballerina Collection</h5>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-lg-6">
          <img src={exploreCollection3} alt="img" />
          <h5>Solitaire Collection</h5>
        </div>
        <div className="col-12 col-lg-6">
          <img src={exploreCollection4} alt="img" />
          <h5>Diamond Hoops Collection</h5>
        </div>
      </div>
    </div>
  );
}

export default CollectionFour;
