import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    background: url('https://images.creativemarket.com/0.1.0/ps/7511120/3000/1873/m1/fpnw/wm0/780-.jpg?1577385721&s=d94bc68b2c83122d6bb7f95a092aadaf') no-repeat;
    background-size: cover;
    background-attachment: fixed;
    display:block;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    max-width: 768px;
    margin-left: auto;
    font-family: Helvetica, Sans-serif, Arial;
    background-color: #FFFFFF;
    min-height:100vh;
    padding: 1rem;
    margin-top:0;
    font-family:Verdana;
  }
`;

export default GlobalStyle;
