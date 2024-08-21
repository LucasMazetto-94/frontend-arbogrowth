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
import axios from "axios";

const ModalNovoProduto = ({ modal, toggle, item, buscarProdutos }) => {
  const [meuTipo, setMeuTipo] = useState([]);
  // variáveis para envio do formulário
  const [nomeProduto, setNomeProduto] = useState("");
  const [tipoProduto, setTipoProduto] = useState("");
  const [valorProduto, setValorProduto] = useState("");
  const [imagemProduto, setImagemProduto] = useState("");
  const [alturaProduto, setAlturaProduto] = useState("");
  const [larguraProduto, setLarguraProduto] = useState("");
  const [comprimento, setComprimento] = useState("");
  const [pesoProduto, setPesoProduto] = useState("");
  const [ativoProduto, setAtivoProduto] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/api/tipo_produto`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        setMeuTipo(result.result);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (item.id > 0) {
      setNomeProduto(item.nome);
      setValorProduto(item.valor);
      setAlturaProduto(item.altura);
      setLarguraProduto(item.largura);
      setComprimento(item.comprimento);
      setPesoProduto(item.peso);
      setAtivoProduto(item.ativo === 1); // Definir ativo/inativo ao editar

      // Logica para definir o id do tipo do produto com base na string categoria
      const tipoCorrespondente = meuTipo.find(
        (tipo) => tipo.nome === item.categoria
      );
      if (tipoCorrespondente) {
        setTipoProduto(tipoCorrespondente.id);
      } else {
        // Resetar o estado ao criar um novo produto
        setAtivoProduto(true);
      }
    }
  }, [item, meuTipo]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("id_produto", item.id > 0 ? item.id : null);
    formData.append("nome_produto", nomeProduto);
    formData.append("valor", valorProduto);
    formData.append("id_tipo_produto", tipoProduto);
    formData.append("ativo", ativoProduto ? 1 : 0); // Enviar estado ativo

    // Somente adicionar a imagem se uma nova foi selecionada
    if (imagemProduto) {
      formData.append("photo", imagemProduto);
    }

    formData.append("altura", alturaProduto);
    formData.append("largura", larguraProduto);
    formData.append("comprimento", comprimento);
    formData.append("peso", pesoProduto);

    let url = "";
    let method = "POST"; // Método padrão

    if (item.id > 0) {
      url = `${process.env.REACT_APP_API_URL}/api/alterar_produto`;
      method = "PUT"; // Método para alteração
    } else {
      url = `${process.env.REACT_APP_API_URL}/api/cadastro_produtos`;
    }

    try {
      const token = localStorage.getItem("token");
      const response = await axios({
        method: method,
        url: url,
        data: formData,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Produto cadastrado/alterado com sucesso:", response.data);
      buscarProdutos();
    } catch (error) {
      console.error("Erro ao cadastrar/alterar produto:", error);
    }
    destroyModal();
  };

  const destroyModal = () => {
    setNomeProduto("");
    setValorProduto("");
    setTipoProduto("");
    setImagemProduto("");
    setAlturaProduto("");
    setLarguraProduto("");
    setComprimento("");
    setPesoProduto("");

    toggle();
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={destroyModal}>Cadastrar Produto</ModalHeader>
        <ModalBody>
          <Row className="mb-3">
            <Col xs={6}>
              <Label htmlFor="nomeProduto">Nome do Produto</Label>
              <Input
                type="text"
                id="nomeProduto"
                value={nomeProduto}
                placeholder="Nome do produto"
                onChange={(e) => setNomeProduto(e.target.value)}
              />
            </Col>
            <Col xs={6}>
              <Label htmlFor="imagemProduto">Imagem do Produto</Label>
              <Input
                type="file"
                id="imagemProduto"
                accept=".png, .jpg, .jpeg"
                onChange={(e) => setImagemProduto(e.target.files[0])}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <Label htmlFor="valorProduto">Valor do Produto</Label>
              <Input
                type="text"
                id="valorProduto"
                value={valorProduto}
                onChange={(e) => setValorProduto(e.target.value)}
              />
            </Col>
            <Col xs={6}>
              <Label htmlFor="tipoProduto">Tipo do Produto</Label>
              <Input
                type="select"
                id="tipoProduto"
                value={tipoProduto} // Adicionei para que o valor seja mostrado
                onChange={(e) => setTipoProduto(e.target.value)}
              >
                <option value="">Selecione um tipo</option>
                {meuTipo.map((item) => (
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
              <Input
                id="alturaProduto"
                onChange={(e) => setAlturaProduto(e.target.value)}
                value={alturaProduto}
              />
            </Col>
            <Col xs={6}>
              <Label htmlFor="larguraProduto">Largura do Produto</Label>
              <Input
                id="larguraProduto"
                onChange={(e) => setLarguraProduto(e.target.value)}
                value={larguraProduto}
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col xs={6}>
              <Label htmlFor="comprimento">Comprimento do Produto</Label>
              <Input
                id="comprimento"
                onChange={(e) => setComprimento(e.target.value)}
                value={comprimento}
              />
            </Col>
            <Col xs={6}>
              <Label htmlFor="pesoProduto">Peso do Produto</Label>
              <Input
                id="pesoProduto"
                onChange={(e) => setPesoProduto(e.target.value)}
                value={pesoProduto}
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col xs={12}>
              <Label for="ativoProduto">Produto Ativo</Label>
              <div className="custom-switch">
                <Input
                  type="checkbox"
                  id="ativoProduto"
                  className="custom-control-input"
                  checked={ativoProduto}
                  onChange={(e) => setAtivoProduto(e.target.checked)}
                />
                <Label className="custom-control-label" for="ativoProduto">
                  {ativoProduto ? "Ativo" : "Inativo"}
                </Label>
              </div>
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={handleSubmit}>
            {item.id > 0 ? "Alterar" : "Cadastrar"}
          </Button>{" "}
          <Button color="secondary" onClick={destroyModal}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalNovoProduto;
