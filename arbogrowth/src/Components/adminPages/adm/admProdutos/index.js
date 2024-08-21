import React, { useState, useEffect, useCallback } from "react";
import { Table, Card, CardHeader, Button } from "reactstrap";
import "./AdmProdutos.css"; // Certifique-se de que o caminho esteja correto
import ModalNovoProduto from "./ModalNovoProduto";

const AdmProdutos = () => {
  const [produtos, setProdutos] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleItem = (item) => {
    setSelectedItem(item);
    console.log(item);
    toggle();
  };

  const handleNoItem = () => {
    setSelectedItem({});

    toggle();
  };

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/produtos`
      );
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
          <Button color="success" size="sm" onClick={handleNoItem}>
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
              <th>Ativo</th>
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
                <td>{item.ativo === 1 ? "Ativo" : "Inativo"}</td>
                <td className="adm-produtos-actions">
                  <i
                    style={{ cursor: "pointer" }}
                    className="ri-pencil-line"
                    onClick={() => handleItem(item)}
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
      <ModalNovoProduto
        modal={isOpen}
        toggle={toggle}
        item={selectedItem}
        buscarProdutos={fetchData}
      />
    </div>
  );
};

export default AdmProdutos;
