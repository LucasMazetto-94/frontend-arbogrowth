import React from "react";
import "./App.css";
import Header from "./Components/header";
import Footer from "./Components/footer";
import { BrowserRouter } from "react-router-dom";
import MinhasRotas from "./Routes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Header />
          <div>
            <MinhasRotas />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
