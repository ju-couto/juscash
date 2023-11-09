import styled from "styled-components";

export const DragAndDropContainer = styled.ul`
  display: flex;
  list-style: none;
  flex-direction: row;

  width: 100%;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 50px;
  flex-direction: row;
  main {
    width: 100%;
    border-top: 1px solid #d8dada;
    border-bottom: 1px solid #d8dada; 
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
`;
