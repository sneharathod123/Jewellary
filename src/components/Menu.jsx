import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../css/Menu.css";

function Menu() {
  return (
    <div className="Main-menu">
      <Navbar expand="md">
        <Container>
          <Navbar.Brand href="#home">
            <div className="logo">
              <img src={require("../assets/logo2.png")} alt="" />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto navbar">
              <Nav.Link href="#home links">Home</Nav.Link>
              <NavDropdown title="Page" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1"> Account</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Coming Soon
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  404 Error
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Shop" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  {" "}
                  Collection Full
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Collection Sidebar
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Cart</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Checkout</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Order</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Product Detail
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Blog" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Blog Style 1
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">
                  Blog Style 2
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Blog Style With Sidebar
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Single Blog
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#home links">Faqs</Nav.Link>
              <Nav.Link href="#home links">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Nav className="me-auto menu-icons" expand="lg">
            <Nav.Link href="#home links">
              <div className="nav-icon">
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
            </Nav.Link>
            <Nav.Link href="#home links">
              <div className="nav-icon">
                <i className="fa-solid fa-user"></i>
              </div>
            </Nav.Link>
            <Nav.Link href="#home links">
              <div className="nav-icon">
                <i className="fa-solid fa-cart-shopping"></i>
              </div>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Menu;
