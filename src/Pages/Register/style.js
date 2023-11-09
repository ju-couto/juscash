import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  min-width: 100vw;

  background-color: #ccc;
`;

export const Form = styled.form`
  display: flex;
  color: #151e3d;

  padding: 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  max-width: 450px;
  gap: 20px 0px;
  width: 100%;

  a,
  p {
    font-size: 14px;
    color: #151e3d;
    text-decoration: none;
  }
`;

export const ContainerNav = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0px;
  margin: 0;
  width: 100%;
  gap: 5px;
  height: 10px;
`;
