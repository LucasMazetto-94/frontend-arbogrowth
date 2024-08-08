import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Components/home/home";
import Sobre from "../Components/about";
import Produtos from "../Components/produtos";
import Carrinho from "../Components/cart";
import Login from "../Components/adminPages/login";
import Adm from "../Components/adminPages/adm";
import PrivateRoute from "./privateRoute";
import MainLayout from "../Components/Layouts/mainLayout";
import AdminLayout from "../Components/Layouts/adminLayout";

const MinhasRotas = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
      />
      <Route
        path="/sobre"
        element={
          <MainLayout>
            <Sobre />
          </MainLayout>
        }
      />
      <Route
        path="/produtos"
        element={
          <MainLayout>
            <Produtos />
          </MainLayout>
        }
      />
      <Route
        path="/carrinho"
        element={
          <MainLayout>
            <Carrinho />
          </MainLayout>
        }
      />

      <Route
        path="/admLogin"
        element={
          <AdminLayout>
            <Login />
          </AdminLayout>
        }
      />
      <Route
        path="/admPage"
        element={
          <PrivateRoute>
            <AdminLayout>
              <Adm />
            </AdminLayout>
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default MinhasRotas;
