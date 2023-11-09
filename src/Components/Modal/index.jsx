import React, { useState } from "react";
import { ModalStyled, OpacityContainer, ContainerButton, Form } from "./style";
import { AiOutlineClose } from "react-icons/ai";
import { createLead } from "../../Services/LeadsService";
import Input from "../Input";
import Button from "../Button";
import Checkbox from "../Checkbox";
import {
  validateName,
  validateEmail,
  validatePhone,
} from "../../Utils/validators";

const Modal = ({ onClose, type, leadData, onLeadCreated }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    all: false,
    successFees: false,
    contractFees: false,
    dativesFees: false,
    authorCredit: false,
  });

  const handleChange = (name, value) => {
    if (name === "all") {
      setForm((prevForm) => ({
        ...prevForm,
        all: value,
        successFees: value,
        contractFees: value,
        dativesFees: value,
        authorCredit: value,
      }));
    } else {
      const updatedForm = {
        ...form,
        [name]: value,
      };
      const allSelected =
        updatedForm.successFees &&
        updatedForm.contractFees &&
        updatedForm.dativesFees &&
        updatedForm.authorCredit;

      updatedForm.all = allSelected;
      setForm(updatedForm);
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await createLead({
        name: form.name,
        email: form.email,
        phone: form.phone,
        all: form.all,
        successFees: form.successFees,
        contractFees: form.contractFees,
        dativesFees: form.dativesFees,
        authorCredit: form.authorCredit,
      });
      if (response === true) {
        onClose();
        onLeadCreated(true);
      } else {
        onLeadCreated(false)
      }
    } catch (error) {
       alert("Erro ao enviar formulário!", error);
      console.log(error);
    }
  };
  const validateInput = () => {
    return (
      validateEmail(form.email) &&
      validateName(form.name) &&
      validatePhone(form.phone)
    );
  };
  return (
    <OpacityContainer>
      <ModalStyled>
        <div>
          {type === "new" ? <h1>Novo Lead</h1> : <h1>Lead</h1>}
          <AiOutlineClose onClick={onClose} />
        </div>
        <h2>Dados do Lead</h2>
        <Form>
          <Input
            label="Nome Completo"
            name="name"
            type="text"
            disabled={type === "view"}
            value={leadData ? leadData.name : form.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
          <Input
            label="E-mail"
            name="email"
            type="email"
            disabled={type === "view"}
            value={leadData ? leadData.email : form.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
          <Input
            label="Telefone"
            name="phone"
            type="text"
            disabled={type === "view"}
            value={leadData ? leadData.phone : form.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
          />

          <h2>Oportunidades</h2>
          <Checkbox
            name="all"
            label="Todos"
            disabled={type === "view"}
            onCheck={handleChange}
            checked={leadData ? leadData.all : form.all}
          />
          <Checkbox
            name="successFees"
            label="Honorários Sucumbenciais"
            onCheck={handleChange}
            disabled={type === "view"}
            checked={leadData ? leadData.successFees : form.successFees}
          />
          <Checkbox
            name="contractFees"
            label="Honorários Contratuais"
            onCheck={handleChange}
            disabled={type === "view"}
            checked={leadData ? leadData.contractFees : form.contractFees}
          />
          <Checkbox
            name="dativesFees"
            label="Honorários Dativos"
            onCheck={handleChange}
            disabled={type === "view"}
            checked={leadData ? leadData.dativesFees : form.dativesFees}
          />
          <Checkbox
            name="authorCredit"
            label="Crédito do Autor"
            disabled={type === "view"}
            onCheck={handleChange}
            checked={leadData ? leadData.authorCredit : form.authorCredit}
          />
          <ContainerButton>
            <Button
              type="button"
              color="white"
              text="Fechar"
              secondary={true}
              onClick={onClose}
            />
            {type !== "view" && (
              <Button
                disabled={!validateInput()}
                type="button"
                text="Salvar"
                color="#2996ba"
                secondary={true}
                onClick={handleSubmit}
              ></Button>
            )}
          </ContainerButton>
        </Form>
      </ModalStyled>
    </OpacityContainer>
  );
};

export default Modal;
