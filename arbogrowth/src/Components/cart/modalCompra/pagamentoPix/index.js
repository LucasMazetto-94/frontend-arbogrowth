import React, { useState } from "react";
import { Row, Col } from "reactstrap";

const Pix = ({ total, onStatusPix }) => {
  const [payerFirstName, setPayerFirstName] = useState("");
  const [payerLastName, setPayerLastName] = useState("");
  const [email, setEmail] = useState("");
  const [identificationType, setIdentificationType] = useState("");
  const [identificationNumber, setIdentificationNumber] = useState("");
  const [urlPix, setUrlPix] = useState("");
  const [countdown, setCountdown] = useState(300); // 5 minutos (300 segundos)
  const [idCompra, setIdCompra] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = {
      payerFirstName,
      payerLastName,
      email,
      identificationType,
      identificationNumber,
      transactionAmount: total,
      description: "Compra abogrowth",
    };

    try {
      const response = await fetch("http://localhost:5000/api/gerar_pix", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const result = await response.json();
      console.log(result);
      setUrlPix(result.point_of_interaction.transaction_data.ticket_url);
      setIdCompra(result.id); // Armazena o ID da compra para verificação
      startPaymentVerification(result.id); // Inicia a verificação do pagamento
    } catch (error) {
      console.error("Erro ao processar o pagamento:", error);
    }
  };

  const startPaymentVerification = (idCompra) => {
    const interval = setInterval(async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/verificar_pix/${idCompra}`,
          {
            method: "POST",
          }
        );

        const result = await response.json();
        console.log(`Status do pagamento: ${result.status}`);

        if (result.status === "approved") {
          clearInterval(interval);
          console.log("Pagamento aprovado");
          onStatusPix("approved");
        } else if (
          result.status === "rejected" ||
          result.status === "pending"
        ) {
          clearInterval(interval);
          console.log("Pagamento rejeitado ou pendente");
          onStatusPix(result.status);
        }
      } catch (error) {
        console.error("Erro ao verificar o status do pagamento:", error);
      }
    }, 30000); // Verifica a cada 30 segundos

    // Inicia o contador de 5 minutos
    const timeout = setTimeout(() => {
      clearInterval(interval);
      console.log("Tempo de verificação esgotado.");
      onStatusPix("timeout");
    }, 300000); // 5 minutos

    // Atualiza o contador de tempo restante a cada segundo
    const countdownInterval = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown > 0) {
          return prevCountdown - 1;
        } else {
          clearInterval(countdownInterval);
          clearTimeout(timeout);
          return 0;
        }
      });
    }, 1000);
  };

  return (
    <div>
      <Row>
        <Col lg={6}>
          <div>
            <Row>
              <Col lg={6} md={6}>
                <label htmlFor="payerFirstName">Nome</label>
                <input
                  id="payerFirstName"
                  name="payerFirstName"
                  type="text"
                  onChange={(e) => setPayerFirstName(e.target.value)}
                />
              </Col>

              <Col lg={6} md={6}>
                <label htmlFor="payerLastName">Sobrenome</label>
                <input
                  id="payerLastName"
                  name="payerLastName"
                  type="text"
                  onChange={(e) => setPayerLastName(e.target.value)}
                />
              </Col>
            </Row>
            <Row>
              <Col lg={6} md={6}>
                <label htmlFor="email">E-mail</label>
                <input
                  id="email"
                  name="email"
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Col>
              <Col lg={6} md={6}>
                <label htmlFor="identificationType">Tipo de documento</label>
                <div>
                  <select
                    style={{ width: "167px", height: "27px" }}
                    id="identificationType"
                    name="identificationType"
                    type="text"
                    onChange={(e) => setIdentificationType(e.target.value)}
                  >
                    <option value="CPF">CPF</option>
                  </select>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={6} md={6}>
                <label htmlFor="identificationNumber">
                  Número do documento
                </label>
                <input
                  id="identificationNumber"
                  name="identificationNumber"
                  type="text"
                  onChange={(e) => setIdentificationNumber(e.target.value)}
                />
              </Col>
            </Row>
          </div>

          <div>
            <div>
              <br />
              <button type="button" onClick={handleSubmit}>
                Pagar
              </button>
            </div>
          </div>
        </Col>
        {urlPix !== "" && (
          <Col lg={6}>
            <iframe
              title="frame-1"
              style={{ width: "100%", height: "300px" }}
              src={urlPix}
              frameborder="0"
            />
            <div>
              <p className="text-muted ps-4">
                Tempo restante: {Math.floor(countdown / 60)}m {countdown % 60}s
              </p>
            </div>
          </Col>
        )}
      </Row>
    </div>
  );
};

export default Pix;