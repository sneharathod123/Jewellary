import React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import "../css/Header.css";
import { Link } from "react-router-dom";
import { AmonaLogo } from "../components/asstes";

export default function Header() {
  return (
    <>
      {/* <Navbar expand="lg" className=" main-menu fixed-top"> */}
      <Navbar expand="lg" className=" main-menu">
        <Container>
          <Navbar.Brand href="#home">
            <div className="logo">
              <img src={AmonaLogo} alt="img" />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="ms-auto">
              <Link to="/home">Home</Link>
              <NavDropdown title="Pages" id="basic-nav-dropdown" className="dropDown">
                <NavDropdown.Item href="/Bracelet">Bracellete</NavDropdown.Item>
                <NavDropdown.Item href="/collection">Ring</NavDropdown.Item>
                <NavDropdown.Item href="/Neckless">Neckless</NavDropdown.Item>
                <NavDropdown.Item href="/home">All</NavDropdown.Item>
              </NavDropdown>
              <Link to="#">Portfolio</Link>
              <Link to="#">Blogs</Link>
              <Link to="#">Shop</Link>
              <Link to="Contact">Contact</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
