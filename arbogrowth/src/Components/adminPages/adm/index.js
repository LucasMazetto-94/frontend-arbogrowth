import React from "react";
import AdmProdutos from "./admProdutos";
import AdmVendas from "./admVendas";

const Adm = () => {
  return (
    <div>
      <h5>Pagina administrativa</h5>
      <AdmProdutos />
      <AdmVendas />
    </div>
  );
};

export default Adm;
