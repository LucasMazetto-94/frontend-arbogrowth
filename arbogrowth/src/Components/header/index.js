import React, { useState } from "react";
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/images/logo-correta.png";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const toggleShopDropdown = () => setShopDropdownOpen(!shopDropdownOpen);

  return (
    <Navbar color="dark" dark expand="md" className="text-muted fs-11 p-2">
      <NavbarBrand href="#" style={{ display: "flex", alignItems: "center" }}>
        <img
          className="rounded ms-5"
          src={logo}
          style={{ width: "80px", height: "40px" }}
        />
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="m-auto" navbar>
          <NavItem>
            <NavLink href="#">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="about.html">Sobre</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="about.html">Produtos</NavLink>
          </NavItem>
        </Nav>
        <Nav navbar className="me-5">
          <NavItem>
            <NavLink href="cart.html">
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
