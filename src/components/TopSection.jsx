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
          {/* <Navbar.Collapse id="basic-navbar-nav " className="top-menu">
            <Nav className="ms-auto">
              <Nav.Link href="#home links">
                <i className="fa-solid fa-heart"></i>My Wishlist
              </Nav.Link>
              <NavDropdown title="ENG" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">GER</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="USD" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">AUD</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">AUR</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">GBP</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse> */}
        </Container>
      </Navbar>
    </div>
  );
}

export default TopSection;
