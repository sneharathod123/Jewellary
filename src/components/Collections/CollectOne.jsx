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
                src="https://d3v55qvjb2v012.cloudfront.net/BltL/2024/07/09/10/36/cZiQ6zV8doY/sc.mp4?srcid=cZiQ6zV8doY&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kM3Y1NXF2amIydjAxMi5jbG91ZGZyb250Lm5ldC9CbHRMLzIwMjQvMDcvMDkvMTAvMzYvY1ppUTZ6Vjhkb1kvc2MubXA0P3NyY2lkPWNaaVE2elY4ZG9ZIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzIwNjA4NDEwfX19XX0_&Signature=U9siROFDxF5~Pbdw5aKXbcqCwSG-Pv4Q2sYngE~XPNhJP41gG0xYC7B38q7tAOBMzOHpn~pR5Yap1yi4BRi21tWqiYTpI6TNDv1BE-H8iN9lipQBzR9N8KPxN8j8dgrowCPFck2ALR7MH8Y9P4dQKN6pALHGONSkvs9zigEvmD4_&Key-Pair-Id=APKAI4E2RN57D46ONMEQ"
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
