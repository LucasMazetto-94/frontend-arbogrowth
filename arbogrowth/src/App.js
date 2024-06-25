import React from "react";
import Header from "./Components/header";
import Footer from "./Components/footer";
import { BrowserRouter } from "react-router-dom";
import MinhasRotas from "./Routes";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div>
          <MinhasRotas />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
