import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Row,
  Col,
  Label,
  Input,
  Form,
  Nav,
  NavItem,
  NavLink,
  TabPane,
  TabContent,
} from "reactstrap";
import Select from "react-select";
import classnames from "classnames";
import CheckoutButton from "./mercadoPago";
import Pix from "./pagamentoPix";

const ModalCompra = ({
  toggle,
  show,
  limparCarrinho,
  cartData,
  shippingId,
  shippingName,
  total,
}) => {
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [emailContato, setEmailContato] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cpf, setCpf] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [meuCep, setMeuCep] = useState("");
  const [complemento, setComplemento] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("mercadoPago");
  const [statusCompra, setStatusCompra] = useState("");
  const [statusPix, setStatusPix] = useState("");

  const handleStatusCompra = (status) => {
    setStatusCompra(status);
  };

  const handleStatusPix = (status) => {
    setStatusPix(status);
  };

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const [animationNavTab, setAnimationNavTab] = useState("1");
  const animationNavToggle = (tab) => {
    if (animationNavTab !== tab) {
      setAnimationNavTab(tab);
    }
  };

  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        toggle();
      }, 300000); // 300000 ms = 5 minutes

      return () => clearTimeout(timer); // Limpa o temporizador se o modal fechar antes dos 5 minutos
    }
  }, [show, toggle]);

  const preencherCep = async (cep) => {
    if (meuCep !== "") {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        if (!response.ok) {
          throw new Error("Erro ao buscar CEP");
        }

        const data = await response.json();

        if (data.erro) {
          alert("CEP não encontrado");
          return;
        }

        // Preencher os campos do modal
        document.getElementById("logradouro").value = data.logradouro;
        document.getElementById("complemento").value = data.complemento;
        document.getElementById("bairro").value = data.bairro;
        document.getElementById("cidade").value = data.localidade;
      } catch (error) {
        console.error("Erro:", error);
        alert("Erro ao buscar o CEP. Tente novamente.");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      nome: shippingName,
      carrinho: cartData.map((item) => ({
        id: item.id,
        quantity: item.quantity,
        valor: item.valor,
        altura: item.altura,
        largura: item.largura,
        comprimento: item.comprimento,
        peso: item.peso,
        name: item.nome,
      })),
      total: total,
      shipping: {
        id: shippingId,
        additional_services: {
          receipt: false,
          own_hand: false,
          collect: false,
        },
        to: {
          name: nomeCompleto,
          email: emailContato,
          phone: telefone,
          document: cpf,
          address: logradouro,
          number: numero,
          complement: complemento,
          district: bairro,
          city: cidade,
          state_abbr: estado,
          postal_code: meuCep,
        },
      },
    };

    try {
      const response = await fetch("http://localhost:5000/api/cadastro_venda", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        limparCarrinho();
        alert("Compra realizada com sucesso!");
      } else {
        alert(`Erro ao finalizar a compra: ${data.error}`);
      }
    } catch (error) {
      console.error("Erro ao finalizar a compra:", error);
      alert("Erro interno ao realizar compra.");
    }
    toggle();
  };

  const options = [
    { value: "AC", label: "Acre" },
    { value: "AL", label: "Alagoas" },
    { value: "AP", label: "Amapá" },
    { value: "AM", label: "Amazonas" },
    { value: "BA", label: "Bahia" },
    { value: "CE", label: "Ceará" },
    { value: "DF", label: "Distrito Federal" },
    { value: "ES", label: "Espírito Santo" },
    { value: "GO", label: "Goiás" },
    { value: "MA", label: "Maranhão" },
    { value: "MT", label: "Mato Grosso" },
    { value: "MS", label: "Mato Grosso do Sul" },
    { value: "MG", label: "Minas Gerais" },
    { value: "PA", label: "Pará" },
    { value: "PB", label: "Paraíba" },
    { value: "PR", label: "Paraná" },
    { value: "PE", label: "Pernambuco" },
    { value: "PI", label: "Piauí" },
    { value: "RJ", label: "Rio de Janeiro" },
    { value: "RN", label: "Rio Grande do Norte" },
    { value: "RS", label: "Rio Grande do Sul" },
    { value: "RO", label: "Rondônia" },
    { value: "RR", label: "Roraima" },
    { value: "SC", label: "Santa Catarina" },
    { value: "SP", label: "São Paulo" },
    { value: "SE", label: "Sergipe" },
    { value: "TO", label: "Tocantins" },
  ];

  return (
    <Modal isOpen={show} toggle={toggle} centered size="lg">
      <ModalHeader toggle={toggle}>Finalizar Compra</ModalHeader>
      <Form onSubmit={handleSubmit}>
        <Nav
          pills
          className="nav nav-pills animation-nav nav-justified gap-2 mb-3 tab-style"
        >
          <NavItem>
            <NavLink
              style={{ cursor: "pointer" }}
              className={classnames({
                active: animationNavTab === "1",
              })}
              onClick={() => {
                animationNavToggle("1");
              }}
            >
              Pagamento
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              style={{ cursor: "pointer" }}
              className={classnames({
                active: animationNavTab === "2",
              })}
              onClick={() => {
                animationNavToggle("2");
              }}
            >
              Frete
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent
          style={{ height: "400px" }}
          activeTab={animationNavTab}
          className="text-muted"
        >
          <TabPane tabId="2" id="animation-home">
            <ModalBody className="pt-0">
              <Row>
                <Col lg={6}>
                  <Label htmlFor="meuCep">CEP</Label>
                  <Input
                    type="text"
                    id="meuCep"
                    name="meuCep"
                    placeholder="Ex: 15045150"
                    onChange={(e) => setMeuCep(e.target.value)}
                    onBlur={() => preencherCep(meuCep)}
                  />
                </Col>
                <Col lg={6}>
                  <Label htmlFor="logradouro">Logradouro</Label>
                  <Input
                    type="text"
                    id="logradouro"
                    name="logradouro"
                    placeholder="Ex: Rua Claudio Manuel da Nobrega"
                    onChange={(e) => setLogradouro(e.target.value)}
                  />
                </Col>
              </Row>
              <Row className="mb-1">
                <Col lg={6}>
                  <Label htmlFor="bairro">Bairro</Label>
                  <Input
                    type="text"
                    id="bairro"
                    name="bairro"
                    placeholder="Ex: Santa Cecília"
                    onChange={(e) => setBairro(e.target.value)}
                  />
                </Col>
                <Col lg={6}>
                  <Label htmlFor="cidade">Cidade</Label>
                  <Input
                    type="text"
                    id="cidade"
                    name="cidade"
                    placeholder="Ex: Paulínia"
                    onChange={(e) => setCidade(e.target.value)}
                  />
                </Col>
              </Row>
              <Row className="mb-1">
                <Col lg={6}>
                  <Label htmlFor="numero">Número</Label>
                  <Input
                    type="text"
                    id="numero"
                    name="numero"
                    placeholder="Ex: 25 ou 25-b"
                    onChange={(e) => setNumero(e.target.value)}
                  />
                </Col>
                <Col lg={6}>
                  <Label htmlFor="complemento">Complemento</Label>
                  <Input
                    type="text"
                    id="complemento"
                    name="complemento"
                    placeholder="Ex: Bloco 3 ou apto 25"
                    onChange={(e) => setComplemento(e.target.value)}
                  />
                </Col>
              </Row>

              <Row className="mb-1">
                <Col lg={6}>
                  <Label htmlFor="estado">Estado</Label>
                  <Select
                    className="mt-0"
                    id="estado"
                    name="estado"
                    options={options}
                    onChange={(selectedOption) =>
                      setEstado(selectedOption ? selectedOption.value : "")
                    }
                    onBlur={() => {}}
                  />
                </Col>
              </Row>

              <Row>
                <Col lg={6}>
                  <Label htmlFor="nomeCompleto">Nome Completo</Label>
                  <Input
                    type="text"
                    id="nomeCompleto"
                    name="nomeCompleto"
                    placeholder="Ex: Lucas Pereira da Silva"
                    onChange={(e) => setNomeCompleto(e.target.value)}
                    onBlur={() => {}}
                  />
                </Col>
                <Col lg={6}>
                  <Label htmlFor="emailContato">Email de Contato</Label>
                  <Input
                    type="email"
                    id="emailContato"
                    name="emailContato"
                    placeholder="Ex: lucasp@gmail.com"
                    onChange={(e) => setEmailContato(e.target.value)}
                    onBlur={() => {}}
                  />
                </Col>
              </Row>
              <Row className="mb-1">
                <Col lg={6}>
                  <Label htmlFor="telefone">Telefone de Contato</Label>
                  <Input
                    type="text"
                    id="telefone"
                    name="telefone"
                    placeholder="Ex: 19991939339"
                    onChange={(e) => setTelefone(e.target.value)}
                    onBlur={() => {}}
                  />
                </Col>
                <Col lg={6}>
                  <Label htmlFor="cpf">CPF</Label>
                  <Input
                    type="text"
                    id="cpf"
                    name="cpf"
                    placeholder="Ex: 42612157819"
                    onChange={(e) => setCpf(e.target.value)}
                    onBlur={() => {}}
                  />
                </Col>
              </Row>
            </ModalBody>
          </TabPane>

          <TabPane tabId="1" id="animation-profile">
            <ModalBody>
              <Row className="">
                <Col>
                  <Button
                    color={paymentMethod === "pix" ? "primary" : "secondary"}
                    onClick={() => {
                      handlePaymentMethodChange("pix");
                    }}
                  >
                    PIX
                  </Button>
                  <Button
                    className="ms-2"
                    color={
                      paymentMethod === "mercadoPago" ? "primary" : "secondary"
                    }
                    onClick={() => handlePaymentMethodChange("mercadoPago")}
                  >
                    Mercado Pago
                  </Button>
                </Col>
              </Row>

              {paymentMethod === "pix" ? (
                <Row className="mt-3">
                  <Col lg={12}>
                    <Pix total={total} onStatusPix={handleStatusPix} />
                  </Col>
                </Row>
              ) : (
                <Row className="mt-3">
                  <Col lg={12}>
                    <CheckoutButton
                      total={total}
                      onStatusCompra={handleStatusCompra}
                    />
                  </Col>
                </Row>
              )}
              <>
                {(statusCompra === "approved" || statusPix === "approved") && (
                  <p className="mt-2">
                    <i className="ri-check-double-line"></i>APROVADO
                  </p>
                )}
              </>
            </ModalBody>
          </TabPane>
        </TabContent>
        <ModalFooter>
          <Button
            type="submit"
            color="primary"
            // disabled={
            //   statusCompra === "" ||
            //   statusCompra !== "approved" ||
            //   nomeCompleto === "" ||
            //   emailContato === "" ||
            //   telefone === "" ||
            //   cpf === "" ||
            //   logradouro === "" ||
            //   numero === "" ||
            //   bairro === "" ||
            //   cidade === "" ||
            //   estado === "" ||
            //   meuCep === ""
            // }
          >
            Finalizar
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancelar
          </Button>
        </ModalFooter>
      </Form>
    </Modal>
  );
};

export default ModalCompra;
