import React, { useState, useEffect, useCallback } from "react";
import {
  Card,
  CardHeader,
  Row,
  Col,
  CardBody,
  CardFooter,
  Input,
  Button,
} from "reactstrap";
import SimpleBar from "simplebar-react";
import axios from "axios";
import "simplebar-react/dist/simplebar.min.css"; // Importando os estilos do SimpleBar
import "./AdmVendas.css";

const AdmVendas = () => {
  const [minhasVendas, setMinhasVendas] = useState([]);
  const [rastreio, setRastreio] = useState("");
  const [listaFiltrada, setListaFiltrada] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Estado para controlar a página atual
  const itemsPerPage = 12; // Número máximo de itens por página

  // função para formatar data para exibição
  const formatarData = (dataISO) => {
    const data = new Date(dataISO);
    const dia = String(data.getDate()).padStart(2, "0");
    const mes = String(data.getMonth() + 1).padStart(2, "0"); // Janeiro é 0!
    const ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
  };

  const fetchData = useCallback(async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/pedidos`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      setMinhasVendas(result.result);
      setListaFiltrada(result.result);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleSubmitRastreio = async (id) => {
    const payload = {
      id_entrega: id,
      codigo_rastreio: rastreio,
    };
    try {
      const token = localStorage.getItem("token");
      const response = await axios({
        method: "POST",
        url: `${process.env.REACT_APP_API_URL}/api/update_rastreio`,
        data: payload,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        alert("Código de rastreio atualizado com sucesso!");
        fetchData(); // Atualiza a lista de vendas
      } else {
        alert("Erro ao atualizar o código de rastreio.");
      }
    } catch (error) {
      console.error("Erro ao enviar código de rastreio:", error);
      alert("Erro ao enviar o código de rastreio.");
    }
  };

  const onChangeData = (value) => {
    const filteredAssessores = minhasVendas.filter(
      (item) =>
        item.numero_protocolo.toLowerCase().includes(value.toLowerCase()) ||
        item.cep.toLowerCase().includes(value.toLowerCase()) ||
        item.email.toLowerCase().includes(value.toLowerCase()) ||
        formatarData(item.data_pedido)
          .toLowerCase()
          .includes(value.toLowerCase())
    );
    setListaFiltrada(filteredAssessores);
    setCurrentPage(1); // Reseta para a primeira página quando filtra os dados
  };

  // Calcular o número total de páginas
  const totalPages = Math.ceil(listaFiltrada.length / itemsPerPage);

  // Calcular os itens a serem exibidos na página atual
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = listaFiltrada.slice(startIndex, endIndex);

  return (
    <div className="adm-vendas-container">
      <h5 className="mb-3">Acompanhamento das vendas</h5>
      <Input
        type="text"
        placeholder="Pesquisar venda"
        onChange={(e) => onChangeData(e.target.value)} // Chama a função onChangeData ao mudar o valor
        className="mb-3"
      />
      <Row>
        {currentItems.map((item) => (
          <Col className="mb-1" lg={3} md={4} sm={6} key={item.id_entrega}>
            <Card className="venda-card">
              <CardHeader>
                <h5>{item.numero_protocolo} </h5>
                <p>Data - {formatarData(item.data_pedido)}</p>
              </CardHeader>
              <SimpleBar style={{ maxHeight: "250px" }}>
                <CardBody>
                  <p className="fw-bold">Dados da Entrega</p>
                  <p>
                    Cep: <span>{item.cep}</span>{" "}
                  </p>
                  <p>
                    Rua: <span>{item.rua}</span>
                  </p>
                  <p>
                    Número: <span>{item.numero}</span>
                  </p>
                  <p>
                    Complemento:
                    <span>
                      {item.complemento !== null ? item.complemento : ""}
                    </span>
                  </p>
                  <p>
                    Cidade: <span>{item.cidade}</span>
                  </p>
                  <p>
                    Estado: <span>{item.estado}</span>
                  </p>
                  <p>
                    Email: <span>{item.email}</span>
                  </p>
                  <p>
                    Rastreio:{" "}
                    {item.codigo_rastreio === null ? (
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <Input
                          type="text"
                          name="rastreio"
                          style={{ marginRight: "5px" }}
                          onChange={(e) => setRastreio(e.target.value)}
                        />
                        <Button
                          color="success"
                          style={{ height: "100%" }}
                          onClick={() => handleSubmitRastreio(item.id_entrega)}
                        >
                          +
                        </Button>
                      </div>
                    ) : (
                      <span>{item.codigo_rastreio}</span>
                    )}
                  </p>
                  <p>
                    Produtos:{" "}
                    <span>
                      {item.produtos.map((i, index) => (
                        <ul key={index}>
                          <li>
                            {i.nome}, {i.quantidade}
                          </li>
                        </ul>
                      ))}
                    </span>
                  </p>
                </CardBody>
              </SimpleBar>
              <CardFooter>
                <p className="fw-bolder">
                  Total: <span>R$ {item.valor_total}</span>
                </p>
              </CardFooter>
            </Card>
          </Col>
        ))}
      </Row>
      {/* Navegação de página */}
      <div className="pagination">
        <Button
          className="ms-2"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Anterior
        </Button>
        {Array.from({ length: totalPages }, (_, index) => (
          <Button
            className="ms-2"
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            active={currentPage === index + 1}
          >
            {index + 1}
          </Button>
        ))}
        <Button
          className="ms-2"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Próxima
        </Button>
      </div>
    </div>
  );
};

export default AdmVendas;
