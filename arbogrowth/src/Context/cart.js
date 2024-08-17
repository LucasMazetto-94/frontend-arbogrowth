import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [productsCart, setProductsCart] = useState(() => {
    // Carrega o carrinho do localStorage ao inicializar
    const storedCart = localStorage.getItem("productsCart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    // Salva o carrinho no localStorage sempre que ele é atualizado
    localStorage.setItem("productsCart", JSON.stringify(productsCart));
  }, [productsCart]);

  function addProductsCart(product) {
    setProductsCart((prevProducts) => {
      const productsExists = prevProducts.find(
        (item) => item.id === product.id
      );
      if (productsExists) {
        return prevProducts.map((item) =>
          item.id === product.id ? { ...item, quantity: item.qtde + 1 } : item
        );
      } else {
        return [...prevProducts, { ...product, quantity: 1 }];
      }
    });
  }

  function removeProductsCart(id) {
    setProductsCart((prevProducts) =>
      prevProducts.filter((item) => item.id !== id)
    );
  }

  function updateProductQuantity(id, quantity) {
    setProductsCart((prevProducts) =>
      prevProducts.map((item) =>
        item.id === id ? { ...item, quantity: quantity } : item
      )
    );
  }
  function limparCarrinho() {
    setProductsCart([]);
    localStorage.removeItem("productsCart"); // Limpa o carrinho do localStorage
  }

  return (
    <CartContext.Provider
      value={{
        productsCart,
        addProductsCart,
        removeProductsCart,
        updateProductQuantity,
        limparCarrinho,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
