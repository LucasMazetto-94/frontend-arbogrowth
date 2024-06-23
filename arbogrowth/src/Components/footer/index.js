import React from "react";
import { Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="footer-area bg-dark text-muted mb-0">
      <div className="container d-flex justify-content-between">
        <Row>
          <Col xxl={4} xl={4} lg={4} md={6}>
            <div className="footer-box about-widget">
              <h2 className="widget-title" style={{ color: "#6c757d" }}>
                Sobre nós
              </h2>
              <p style={{ color: "#6c757d" }}>
                Acreditamos que o manejo adequado das é essencial para o sucesso
                do cultivo. Por isso, dedicamo-nos a oferecer produtos e
                serviços que promovam a saúde e a produtividade do seu cultivo.
              </p>
            </div>
          </Col>
          <Col xxl={4} xl={4} lg={4} md={12}>
            <div className="footer-box pages">
              <h2
                className="widget-title text-center"
                style={{ color: "#6c757d" }}
              >
                Redes Sociais
              </h2>
              <ul
                className="mt-4 d-flex list-unstyled justify-content-between me-5 ms-5"
                style={{ color: "#6c757d" }}
              >
                <li className="me-2">
                  <i
                    className="lab la-facebook"
                    style={{ fontSize: "30px" }}
                  ></i>
                </li>
                <li className="me-2">
                  <i
                    className="lab la-instagram"
                    style={{ fontSize: "30px" }}
                  ></i>
                </li>
                <li className="me-2">
                  <i
                    className="lab la-linkedin-in"
                    style={{ fontSize: "30px" }}
                  ></i>
                </li>
                <li className="me-2">
                  <i
                    className="lab la-twitter"
                    style={{ fontSize: "30px" }}
                  ></i>
                </li>
              </ul>
            </div>
          </Col>
          <Col xxl={3} xl={3} lg={3} md={6}>
            <div className="footer-box get-in-touch text-center">
              <h2 className="widget-title" style={{ color: "#6c757d" }}>
                Entre em contato
              </h2>
              <ul className="list-unstyled" style={{ color: "#6c757d" }}>
                <li>34/8, East Hukupara, Gifirtok, Sadan.</li>
                <li>suporte@arbogrowth.com.br</li>
                <li>+55 (19)-99193-9339</li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
