import React, { useState, useEffect, useContext } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShippingFast,
  faPhoneVolume,
  faPersonChalkboard,
} from "@fortawesome/free-solid-svg-icons";

import beifort from "../../assets/images/clients/beifort_logo.png";
import nutriplant from "../../assets/images/clients/nutriplant_logo.png";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/cart";

const Home = () => {
  const [data, setData] = useState([]);
  const { addProductsCart } = useContext(CartContext);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/api/produtos`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        const selectedProduto = result.result.slice(0, 3);
        setData(selectedProduto);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="hero-area hero-bg">
        <div className="">
          <div className="row">
            <div className="col-lg-9 col-md-12 col-sm-12 col-12 offset-lg-2 text-center">
              <div className="hero-text">
                <div className="hero-text-tablecell">
                  <p
                    // style={{ marginLeft: windowWidth > 530 ? "20px" : "80px" }}
                    className="subtitle"
                  >
                    ArboGrowth
                  </p>
                  <h1>Produtos de Jardinagem</h1>
                  <div className="hero-btns">
                    <a href="/produtos" className="boxed-btn">
                      Produtos
                    </a>
                    <a
                      href="https://wa.me/5511940281896"
                      className="bordered-btn"
                    >
                      Contato
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="list-section pt-80 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4 mb-lg-0">
              <div className="list-box d-flex justify-content-center align-items-center">
                <div className="list-icon">
                  <FontAwesomeIcon icon={faShippingFast} size="3x" />
                </div>
                <div className="content ms-3 text-start">
                  <h3>Entregas</h3>
                  <p>Entregamos em todo Brasil</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4 mb-lg-0">
              <div className="list-box d-flex justify-content-center align-items-center">
                <div className="list-icon">
                  <FontAwesomeIcon icon={faPhoneVolume} size="3x" />
                </div>
                <div className="content ms-3 text-start">
                  <h3>Suporte</h3>
                  <p>Profissionais Capacitados</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="list-box d-flex justify-content-center align-items-center">
                <div className="list-icon">
                  <FontAwesomeIcon icon={faPersonChalkboard} size="3x" />
                </div>
                <div className="content ms-3 text-start">
                  <h3>Parcerias</h3>
                  <p>Temos as melhores marcas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="product-section mt-80 mb-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="section-title">
                <h3>
                  <span className="text-success">Nossos</span> Produtos
                </h3>
                <p>
                  Trabalhamos com as melhores marcas para seu cultivo, conheça
                  nossos
                  {windowWidth < 530 ? (
                    " produtos!"
                  ) : (
                    <>
                      <br /> produtos!
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            {data.map((item, index) => (
              <div className="col-lg-4 col-md-6 text-center" key={index}>
                <div className="single-product-item">
                  <div className="product-image">
                    <a href="single-product.html">
                      <img src={item.imagem} alt="" />
                    </a>
                  </div>
                  <h3>{item.nome}</h3>
                  <p className="product-price">
                    R${" "}
                    {item.valor.toLocaleString("pt-BR", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </p>
                  <Link
                    to="/carrinho"
                    className="btn btn-success"
                    onClick={() => {
                      addProductsCart(item);
                    }}
                  >
                    <i className="fas fa-shopping-cart"></i> Comprar
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="py-5 bg-secondary position-relative mt-5 pt-5">
        <div className="bg-overlay bg-overlay-pattern opacity-50"></div>
        <Container>
          <Row className="align-items-center gy-4 justify-content-center">
            <Col className="col-auto">
              <div>
                <h2 className="text-white mb-0 fw-semibold text-center">
                  Conheça os produtos de maior qualidade no mercado
                </h2>
              </div>
            </Col>
            <Col className="col-auto">
              <div>
                <Link
                  to="https://wa.me/5511940281896"
                  target="_blank"
                  className="btn bg-gradient btn-lg btn-success"
                >
                  <i className="ri-whatsapp-line align-middle me-1"></i>{" "}
                  WHATSAPP
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <div className="mt-5 pt-5 mb-5">
        <Container className="container-xl">
          <Row>
            <Col lg={12} className="text-center">
              <h3 className="fs-20">
                Parceiros <span className="text-success">Arbo</span>Growth
              </h3>
              <div className="d-flex flex-wrap justify-content-center aligm-items-center mt-2 mb-4 me-3">
                <div
                  className="client-image mb-3 mt-2 me-3"
                  style={{
                    width: "150px",
                    height: "100px",
                    backgroundImage: `url(${beifort})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                  alt="client-img"
                />
                <div
                  className="client-image mb-3 ms-2"
                  style={{
                    width: "150px",
                    height: "100px",
                    backgroundImage: `url(${nutriplant})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                  alt="client-img"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;
