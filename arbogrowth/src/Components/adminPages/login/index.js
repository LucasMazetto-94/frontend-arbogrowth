import React, { useState } from "react";
import { useAuth } from "../../../Context/authContext"; // Certifique-se de ajustar o caminho
import "./Login.css";
import logo from "../../../assets/images/logo-correta-1.png"; // Ajuste o caminho conforme necessário

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
    } catch (err) {
      setError("Login failed. Check your credentials.");
    }
  };

  return (
    <div className="login-container">
      <div className="row">
        <div className="col-lg-9 offset-lg-2 text-center">
          <img src={logo} alt="Arbogrowth Logo" className="logo" />
          <h2>Login</h2>
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
            <div>
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
