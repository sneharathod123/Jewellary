import React from "react";
import {
  collectionSec1,
  collectionSec2,
  collectionSec3,
  collectionSec4,
  collectionSec5,
  collectionSec6,
  logo,
} from "../asstes";
import "../../css/second-collection.css";

function CollectSecond() {
  return (
    <div className="collection-second-sec">
      <div className="head">
        <div className="text-section">
          <h3>Our Collection</h3>
          <div className="head-img">
            <img src={logo} alt="img" />
          </div>
          <p className="gray">
            Lorem ipsum dolor sit amet <br /> consectetueradipiscing elit, sed
            diam nonummy nibh
          </p>
        </div>
      </div>
      <ul className="grid-container">
        <li>
          <a href="/">
            <img src={collectionSec1} alt="img" />
          </a>
          <p>
            <a href="/">SOLITAIRE</a>
          </p>
        </li>
        <li>
          <a href="/">
            <img src={collectionSec2} alt="img" />
          </a>
          <p>
            <a href="/">HIDDEN HALO</a>
          </p>
        </li>
        <li>
          <a href="/">
            <img src={collectionSec3} alt="img" />
          </a>
          <p>
            <a href="/">HALO</a>
          </p>
        </li>
        <li>
          <a href="/">
            <img src={collectionSec4} alt="img" />
          </a>
          <p>
            <a href="/">FLOATING DIAMOND COLLECTION</a>
          </p>
        </li>
        <li>
          <a href="/">
            <img src={collectionSec5} alt="img" />
          </a>
          <p>
            <a href="/">ADORE COLLECTION</a>
          </p>
        </li>
        <li>
          <a href="/">
            <img src={collectionSec6} alt="img" />
          </a>
          <p>
            <a href="/">BALLERINA COLLECTION</a>
          </p>
        </li>
      </ul>
    </div>
  );
}

export default CollectSecond;
