import React from "react";
import {
  logo,
  BraceletSec1,
  BraceletSec2,
  BraceletSec3,
  BraceletSec4,
} from "../asstes";
import "../../css/BraceletThird.css";

function BraceletThird() {
  return (
    <div className="Bracelet-Third-section">
      <div className="head">
        <div className="text-section">
          <h6>GET READY TO SPARKLE</h6>
          <div className="head-img">
            <img src={logo} alt="img" />
          </div>
          <h1>Jewellery Collections</h1>
        </div>
      </div>
      <div className="main-container">
        <div className="inner-section">
          <div className="img-section">
            <a href="/Bracelet">
              <img src={BraceletSec4} alt="img" />
              <div className="title">
                <h1>Bracelets</h1>
              </div>
            </a>
          </div>
          <div className="img-section">
            <a href="/collection">
              <img src={BraceletSec3} alt="img" />
              <div className="title">
                <h1>Rings</h1>
              </div>
            </a>
          </div>
          <div className="img-section">
            <a href="/Neckless">
              <img src={BraceletSec2} alt="img" />
              <div className="title">
                <h1>Necklaces</h1>
              </div>
            </a>
          </div>
          <div className="img-section">
            <a href="/">
              <img src={BraceletSec1} alt="img" />
              <div className="title">
                <h1>Earring</h1>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BraceletThird;
