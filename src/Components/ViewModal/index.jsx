import React from "react";
import { ModalStyled, OpacityContainer, ContainerButton, Form } from "./style";
import Button from "../Button";
import { AiOutlineClose } from "react-icons/ai";

const ViewLeadModal = ({ leadData, onClose }) => {
  return (
    <OpacityContainer>
      <ModalStyled>
        <div>
          <h1>Visualizar Lead</h1>
          <AiOutlineClose onClick={onClose} />
        </div>
        <h2>Dados do Lead</h2>
        <Form>
          <div>
            <strong>Nome Completo:</strong>
            <span>{leadData.name}</span>
          </div>
          <div>
            <strong>E-mail:</strong>
            <span>{leadData.email}</span>
          </div>
          <div>
            <strong>Telefone:</strong>
            <span>{leadData.phone}</span>
          </div>
          <h2>Oportunidades</h2>
          <div>
            <strong>Todos:</strong>
            <span>{leadData.all ? "Sim" : "Não"}</span>
          </div>
          <div>
            <strong>Honorários Sucumbenciais:</strong>
            <span>{leadData.successFees ? "Sim" : "Não"}</span>
          </div>
          <div>
            <strong>Honorários Contratuais:</strong>
            <span>{leadData.contractFees ? "Sim" : "Não"}</span>
          </div>
          <div>
            <strong>Honorários Dativos:</strong>
            <span>{leadData.dativesFees ? "Sim" : "Não"}</span>
          </div>
          <div>
            <strong>Crédito do Autor:</strong>
            <span>{leadData.authorCredit ? "Sim" : "Não"}</span>
          </div>
          <ContainerButton>
            <Button type="button" color="white" text="Fechar" secondary={true} onClick={onClose} />
          </ContainerButton>
        </Form>
      </ModalStyled>
    </OpacityContainer>
  );
};

export default ViewLeadModal;
