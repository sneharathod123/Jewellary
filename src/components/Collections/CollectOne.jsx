import React from "react";
import "../../css/CollectionOne.css";
import { video } from "../asstes";

function CollectOne() {
  return (
    <div>
      <div className="collection-bgContainer">
        <div className="overlay">
          <div className="video">
            <video className="videoTag" autoPlay loop muted>
              <source
                src={video}
                type="video/mp4"
              />
            </video>
            <div className="video-css"></div>
          </div>
          <div className="text-container">
            <p>
              <a href="/home">HOME</a>/RING
            </p>
            <h3>FINE JEWELRY EVERYDAY</h3>
            <a href="/">EXPLORE OUR COLLECTION</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollectOne;
