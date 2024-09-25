import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import axios from "axios";

const ModalDelete = ({ modalDelete, toggleDelete, itemDelete, fetchTipo }) => {
  const handleDeletar = async () => {
    try {
      const token = localStorage.getItem("token");
      // Envia a requisição DELETE para a API usando o ID do item
      const response = await axios.delete(
        `http://localhost:5000/api/deletar_tipo/${itemDelete}`,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Envia o token no header
          },
        }
      );
      console.log(response.data);
      fetchTipo();
      toggleDelete();
      alert("Item deletado com sucesso!");
    } catch (error) {
      console.error("Erro ao deletar item", error);
      alert("Erro ao deletar item.");
    }
  };
  return (
    <div>
      <Modal centered isOpen={modalDelete} toggle={toggleDelete}>
        <ModalHeader toggle={toggleDelete}>Deletar Categoria</ModalHeader>
        <ModalBody>
          <p>Voce realmente deseja deletar esse item?</p>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={() => handleDeletar()}>
            Deletar
          </Button>{" "}
          <Button color="secondary" onClick={toggleDelete}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalDelete;
