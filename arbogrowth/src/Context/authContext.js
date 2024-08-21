import React, { createContext, useState, useContext, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom"; // Importando useNavigate
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // Usando useNavigate para navegação

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        const currentTime = Math.floor(Date.now() / 1000);
        if (currentTime > decodedToken.exp) {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          setUser(null);
          navigate("/admLogin");
        } else {
          // Se o token ainda é válido, define o usuário e armazena no localStorage
          const storedUser = { token };
          setUser(storedUser);
          localStorage.setItem("user", JSON.stringify(storedUser));
        }
      } catch (error) {
        console.error("Erro ao verificar o token:", error);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
        navigate("/admLogin");
      }
    } else {
      setUser(null);
    }
  }, [navigate]);

  // Sincronizar estado user com o localStorage
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  const login = async (email, senha) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/login`,
        {
          email,
          senha,
        }
      );
      const token = response.data.token;
      localStorage.clear();
      localStorage.setItem("token", token);

      const storedUser = { token };
      setUser(storedUser);
      localStorage.setItem("user", JSON.stringify(storedUser));

      navigate("/admPage");
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/admLogin"); // Navega para a página de login ao fazer logout
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
