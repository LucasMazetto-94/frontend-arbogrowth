import React, { useState, useEffect } from "react";
import { Col } from "react-bootstrap";
const Footer = () => {
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
  return (
    <React.Fragment>
      <div className="footer-area">
        <div className="container">
          <div className="row">
            <Col lg={3} md={12}>
              <div className="footer-box about-widget">
                <h2 className="widget-title">Sobre Nós</h2>
                <p>
                  Somos a Arbogrowth e nos dedicamos ao cuidado das suas plantas
                  para criar um mundo mais saudável e sustentável, onde a
                  natureza prospera. Cultive conosco.
                </p>
                <div className="social-icons">
                  <ul className="sub-menu">
                    <li>
                      <a
                        href="https://www.instagram.com/arbogrowth?igsh=MnVxMXJkaDU2am5n"
                        target="_blank"
                      >
                        <i className="ri-instagram-fill"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i className="ri-facebook-circle-fill"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i className="ri-youtube-fill"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://wa.me/5511940281896" target="_blank">
                        <i className="ri-whatsapp-fill"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col
              lg={5}
              md={12}
              className={
                windowWidth <= 1000
                  ? "d-flex justify-content-start mb-5"
                  : "d-flex justify-content-center"
              }
            >
              <div className="footer-box">
                <h2 className="widget-title mb-3">Links Úteis</h2>
                <div>
                  <ul>
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/sobre">Sobre Nós</a>
                    </li>
                    <li>
                      <a href="/produtos">Produtos</a>
                    </li>
                    <li>
                      <a href="https://wa.me/5511940281896">Contato</a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <div className="col-lg-4 col-md-12">
              <div className="footer-box">
                <h2 className="widget-title">Contatos</h2>
                <ul>
                  <li>
                    <p>
                      <i className="ri-map-pin-fill"></i> Rua Miguel Speranza,
                      51, Quadra C lote 3, Jardim Valença, Valinhos/SP
                    </p>
                  </li>
                  <li>
                    <p>
                      <i className="ri-phone-fill"></i>+55 (11) 94028-1896
                    </p>
                  </li>
                  <li>
                    <p>
                      <i className="ri-mail-open-fill"></i>
                      Arbogrowth@gmail.com
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <p>
                Copyrights &copy; 2024 -{" "}
                <a href="https://www.linkedin.com/in/lucas-mazetto-b07685163/">
                  Lucas Mazetto
                </a>
                , Feito com ❤️
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
