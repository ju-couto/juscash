import styled from "styled-components";

export const TableStyled = styled.div`
  display: flex;
  font-size: 14px;

  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
  margin-top: 20px;
  margin-bottom: 20px;
`;
export const TableHead = styled.div`
  display: flex;
  background-color: #fff;
  flex-direction: row;
  color: #899090;
  font-weight: 600;
  /* margin-bottom: 3px; */
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
`;
export const HeadData = styled.div`
  flex: 1;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  height: 50px;
  border: 1px solid #d8dada;
`;

export const TableBody = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: #fff; */
  color: #000;
  align-items: center;
  justify-content: center;
  width: 100%;

  /* gap: 5px; */
  main {
    width: 100%;
    border-top: 1px solid #d8dada; /* Borda superior */
    border-bottom: 1px solid #d8dada; /* Borda inferior */
    ul {
      height: 100%
    }
    li{
      width: 33%;
      div{
        width: 100%;
        height: 100%;
      }
    }
  }
 
  & > div:nth-child(even) {
    background-color: #eff1f0; /* Cor de fundo para linhas pares */
  }
  & > div:nth-child(odd) {
    background-color: #fff; /* Cor de fundo para linhas ímpares (pode ser igual à cor de fundo da tabela) */
  }
`;
