import styled from "styled-components";

export const ContainerInput = styled.div`
  display: flex;
  font-size: 18px;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border: 1px solid #6a6a6a;
  border-radius: 4px;
  padding: 10px 10px;
  width: 100%;
  
  input {
    border: 0 none;
    width: 100%;
    background-color: #fff;

    &:focus {
      outline: none;
      background-color: #fff;
    }
  }

  svg {
    cursor: pointer;
    color: #808080;
    font-size: 20px;
    margin-left: 10px;
  }`;
  
export const StyledLabel = styled.label`
  font-size: 15px;
  font-weight: 500;
  text-align: left;
  width: 100%;
  
  span{
    color: red;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px 0px;
`;
