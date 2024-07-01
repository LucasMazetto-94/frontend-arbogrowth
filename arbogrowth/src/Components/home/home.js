import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShippingFast,
  faPhoneVolume,
  faPersonChalkboard,
  FaPlay,
} from "@fortawesome/free-solid-svg-icons";
import Product1 from "../../assets/images/produto_destaque_11.jpeg";
import Product2 from "../../assets/images/produto_destaque_2.jpeg";
import Product3 from "../../assets/images/produto_destaque_3.jpeg";
import beifort from "../../assets/images/clients/beifort_logo.png";
import nutriplant from "../../assets/images/clients/nutriplant_logo.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero-area hero-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 offset-lg-2 text-center">
              <div className="hero-text">
                <div className="hero-text-tablecell">
                  <p className="subtitle"> ArboGrowth</p>
                  <h1>Produtos Agrícolas</h1>
                  <div className="hero-btns">
                    <Link to="/produtos" className="boxed-btn">
                      Produtos
                    </Link>
                    <a href="contact.html" className="bordered-btn">
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
      <div className="list-section pt-80 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <div className="list-box d-flex justify-content-start align-items-center">
                <div className="list-icon">
                  <FontAwesomeIcon icon={faShippingFast} size="2x" />
                </div>
                <div className="content ms-3">
                  <h3>Entragas</h3>
                  <p>Entregamos em todo Brasil</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <div className="list-box d-flex justify-content-center align-items-center">
                <div className="list-icon">
                  <FontAwesomeIcon icon={faPhoneVolume} size="2x" />
                </div>
                <div className="content ms-3">
                  <h3>Suporte</h3>
                  <p>
                    Trabalhamos com profissionais
                    <br /> capacitados
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="list-box d-flex justify-content-end align-items-center">
                <div className="list-icon">
                  <FontAwesomeIcon icon={faPersonChalkboard} size="2x" />
                </div>
                <div className="content ms-3">
                  <h3>Parcerias</h3>
                  <p>Temos as melhores marcas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="product-section mt-150 mb-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="section-title">
                <h3>
                  <span className="text-success">Nossos</span> Productos
                </h3>
                <p>
                  Trabalhamos com as melhores marcas para seu cultivo, conheça
                  nossos produtos!
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 text-center">
              <div className="single-product-item">
                <div className="product-image">
                  <a href="single-product.html">
                    <img src={Product1} alt="" />
                  </a>
                </div>
                <h3>Radiocolare</h3>
                <p className="product-price">R$ 85</p>
                <a href="cart.html" className="btn btn-success">
                  <i className="fas fa-shopping-cart"></i> Comprar
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 text-center">
              <div className="single-product-item">
                <div className="product-image">
                  <a href="single-product.html">
                    <img src={Product2} alt="" />
                  </a>
                </div>
                <h3>Vitalle</h3>
                <p className="product-price">R$ 70</p>
                <a href="cart.html" className="btn btn-success">
                  <i className="fas fa-shopping-cart"></i> Comprar
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0 text-center">
              <div className="single-product-item">
                <div className="product-image">
                  <a href="single-product.html">
                    <img src={Product3} alt="" />
                  </a>
                </div>
                <h3>Florata</h3>
                <p className="product-price">R$ 35</p>
                <a href="cart.html" className="btn btn-success">
                  <i className="fas fa-shopping-cart"></i> Comprar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="abt-section mb-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div
                style={{
                  position: "relative",
                  overflow: "hidden",
                  aspectRatio: "1920/1080",
                }}
              >
                <iframe
                  src="https://share.synthesia.io/embeds/videos/40902347-a1b7-407c-9199-9ce384d6833c"
                  title="Synthesia video player - abrogrowth"
                  allowFullScreen
                  allow="encrypted-media; fullscreen"
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    top: "0",
                    left: "0",
                    border: "none",
                    padding: "0",
                    margin: "0",
                    overflow: "hidden",
                  }}
                ></iframe>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="abt-text">
                <h2>
                  Somos <span className="text-success">Arbogrowth</span>
                </h2>
                <p>
                  Na Arbogrowth, fornecemos insumos, fertilizantes e
                  controladores de pragas de alta qualidade para apoiar o
                  crescimento saudável das suas plantações. Embora sejamos novos
                  no mercado, contamos com parceiros experientes e consolidados,
                  garantindo produtos eficazes e confiáveis para nossos
                  clientes.
                </p>
                <p>
                  Buscamos ajudar as pessoas a melhorarem suas experiência com o
                  cultivo de plantas, tanto espécies arbóreas quanto para o
                  menejo de jardins domésticos ou cultivos agrícolas
                </p>
                <a href="about.html" className="btn btn-success mt-4">
                  Saiba mais
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-5 bg-secondary position-relative mt-5 pt-5">
        <div className="bg-overlay bg-overlay-pattern opacity-50"></div>
        <Container>
          <Row className="align-items-center gy-4">
            <Col className="col-sm">
              <div>
                <h2 className="text-white mb-0 fw-semibold text-center">
                  Conheça os produtos de maior qualidade no mercado
                </h2>
              </div>
            </Col>
            <Col className="col-sm-auto">
              <div>
                <Link
                  to="/1.envato.market/velzon-admin"
                  target="_blank"
                  className="btn bg-gradient btn-lg btn-success"
                >
                  <i className="ri-shopping-cart-2-line align-middle me-1"></i>{" "}
                  Comprar Agora
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
              <h5 className="fs-20">
                Parceiros <span className="text-success">Arbo</span>Growth
              </h5>
              <div className="d-flex flex-wrap justify-content-center aligm-items-center mt-2 mb-4">
                <div className="client-image me-5 mb-3 mt-2">
                  <img
                    src={beifort}
                    alt="client-img"
                    className="img-fluid"
                    style={{ maxWidth: "150px", maxHeight: "80px" }}
                  />
                </div>
                <div className="client-image mb-3">
                  <img
                    src={nutriplant}
                    alt="client-img"
                    className="img-fluid"
                    style={{ maxWidth: "150px", maxHeight: "80px" }}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;
