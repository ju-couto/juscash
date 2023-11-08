import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    color: #151E3D;     
    min-width: 100vw;
    background-color: #CCC;
`

export const Form = styled.form`
    display: flex;
    padding: 3rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 5px;
    max-width: 450px;
    gap: 30px 0px;
    width: 100%; 

   

    a, p{
        color: #151E3D; 
        font-size: 14px;
        text-decoration: none;
    }
`
export const ContainerNav = styled.div`

        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 0px;
        margin: 0;
        width: 100%;
        gap: 10px;
        height: 10px;
`
