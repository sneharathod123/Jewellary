import React from "react";
import { Container } from "react-bootstrap";
import "../../css/BraceletFourth.css";
import {
  braceletFourth1,
  braceletFourth1B,
  braceletFourth5,
  braceletFourth5B,
  braceletFourth3,
  braceletFourth3B,
  braceletFourth4,
  braceletFourth4B,
  braceletFourth6,
  braceletFourth6B,
  braceletFourth7,
  braceletFourth7B,
  braceletFourth8,
  braceletFourth8B,
  braceletFourth9,
  braceletFourth9B,
  logo,
} from "../asstes";

function BraceletFourth() {
  return (
    <div className="bracelet-fourth-section">
      <Container>
        <div className="head">
          <div className="text-section">
            <h6>OUR BESTSELLING</h6>
            <div className="head-img">
              <img src={logo} alt="img" />
            </div>
            <h1>Our Jewelry Selection</h1>
          </div>
        </div>
        <div className="row main-container">
          <div className="col-12 col-md-6 col-lg-3 tc-container">
            <img src={braceletFourth1} alt="img" />
            <img src={braceletFourth1B} className="top-img" alt="img" />
          </div>
          <div className="col-12 col-md-6 col-lg-3 tc-container">
            <img src={braceletFourth5} alt="img" />
            <img src={braceletFourth5B} className="top-img" alt="img" />
          </div>
          <div className="col-12 col-md-6 col-lg-3 tc-container">
            <img src={braceletFourth3} alt="img" />
            <img src={braceletFourth3B} className="top-img" alt="img" />
          </div>
          <div className="col-12 col-md-6 col-lg-3 tc-container">
            <img src={braceletFourth4} alt="img" />
            <img src={braceletFourth4B} className="top-img" alt="img" />
          </div>
        </div>
        <div className="row ">
          <div className="col-12 col-md-6 col-lg-3 tc-container">
            <img src={braceletFourth6} alt="img" />
            <img src={braceletFourth6B} className="top-img" alt="img" />
          </div>
          <div className="col-12 col-md-6 col-lg-3 tc-container">
            <img src={braceletFourth7} alt="img" />
            <img src={braceletFourth7B} className="top-img" alt="img" />
          </div>
          <div className="col-12 col-md-6 col-lg-3 tc-container">
            <img src={braceletFourth8} alt="img" />
            <img src={braceletFourth8B} className="top-img" alt="img" />
          </div>
          <div className="col-12 col-md-6 col-lg-3 tc-container">
            <img src={braceletFourth9} alt="img" />
            <img src={braceletFourth9B} className="top-img" alt="img" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default BraceletFourth;
