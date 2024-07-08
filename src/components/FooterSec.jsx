import React from "react";
import { Container } from "react-bootstrap";
import "../css/footer.css";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
function FooterSec() {
  return (
    <div className="footer-container">
      <div className="footer-section">
        <Container>
          <div className="row footer">
            <div className="col-12 col-md-6 col-lg-3 footer-box">
              <h5>About Us</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry Lorem Ipsum has been the industry.
              </p>
              <EmailOutlinedIcon />
              hello@gmail.con
              <br />
              <LocalPhoneOutlinedIcon />
              P: 3333 222 1111,
              <br />
              <LocationOnOutlinedIcon />
              99 Barnard St States - GA 22222
            </div>
            <div className="col-12 col-md-6 col-lg-3 footer-box">
              <h5>Information</h5>
              <ul>
                <li>
                  <a href="/">About Us</a>
                </li>
                <li>
                  <a href="/">Customer Service</a>
                </li>
                <li>
                  <a href="/">Privacy Policy</a>
                </li>
                <li>
                  <a href="/">Site Map</a>
                </li>
                <li>
                  <a href="/">Advanced Search</a>
                </li>
                <li>
                  <a href="/">Orders and Returns</a>
                </li>
                <li>
                  <a href="/">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-6 col-lg-3 footer-box">
              <h5>Information</h5>
              <ul>
                <li>
                  <a href="/">Sign In</a>
                </li>
                <li>
                  <a href="/">View Cart</a>
                </li>
                <li>
                  <a href="/">My WishList</a>
                </li>
                <li>
                  <a href="/">Track My Order</a>
                </li>
                <li>
                  <a href="/">Private Policy</a>
                </li>
                <li>
                  <a href="/">Shipping & Returns</a>
                </li>
                <li>
                  <a href="/">Help</a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-6 col-lg-3 footer-box">
              <h5>Newsletter</h5>
              <p>
                Sign up for our mailing list to get latest updates and offers.
              </p>
              <input type="text" placeholder="Email Address" />
              <button className=" send">
                <i className="fa-solid fa-paper-plane"></i>
              </button>
              <p>We respect your privacy</p>
              <div>
                <ul className="footer-icon">
                  <li>
                    <a href="/">
                      <TwitterIcon />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <FacebookIcon />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <LinkedInIcon />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <InstagramIcon />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <PinterestIcon />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="copy-right">
        <p>
          Copyright © 2017 Responsive Theme - Jewellry and All Rights Reserved.
          Designed by ITGEEKS
        </p>
      </div>
    </div>
  );
}

export default FooterSec;
