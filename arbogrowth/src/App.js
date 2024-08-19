import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import MinhasRotas from "./Routes";
import CartProvider from "./Context/cart";
import ScrollToTop from "./Components/ScrollToTop";
import { AuthProvider } from "./Context/authContext"; // Importe o AuthProvider

function App() {
  console.log("app rodando");
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <ScrollToTop />
          <CartProvider>
            <MinhasRotas />
          </CartProvider>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
