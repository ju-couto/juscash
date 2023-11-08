import React, { useState } from "react";
import { Container } from "./style";
import logo from "../../assets/logo.svg";
import { logoutUser } from "../../Services/UserService";
import Modal from "../../Components/Modal";
import Button from "../../Components/Button";
import Table from "../../Components/Table";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);
  const loggOut = () => {
    logoutUser();
    window.location.reload();
  };

  return (
    <Container>
      <img src={logo} alt="Logo" height={70} />
      <Button
        onClick={toggleModal}
        type="button"
        color="#2996ba"
        text="+ Novo Lead"
      />
      <div>{/* Adicione o botão de logout aqui */}</div>
      {showModal && <Modal onClose={toggleModal} type="new" />}

      <Table />
    </Container>
  );
};

export default Home;
