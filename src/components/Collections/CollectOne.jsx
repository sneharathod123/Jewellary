import React from "react";
import "../../css/CollectionOne.css";

function CollectOne() {
  return (
    <div>
      <div className="collection-bgContainer">
        <div className="overlay">
          <div className="video">
            <video className="videoTag" autoPlay loop muted>
              <source
                src={`https://gemootest.s3.us-east-2.amazonaws.com/s/res/514885813225336832/7a9b66ee2dbd662f755fed355bc68f2d.mp4?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARLZICB6QQHKRCV7K%2F20240708%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20240708T103135Z&X-Amz-SignedHeaders=host&X-Amz-Expires=7200&X-Amz-Signature=b8d1bde3dd35de5ae128cdc79a5b8c6f32131078b19460d0ae7c12048cee2f70`}
                type="video/mp4"
              />
            </video>
            <div className="video-css"></div>
          </div>
          <div className="text-container">
            <h3>FINE JEWELRY EVERYDAY</h3>
            <a href="/">EXPLORE OUR COLLECTION</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollectOne;
