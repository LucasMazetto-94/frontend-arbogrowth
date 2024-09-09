import "./Header.css";
import React, { useEffect, useState, useContext } from "react";
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
import logo from "../../assets/images/logo_teste.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { CartContext } from "../../Context/cart";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { productsCart } = useContext(CartContext);

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
            alt="Logo"
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
              <NavLink className="text-white" href="/carrinho">
                <div className="position-relative">
                  <FontAwesomeIcon icon={["fas", "shopping-cart"]} />
                  {productsCart.length >= 1 && (
                    <span
                      className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                      style={{
                        fontSize: "0.75rem",
                        width: "1.0rem",
                        height: "1.0rem",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {productsCart.length}
                    </span>
                  )}
                </div>
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
