import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import "../css/topSection.css";

function TopSection() {
  return (
    <div className="main-section ">
      <Navbar expand="lg">
        <Container className="">
          <Navbar.Brand href="#home">
            <div className="logo-sec">
              <img src={require(`../assets/AnotherLogo.png`)} alt="img" />
            </div>
          </Navbar.Brand>
          
          <div className="top-wishlist">
            <div className="wish">
              <i className="fa-solid fa-heart"></i>My Wishlist
            </div>
            <div>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  USD
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">AUD</Dropdown.Item>
                  <Dropdown.Item href="#/action-1">AUD</Dropdown.Item>
                  <Dropdown.Item href="#/action-1">AUD</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  ENG
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">ENG</Dropdown.Item>
                  <Dropdown.Item href="#/action-1">GER</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default TopSection;
