import React, { useState, useEffect } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  Input,
  Row,
  Col,
} from "reactstrap";

const ModalNovoProduto = ({ modal, toggle }) => {
  const [tipoProduto, setTipoProduto] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/tipo_produto");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        setTipoProduto(result.result);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <Row className="mb-3">
            <Col xs={6}>
              <Label htmlFor="nomeProduto">Nome do Produto</Label>
              <Input
                type="text"
                id="nomeProduto"
                placeholder="Nome do produto"
              />
            </Col>
            <Col xs={6}>
              <Label htmlFor="imagemProduto">Imagem do Produto</Label>
              <Input
                type="file"
                id="imagemProduto"
                accept=".png, .jpg, .jpeg"
              />
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <Label htmlFor="valorProduto">Valor do Produto</Label>
              <Input type="text" id="valorProduto" />
            </Col>
            <Col xs={6}>
              <Label htmlFor="tipoProduto">Tipo do Produto</Label>
              <Input type="select" id="tipoProduto">
                <option value="">Selecione um tipo</option>
                {tipoProduto.map((item) => (
                  <option value={item.id} key={item.id}>
                    {item.nome}
                  </option>
                ))}
              </Input>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col xs={6}>
              <Label htmlFor="alturaProduto">Altura do Produto</Label>
              <Input id="alturaProduto" />
            </Col>
            <Col xs={6}>
              <Label htmlFor="larguraProduto">Largura do Produto</Label>
              <Input id="larguraProduto" />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col xs={6}>
              <Label htmlFor="comprimento">Comprimento do Produto</Label>
              <Input id="comprimento" />
            </Col>
            <Col xs={6}>
              <Label htmlFor="pesoProduto">Peso do Produto</Label>
              <Input id="pesoProduto" />
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={toggle}>
            Cadastrar
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalNovoProduto;
