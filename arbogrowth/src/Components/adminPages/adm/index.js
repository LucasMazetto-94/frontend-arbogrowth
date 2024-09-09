import React, { useState } from "react";
import { Button, Container, Row, Col } from "reactstrap";
import AdmProdutos from "./admProdutos";
import AdmVendas from "./admVendas";
import ModalNovaSenha from "./ModalNovaSenha";

const Adm = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = () => setModalOpen(!modalOpen);

  return (
    <Container
      fluid
      style={{
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
        padding: "20px",
        position: "relative",
      }}
    >
      <div>
        <h2 className="text-start mb-4">Página Administrativa</h2>

        <Button
          className="btn btn-sm"
          color=""
          onClick={toggleModal}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <i className="ri-lock-password-line text-muted"></i>
        </Button>
      </div>
      <Row>
        <Col lg="12" md="12">
          <div
            className="p-4 mb-4"
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "10px",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h4 className="text-center mb-3">Gerenciar Produtos</h4>
            <AdmProdutos />
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg="12" md="12">
          <div
            className="p-4 mb-4"
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "10px",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h4 className="text-center mb-3">Gerenciar Vendas</h4>
            <AdmVendas />
          </div>
        </Col>
      </Row>

      <ModalNovaSenha toggleModal={toggleModal} modalOpen={modalOpen} />
    </Container>
  );
};

export default Adm;
