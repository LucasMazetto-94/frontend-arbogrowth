import React, { useState } from "react";
import "../login/Login.css";
import logo from "../../../assets/images/logo-correta-1.png"; // Ajuste o caminho conforme necessário

const NovaSenha = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      email: email,
    };
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/alterar_senha`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );
      if (response.ok) {
        alert("Verifique seu email");
      } else {
        alert("Erro ao resetar senha");
      }
    } catch (err) {
      setError("Erro ao resetar senha");
    }
    setEmail("");
  };

  return (
    <div className="login-container">
      <div className="row">
        <div className="col-lg-9 offset-lg-2 text-center">
          <img src={logo} alt="Arbogrowth Logo" className="logo" />
          <h2>Nova Senha</h2>
          {error && <p className="error-message">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div>
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NovaSenha;
