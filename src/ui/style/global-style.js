import {createGlobalStyle} from "styled-components";
import './fonts.css';

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    overflow-x: hidden;
    font-family: Poppins, sans-serif;
  }

  ul {
    list-style: none;
  }
  
  a {
    text-decoration: none;
    color: ${({theme}) => theme.color.light}
  }
`;