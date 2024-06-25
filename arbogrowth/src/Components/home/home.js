import React from "react";
import { Row, Col, Container, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShippingFast,
  faPhoneVolume,
  faSync,
} from "@fortawesome/free-solid-svg-icons";
import ImageHome from "../../assets/images/home.png";
import Product1 from "../../assets/images/produto_destaque_11.jpeg";
import Product2 from "../../assets/images/produto_destaque_2.jpeg";
import Product3 from "../../assets/images/produto_destaque_3.jpeg";
import ClientAvatar from "../../assets/images/proprietario_1.png"; // Importe a imagem do avatar do cliente

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="hero-area hero-bg"
        style={{
          position: "relative",
          height: "650px",
          width: "100%",
          backgroundImage: `url(${ImageHome})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
          }}
        >
          <Row className="justify-content-center text-center p-0">
            <div className="hero-text">
              <div className="hero-text-tablecell">
                <p className="subtitle text-white">Arbogrowth</p>
                <h1 className="text-white">Produtos Agrícolas</h1>
                <div className="hero-btns mt-3">
                  <a href="shop.html" className="btn btn-primary me-2">
                    Nossos Produtos
                  </a>
                  <a href="contact.html" className="btn btn-outline-light">
                    Nosso Contato
                  </a>
                </div>
              </div>
            </div>
          </Row>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="list-section pt-5 pb-5">
        <Container style={{ backgroundColor: "#f1f1f1" }}>
          <Row
            style={{ border: "1px solid red" }}
            className="d-flex justify-content-center p-3"
          >
            <Col
              lg="4"
              md="6"
              className="mb-4 mb-lg-0"
              style={{ border: "1px solid red" }}
            >
              <div className="list-box d-flex align-items-center">
                <div className="list-icon">
                  <FontAwesomeIcon icon={faShippingFast} size="2x" />
                </div>
                <div className="content ms-3">
                  <h3>Entregas</h3>
                  <p>Qualquer Localidade</p>
                </div>
              </div>
            </Col>
            <Col lg="4" md="6" className="mb-4 mb-lg-0">
              <div className="list-box d-flex align-items-center">
                <div className="list-icon">
                  <FontAwesomeIcon icon={faPhoneVolume} size="2x" />
                </div>
                <div className="content ms-3">
                  <h3>Qualidade</h3>
                  <p>Atendimento Especializado</p>
                </div>
              </div>
            </Col>
            <Col lg="4" md="6">
              <div className="list-box d-flex align-items-center">
                <div className="list-icon">
                  <FontAwesomeIcon icon={faSync} size="2x" />
                </div>
                <div className="content ms-3">
                  <h3>Parceirias</h3>
                  <p>As melhores marcas</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Testimonial Section */}
      <div className="testimonail-section mt-2 mb-5">
        <Container>
          <Row>
            <Col lg="10" className="offset-lg-1 text-center">
              <div className="testimonial-sliders">
                <div className="single-testimonial-slider">
                  <div className="client-avater">
                    <img src={ClientAvatar} alt="Client Avatar" />
                  </div>
                  <div className="client-meta">
                    <h3>
                      Gustavo Arborista <span>Proprietário especialista</span>
                    </h3>
                    <p className="testimonial-body">
                      "Sed ut perspiciatis unde omnis iste natus error veritatis
                      et quasi architecto beatae vitae dicta sunt explicabo.
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit."
                    </p>
                    <div className="last-icon">
                      <i className="fas fa-quote-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Featured Products Section */}
      <div className="featured-products pt-3 pb-5">
        <Container>
          <h2 className="text-center mb-5">Produtos em Destaque</h2>
          <Row>
            <Col lg="4" md="6" className="mb-4">
              <Card>
                <Card.Img
                  style={{ maxHeight: "450px" }}
                  variant="top"
                  src={Product1}
                />
                <Card.Body>
                  <Card.Title>Radicolare</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content.
                  </Card.Text>
                  <Button variant="primary">Comprar Agora</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="4" md="6" className="mb-4">
              <Card>
                <Card.Img
                  style={{ maxHeight: "450px" }}
                  variant="top"
                  src={Product2}
                />
                <Card.Body>
                  <Card.Title>Vitalle</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content.
                  </Card.Text>
                  <Button variant="primary">Comprar Agora</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="4" md="6" className="mb-4">
              <Card>
                <Card.Img
                  style={{ maxHeight: "450px" }}
                  variant="top"
                  src={Product3}
                />
                <Card.Body>
                  <Card.Title>Florata</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content.
                  </Card.Text>
                  <Button variant="primary">Comprar Agora</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;
