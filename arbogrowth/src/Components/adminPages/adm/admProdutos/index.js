import React, { useState, useEffect, useCallback } from "react";
import { Table, Card, CardHeader, Button } from "reactstrap";
import "./AdmProdutos.css"; // Certifique-se de que o caminho esteja correto
import ModalNovoProduto from "./ModalNovoProduto";

const AdmProdutos = () => {
  const [produtos, setProdutos] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:5000/api/produtos");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      setProdutos(result.result);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="adm-produtos-container">
      <Card>
        <CardHeader className="d-flex justify-content-between align-items-center">
          <h5 className="mb-0">Produtos</h5>
          <Button color="success" size="sm" onClick={toggle}>
            +
          </Button>
        </CardHeader>
        <Table striped className="adm-produtos-table mb-0">
          <thead
            style={{
              position: "sticky",
              top: "0",
              zIndex: "1000",
              backgroundColor: "#f8f9fa",
            }}
          >
            <tr>
              <th>Nome</th>
              <th>Valor</th>
              <th>Categoria</th>
              <th>Altura</th>
              <th>Largura</th>
              <th>Comprimento</th>
              <th>Peso</th>
              <th>Imagem</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map((item) => (
              <tr key={item.id}>
                <td>{item.nome}</td>
                <td>{item.valor}</td>
                <td>{item.categoria}</td>
                <td>{item.altura}</td>
                <td>{item.largura}</td>
                <td>{item.comprimento}</td>
                <td>{item.peso}</td>
                <td>
                  <img
                    src={item.imagem}
                    alt={item.nome}
                    className="produto-imagem"
                  />
                </td>
                <td className="adm-produtos-actions">
                  <i className="ri-delete-bin-line"></i>
                  <i className="ri-pencil-line"></i>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
      <ModalNovoProduto modal={isOpen} toggle={toggle} />
    </div>
  );
};

export default AdmProdutos;
