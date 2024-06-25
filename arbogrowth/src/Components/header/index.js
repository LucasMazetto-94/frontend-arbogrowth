import "./Header.css";
import React, { useState } from "react";
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  NavbarBrand,
  NavbarToggler,
  Collapse,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/images/logo-correta.png";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar
      color="dark"
      dark
      expand="md"
      className="text-muted fs-11 p-3 fixed-top"
    >
      <NavbarBrand
        className="d-flex align-items-center ms-5"
        style={{ marginRight: "200px" }}
        href="#"
      >
        <img
          className="rounded "
          src={logo}
          style={{ width: "100px", height: "50px" }}
        />
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav
          className="fw-bolder w-50 justify-content-around ms-5 me-5"
          style={{ fontSize: "18px" }}
          navbar
        >
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/sobre">Sobre</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/produtos">Produtos</NavLink>
          </NavItem>
        </Nav>
        <Nav
          className="d-flex justify-content-end"
          style={{ marginLeft: "150px" }}
          navbar
        >
          <NavItem>
            <NavLink href="/carrinho">
              <FontAwesomeIcon icon={["fas", "shopping-cart"]} />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">
              <FontAwesomeIcon icon={["fas", "search"]} />
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
