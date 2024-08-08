import React, { useState, useEffect, useCallback } from "react";
// import { Card, CardHeader } from "reactstrap";

const AdmVendas = () => {
  const [minhasVendas, setMinhasVendas] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:5000/api/pedidos", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`, // Adiciona o token no header
          "Content-Type": "application/json", // Define o tipo de conteúdo
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      setMinhasVendas(result.result);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <h5>Aqui sera o acompanhamento das vendas</h5>
      <ul>
        {minhasVendas.map((item) => (
          <li>{item.valor_total}</li>
        ))}
      </ul>
    </div>
  );
};

export default AdmVendas;
