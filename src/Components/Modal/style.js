import styled from "styled-components";

export const ModalStyled = styled.div`
    display: flex;
    color:#0C0D0E;
    /* justify-content: center; */
    height: fit-content;
    min-width: 500px;
    background-color: #fff;
    border-radius: 5px;
    padding: 20px;
    flex-direction: column;
    position: absolute ;
    z-index: 999;
    box-shadow: 0px 0px 10px 0px #0C0D0E;

    > div:first-child { 
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    svg{
        
        cursor: pointer;
    }    
  
    h1,h2 {
        font-weight: 600;
        padding: 10px;
    }
    h1{
        font-size: 20px;

    }
    h2 {
        font-size: 18px;
    
    }
`

export const OpacityContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    min-width: 100vw;
    background-color: rgba(0,0,0,0.5);
    position: absolute;
    z-index: 999;
    top: 0;
    left: 0;
`
export const ContainerButton = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    
    
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    /* margin-top: 20px; */
    /* padding: 10px; */
   
    `