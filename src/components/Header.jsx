import React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import "../css/Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <Navbar expand="lg" className=" main-menu fixed-top">
        <Container>
          <Navbar.Brand href="#home">
            <div className="logo">
              <img src={require(`../assets/AnotherLogo.png`)} alt="img" />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="ms-auto">
              <Link to="home">Home</Link>
              <Link to="#">Pages</Link>
              <Link to="#">Portfolio</Link>
              <Link to="#">Blogs</Link>
              <Link to="#">Shop</Link>
              <Link to="Contact">Contact</Link>
              <NavDropdown
                title="Dropdown"
                id="basic-nav-dropdown"
                className="dropdowen"
              >
                <NavDropdown.Item href="#" className="menu">
                  demo1
                </NavDropdown.Item>
                <NavDropdown.Item href="#" className="menu">
                  demo2
                </NavDropdown.Item>
                <NavDropdown.Item href="#" className="menu">
                  demo3
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
