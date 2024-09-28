import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Row, Col } from "reactstrap";

const Details = () => {
  const location = useLocation();
  const navigate = useNavigate();
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
  // Se não houver dados, redireciona para a página de produtos
  if (!location.state) {
    navigate("/produtos");
    return null;
  }

  const { detalhes, imagem, nome, valor, categoria } = location.state;

  return (
    <div>
      <div className="breadcrumb-section breadcrumb-bg">
        <div className="container">
          <Row>
            <Col lg={8} className="offset-lg-2 text-center">
              <div className="breadcrumb-text">
                <p>Mostrar mais Detalhes</p>
                <h1>Produto</h1>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div
        className={`single-product mt-150 mb-150 ${
          windowWidth <= 530 ? "d-flex justify-content-center" : ""
        }`}
      >
        <div className="container">
          <Row>
            <Col
              lg={5}
              md={12}
              sm={12}
              className={`${
                windowWidth <= 530 ? "d-flex justify-content-center mb-5" : ""
              }`}
            >
              <div className="single-product-img">
                <img
                  style={{
                    maxHeight: "550px",
                    width: windowWidth <= 530 ? "100%" : "70%",
                  }}
                  src={imagem}
                  alt={nome}
                />
              </div>
            </Col>

            <Col
              lg={7}
              md={12}
              className="d-flex flex-column single-product-content-container"
            >
              <div className="single-product-content">
                <h3>{nome}</h3>
                <p className="single-product-pricing">
                  <span>Preço: </span>
                  <span className="fw-bold">
                    R${" "}
                    {valor.toLocaleString("pt-BR", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </span>
                </p>
                <p>{detalhes}</p>
                <div className="single-product-form mt-auto">
                  <p>
                    <strong>Categoria: </strong>
                    {categoria}
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Details;
