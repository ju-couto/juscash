import styled from "styled-components";

export const ModalStyled = styled.div`
  display: flex;
  color: #0c0d0e;
  height: fit-content;
  min-width: 500px;
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
  flex-direction: column;
  position: absolute;
  z-index: 999;
  box-shadow: 0px 0px 10px 0px #0c0d0e;

  > div:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  svg {
    cursor: pointer;
  }

  h1,
  h2 {
    font-weight: 600;
    padding: 10px;
  }

  h1 {
    font-size: 20px;
  }
  
  h2 {
    font-size: 18px;
  }
  label {
    span {
      color: #0c0d0e;
    }
  }
`;

export const OpacityContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;