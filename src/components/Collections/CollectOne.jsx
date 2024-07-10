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
              <source src={'https://gemootest.s3.us-east-2.amazonaws.com/s/res/669247421423173632/d22e2500e27cf2da59f8526e135abf77.mp4?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARLZICB6QQHKRCV7K%2F20240710%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20240710T045814Z&X-Amz-SignedHeaders=host&X-Amz-Expires=7200&X-Amz-Signature=17fc7beff529a64cc976c18d5369f3bcdf7a3b35d2fcc1e7abe9f5bf0686a4b9'} type="video/mp4" />
            </video>
            <div className="video-css"></div>
          </div>
          <div className="text-container">
            <p>
              <a href="/">HOME</a>/RING
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
