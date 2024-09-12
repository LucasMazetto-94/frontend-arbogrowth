import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../../Context/cart";
import { Link } from "react-router-dom";
import ModalCompra from "./modalCompra";
import Cleave from "cleave.js/react";

const Carrinho = () => {
  const {
    productsCart,
    removeProductsCart,
    updateProductQuantity,
    limparCarrinho,
  } = useContext(CartContext);
  const [cep, setCep] = useState("");
  const [shippingOptions, setShippingOptions] = useState([]);
  const [selectedShipping, setSelectedShipping] = useState(null);
  const [shipping, setShipping] = useState(0);
  const [total, setTotal] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleIncreaseQuantity = (product) => {
    updateProductQuantity(product.id, product.quantity + 1);
  };

  const handleDecreaseQuantity = (product) => {
    if (product.quantity > 1) {
      updateProductQuantity(product.id, product.quantity - 1);
    } else {
      removeProductsCart(product.id);
    }
  };

  const handleCalculoFrete = async (e) => {
    e.preventDefault();

    const listaCompras = productsCart.map((item) => ({
      id: item.id,
      nome: item.nome,
      quantity: item.quantity,
      valor: item.valor,
      altura: item.altura,
      largura: item.largura,
      comprimento: item.comprimento,
      peso: item.peso,
    }));

    const payload = {
      cepDestino: cep,
      produtos: listaCompras,
    };
    console.log(payload.cepDestino);

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/calcular_frete`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setShippingOptions(data); // Ajuste conforme a resposta da API
      } else {
        alert(`Erro ao calcular frete: ${data.error}`);
      }
    } catch (error) {
      console.error("Erro ao calcular frete:", error);
      alert("Erro interno ao calcular frete.");
    }
  };

  const handleShippingChange = (option) => {
    setSelectedShipping(option);
    console.log(selectedShipping);
    setShipping(option.custom_price);
    const subtotal = productsCart.reduce(
      (acc, product) => acc + product.valor * product.quantity,
      0
    );
    setTotal(parseFloat(subtotal) + parseFloat(option.custom_price));
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div className="breadcrumb-section breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="breadcrumb-text">
                <p>Vamos as Compras</p>
                <h1>Carrinho</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cart-section mt-150 mb-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="cart-table-wrap">
                <table className="cart-table mb-2">
                  <thead className="cart-table-head">
                    <tr className="table-head-row">
                      <th className="product-remove"></th>
                      <th className="product-image">Imagem</th>
                      <th className="product-name">Nome</th>
                      <th className="product-price">Preço</th>
                      <th className="product-quantity">Quantidade</th>
                      {windowWidth > 450 && (
                        <th className="product-total">Total</th>
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {productsCart.map((product) => (
                      <tr className="table-body-row" key={product.id}>
                        <td className="product-remove">
                          <i
                            className="ri-subtract-fill"
                            onClick={() => removeProductsCart(product.id)}
                          ></i>
                        </td>
                        <td className="product-image">
                          <img src={product.imagem} alt={product.nome} />
                        </td>
                        <td className="product-name">{product.nome}</td>
                        <td className="product-price">R$ {product.valor}</td>
                        <td className="product-quantity">
                          <div className="quantity-buttons">
                            <button
                              onClick={() => handleDecreaseQuantity(product)}
                            >
                              -
                            </button>
                            <div className="d-flex justify-content-center">
                              <input
                                className="m-0 form-control-sm p-0 ps-2" // Classes adicionadas
                                type="number"
                                value={product.quantity}
                                readOnly
                              />
                            </div>
                            <button
                              onClick={() => handleIncreaseQuantity(product)}
                            >
                              +
                            </button>
                          </div>
                        </td>
                        {windowWidth > 450 && (
                          <td className="product-total">
                            R$ {product.valor * product.quantity}
                          </td>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="total-section">
                <table className="total-table">
                  <thead className="total-table-head">
                    <tr className="table-total-row">
                      <th>Total</th>
                      <th>Preço</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="total-data">
                      <td>
                        <strong>Subtotal: </strong>
                      </td>
                      <td>
                        R${" "}
                        {productsCart.reduce(
                          (acc, product) =>
                            acc + product.valor * product.quantity,
                          0
                        )}
                      </td>
                    </tr>
                    <tr className="total-data">
                      <td>
                        <strong>Shipping: </strong>
                      </td>
                      <td>R$ {productsCart.length === 0 ? 0 : shipping}</td>
                    </tr>
                    <tr className="total-data">
                      <td>
                        <strong>Total: </strong>
                      </td>
                      <td>R$ {productsCart.length === 0 ? 0 : total}</td>
                    </tr>
                  </tbody>
                </table>
                <div className="checkout-accordion-wrap mt-2">
                  <div className="accordion" id="accordionExample">
                    <div className="card single-accordion">
                      <div className="card-header" id="headingOne">
                        <h5 className="mb-0">
                          <button className="btn btn-link" type="button">
                            Calcular Frete
                          </button>
                        </h5>
                      </div>

                      <div className="collapse show">
                        <div className="card-body">
                          <div className="billing-address-form">
                            <form action="index.html">
                              <p>
                                <Cleave
                                  className="form-control"
                                  options={{
                                    blocks: [5, 3],
                                    delimiter: "-",
                                    numericOnly: true,
                                  }}
                                  placeholder="CEP Destino"
                                  value={cep}
                                  onChange={(e) => setCep(e.target.value)}
                                />
                              </p>
                              <a
                                href=""
                                className="boxed-btn d-flex justify-content-center"
                                onClick={handleCalculoFrete}
                              >
                                Calcular
                              </a>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {shippingOptions.length > 0 && (
                  <div className="shipping-options">
                    <h4>Opções de Frete:</h4>
                    {productsCart.length === 0
                      ? []
                      : shippingOptions.map((option) => (
                          <div key={option.id} className="shipping-option">
                            <input
                              type="radio"
                              name="shippingOption"
                              value={option.id}
                              onChange={() => handleShippingChange(option)}
                            />
                            <img
                              src={option.company.picture}
                              alt={option.company.name}
                            />
                            <label className="fw-bold">{option.name}</label>
                            <div className="shipping-cost">
                              {!option.custom_price
                                ? "Indiponível"
                                : `R$  ${option.custom_price}`}
                            </div>
                          </div>
                        ))}
                  </div>
                )}

                <div className="cart-buttons">
                  <Link
                    href=""
                    className="boxed-btn"
                    onClick={shippingOptions.length <= 0 ? "" : toggle}
                    disabled={!(shippingOptions.length > 0)}
                  >
                    Finalizar
                  </Link>
                  <Link to="/produtos" className="boxed-btn black">
                    Continuar Comprando
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalCompra
        toggle={toggle}
        show={isOpen}
        limparCarrinho={limparCarrinho}
        cartData={productsCart}
        shippingId={selectedShipping ? selectedShipping.id : null}
        shippingName={selectedShipping ? selectedShipping.company.name : ""}
        total={total}
      />
    </div>
  );
};

export default Carrinho;
