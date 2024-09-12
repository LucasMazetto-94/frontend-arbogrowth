import React, { useEffect, useState } from "react";
import { loadMercadoPago } from "@mercadopago/sdk-js"; // Import do SDK
import { Spinner } from "reactstrap";

const CheckoutButton = ({ total, onStatusCompra }) => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const initializeCardForm = async () => {
      await loadMercadoPago();
      const mp = new window.MercadoPago(
        "TEST-f002a6e7-b132-4db1-8d1f-89fb0fad3234"
      );
      const cardForm = mp.cardForm({
        amount: String(total),
        iframe: true,
        form: {
          id: "form-checkout",
          cardNumber: {
            id: "form-checkout__cardNumber",
            placeholder: "Número do cartão",
          },
          expirationDate: {
            id: "form-checkout__expirationDate",
            placeholder: "MM/YY",
          },
          securityCode: {
            id: "form-checkout__securityCode",
            placeholder: "Código de segurança",
          },
          cardholderName: {
            id: "form-checkout__cardholderName",
            placeholder: "Titular do cartão",
          },
          issuer: {
            id: "form-checkout__issuer",
            placeholder: "Banco emissor",
          },
          installments: {
            id: "form-checkout__installments",
            placeholder: "Parcelas",
          },
          identificationType: {
            id: "form-checkout__identificationType",
            placeholder: "Tipo de documento",
          },
          identificationNumber: {
            id: "form-checkout__identificationNumber",
            placeholder: "Número do documento",
          },
          cardholderEmail: {
            id: "form-checkout__cardholderEmail",
            placeholder: "E-mail",
          },
        },
        callbacks: {
          onFormMounted: (error) => {
            if (error)
              return console.warn("Form Mounted handling error: ", error);
            console.log("Form mounted");
          },
          onSubmit: async (event) => {
            setIsLoading(true);
            event.preventDefault();

            const {
              paymentMethodId: payment_method_id,
              issuerId: issuer_id,
              cardholderEmail: email,
              amount,
              token,
              installments,
              identificationNumber,
              identificationType,
            } = cardForm.getCardFormData();

            try {
              const response = await fetch(
                `${process.env.REACT_APP_API_URL}/api/create_preference`,
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    token,
                    issuer_id,
                    payment_method_id,
                    transaction_amount: Number(amount),
                    installments: Number(installments),
                    description: "Descrição do produto",
                    payer: {
                      email,
                      identification: {
                        type: identificationType,
                        number: identificationNumber,
                      },
                    },
                  }),
                }
              );

              const result = await response.json();
              setIsLoading(false);
              onStatusCompra(result);
              localStorage.setItem("approved", result);
              console.log(result); // Verificar o status da compra
            } catch (error) {
              console.error("Erro ao processar o pagamento:", error);
              setIsLoading(false);
              onStatusCompra(error);
            }
          },
          onFetching: (resource) => {
            console.log("Fetching resource: ", resource);

            // Animate progress bar
            const progressBar = document.querySelector(".progress-bar");
            progressBar.removeAttribute("value");

            return () => {
              progressBar.setAttribute("value", "0");
            };
          },
        },
      });
    };
    initializeCardForm();
  }, [total]);

  return (
    <>
      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
            marginTop: "100px",
            height: "100vh",
          }}
        >
          <Spinner color="primary" />
        </div>
      ) : (
        <>
          <style>
            {`
            #form-checkout {
              display: flex;
              flex-direction: column;
            }
        
            .container {
              height: 18px;
              display: inline-block;
              border: 1px solid rgb(118, 118, 118);
              border-radius: 2px;
              padding: 1px 2px;
            }
            `}
          </style>
          <form id="form-checkout">
            <div id="form-checkout__cardNumber" className="container"></div>
            <div id="form-checkout__expirationDate" className="container"></div>
            <div id="form-checkout__securityCode" className="container"></div>
            <input type="text" id="form-checkout__cardholderName" />
            <select id="form-checkout__issuer"></select>
            <select id="form-checkout__installments"></select>
            <select id="form-checkout__identificationType"></select>
            <input type="text" id="form-checkout__identificationNumber" />
            <input type="email" id="form-checkout__cardholderEmail" />

            <button type="submit" id="form-checkout__submit">
              Pagar
            </button>
            <progress value="0" className="progress-bar">
              Carregando...
            </progress>
          </form>
        </>
      )}
    </>
  );
};

export default CheckoutButton;
