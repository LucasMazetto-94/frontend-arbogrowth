import React from "react";
import { AnimatePresence } from "framer-motion";
import { Routes, Route } from "react-router-dom";
import Home from "../Components/home/home";
import Sobre from "../Components/about";
import Produtos from "../Components/produtos";
import Carrinho from "../Components/cart";

const MinhasRotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/produtos" element={<Produtos />} />
      <Route path="/carrinho" element={<Carrinho />} />
    </Routes>
  );
};

export default MinhasRotas;
