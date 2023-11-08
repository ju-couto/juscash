import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    width: 100vw;
    height: 100vh;
    background-color: #0C0D0E;
    color: #fff;
    position: relative;
    font-family: 'Arial', sans-serif;
}
`

export default GlobalStyle;