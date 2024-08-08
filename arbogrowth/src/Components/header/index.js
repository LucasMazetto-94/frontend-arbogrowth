import "./Header.css";
import React, { useEffect, useState } from "react";
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
import logo from "../../assets/images/logo-correta-1.png";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Navbar
        style={{
          background: scrolled ? "rgba(0, 0, 0, 0.8)" : "transparent", // Cor escura com opacidade
          transition: "background-color 0.3s ease",
        }}
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
            className="rounded ms-4"
            src={logo}
            style={{ width: "100px", height: "50px" }}
          />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav
            className="fw-bolder w-50 justify-content-around"
            style={{ fontSize: "18px" }}
            navbar
          >
            <NavItem>
              <NavLink className="text-white" href="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-white" href="/sobre">
                Sobre
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-white" href="/produtos">
                Produtos
              </NavLink>
            </NavItem>
          </Nav>
          <Nav
            className="d-flex justify-content-end"
            style={{ marginLeft: "150px" }}
            navbar
          >
            <NavItem>
              <NavLink
                className="text-white"
                href="/carrinho"
                onClick={console.log("NavLink to carrinho")}
              >
                <FontAwesomeIcon icon={["fas", "shopping-cart"]} />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-white" href="#">
                <FontAwesomeIcon icon={["fas", "search"]} />
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
