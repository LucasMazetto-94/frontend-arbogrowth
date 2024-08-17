import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/cart";
import "./Produtos.css";

const Produtos = () => {
  const [data, setData] = useState([]);
  const [categoria, setCategoria] = useState([]);
  const [categoriaAtiva, setCategoriaAtiva] = useState("");
  const { addProductsCart } = useContext(CartContext);

  const handleClickCategoria = (categoria) => {
    setCategoriaAtiva(categoria);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/produtos");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        setData(result.result);
        setCategoria(result.result);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const uniqueCategorias = categoria
    .map((item) => item.categoria)
    .filter((value, index, self) => self.indexOf(value) === index);

  return (
    <div>
      <div className="breadcrumb-section breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="breadcrumb-text">
                <p>Conheça nossa loja</p>
                <h1>Produtos</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-section mt-150 mb-150">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="product-filters">
                <ul>
                  <li
                    className={categoriaAtiva === "" ? "active" : ""}
                    onClick={() => handleClickCategoria("")}
                  >
                    Todos
                  </li>
                  {uniqueCategorias &&
                    uniqueCategorias.map((categoria, index) => (
                      <li
                        key={index}
                        className={categoria === categoriaAtiva ? "active" : ""}
                        onClick={() => handleClickCategoria(categoria)}
                      >
                        {categoria}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="row product-lists">
            {data.length > 0 &&
              data
                .filter(
                  (item) =>
                    item.ativo === 1 &&
                    (categoriaAtiva === "" || item.categoria === categoriaAtiva)
                )
                .map((item) => (
                  <div key={item.id} className="col-lg-4 col-md-6 text-center">
                    <div className="single-product-item">
                      <div className="product-image">
                        <a href="">
                          <img src={item.imagem} alt={item.nome} />
                        </a>
                      </div>
                      <h3>{item.nome}</h3>
                      <p className="product-price">
                        <span>250ml</span> R${" "}
                        {item.valor.toLocaleString("pt-BR", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </p>
                      <Link
                        to="/carrinho"
                        className="cart-btn"
                        onClick={() => {
                          addProductsCart(item);
                        }}
                      >
                        <i className="fas fa-shopping-cart"></i> Comprar
                      </Link>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Produtos;
