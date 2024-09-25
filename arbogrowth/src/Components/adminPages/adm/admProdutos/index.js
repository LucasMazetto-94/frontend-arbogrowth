import React, { useState, useEffect, useCallback } from "react";
import { Table, Card, CardHeader, Button, Row, Col, Input } from "reactstrap";
import "./AdmProdutos.css"; // Certifique-se de que o caminho esteja correto
import ModalNovoProduto from "./ModalNovoProduto";
import ModalDelete from "./ModalDelete";

const AdmProdutos = () => {
  const [produtos, setProdutos] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const [myType, setMyType] = useState([]);
  const [newType, setNewType] = useState("");
  const [modalDelete, setModalDelete] = useState(false);
  const [itemDelete, setItemDelete] = useState(null);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const toggleDelete = () => {
    setModalDelete(!modalDelete);
  };
  const handleDelete = (id) => {
    setItemDelete(id);

    toggleDelete();
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

  const handleType = async (e) => {
    e.preventDefault();

    const payload = {
      tipo_produto: newType,
    };
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/cadastrar_tipo`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(payload),
        }
      );
      const data = await response.json();

      if (response.ok) {
        alert("Categoria cadastrada com sucesso!");
        fetchTipo();
      } else {
        alert(`Erro ao cadastrar categoria, verifique os dados: ${data.error}`);
      }
    } catch (error) {
      console.error("Erro ao cadastrar categoria:", error);
      alert("Erro interno ao cadastrar categoria.");
    }
    setNewType("");
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

  const fetchTipo = useCallback(async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/tipo_produto`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      setMyType(result.result);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchData();
    fetchTipo();
  }, [fetchData, fetchTipo]);

  return (
    <div className="adm-produtos-container">
      <Row>
        <Col lg={9}>
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
        </Col>
        <Col lg={3}>
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
                <th colspan="2">Categoria</th>
              </tr>
            </thead>
            <tbody>
              {myType.map((item) => (
                <tr key={item.id}>
                  <td>{item.nome}</td>

                  <td className="adm-produtos-actions">
                    {/* <i
                      style={{ cursor: "pointer" }}
                      className="ri-pencil-line"
                      onClick={() => handleItem(item)}
                    ></i> */}
                    <i
                      className="ri-delete-bin-7-line"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleDelete(item.id)}
                    ></i>
                  </td>
                </tr>
              ))}
              <tr>
                <td className="p-0">
                  <Input
                    className="rounded-0 text-center"
                    type="text"
                    id="newType"
                    name="newType"
                    value={newType}
                    placeholder="Nome"
                    onChange={(e) => setNewType(e.target.value)}
                  />
                </td>
                <td className="pb-0">
                  <i
                    className="ri-add-circle-line"
                    onClick={handleType}
                    style={{ cursor: "pointer" }}
                  ></i>
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
      <ModalNovoProduto
        modal={isOpen}
        toggle={toggle}
        item={selectedItem}
        buscarProdutos={fetchData}
      />
      <ModalDelete
        modalDelete={modalDelete}
        toggleDelete={toggleDelete}
        itemDelete={itemDelete}
        fetchTipo={fetchTipo}
      />
    </div>
  );
};

export default AdmProdutos;
