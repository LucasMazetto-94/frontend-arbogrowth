import "./App.css";
import Home from "./Components/home/home";
import Header from "./Components/header";
import Footer from "./Components/footer";

function App() {
  return (
    <div>
      <Header />
      <div className="container-fluid" style={{ height: "400px" }}>
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
