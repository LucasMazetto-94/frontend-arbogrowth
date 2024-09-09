import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

const ModalNovaSenha = ({ toggleModal, modalOpen }) => {
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const handlePasswordChange = async (e) => {
    e.preventDefault();

    const payload = {
      email: email,
      senha_atual: currentPassword,
      senha_nova: newPassword,
    };

    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/nova_senha`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );
      if (response.ok) {
        alert("Senha alterada com sucesso");
      } else {
        alert("Erro ao resetar senha");
      }
    } catch (err) {
      alert("Erro ao resetar senha");
    }
    setEmail("");
    setCurrentPassword("");
    setNewPassword("");

    toggleModal(); // Fecha o modal após alterar a senha
  };
  return (
    <div>
      {" "}
      {/* Modal de Alteração de Senha */}
      <Modal isOpen={modalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Alterar Senha</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="currentPassword">Senha Atual</Label>
              <Input
                type="password"
                name="currentPassword"
                id="currentPassword"
                placeholder="Digite sua senha atual"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="newPassword">Nova Senha</Label>
              <Input
                type="password"
                name="newPassword"
                id="newPassword"
                placeholder="Digite sua nova senha"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handlePasswordChange}>
            Alterar Senha
          </Button>{" "}
          <Button color="secondary" onClick={toggleModal}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalNovaSenha;
