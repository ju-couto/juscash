import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  const handleLeadCreated = (isCreated) => {
    if (isCreated === true) {
      toast.success("Lead cadastrado com sucesso!", {
        position: toast.POSITION.TOP_CENTER,
      });
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } else {
      toast.error("Não foi possível criar o lead", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
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
      {showModal && (
        <Modal
          onClose={toggleModal}
          onLeadCreated={handleLeadCreated}
          type="new"
        />
      )}
      <Table />
    </Container>
  );
};

export default Home;
