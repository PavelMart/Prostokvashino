import {createGlobalStyle} from "styled-components";
import fontFamily from "./../../fonts/rotondac.otf"

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: RobotoC;
    src: url(${fontFamily}) format('truetype');
  }
  
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: black;
    font-family: 'RobotoC', sans-serif;
  }
  
  h1, h2, h3, p {
    margin: 0;
    padding: 0;
  }
  
  ul {
    list-style: none
  }
  
  a {
    text-decoration: none;
    font: inherit;
    color: inherit;
  }
  
  span {
    font: inherit;
    color: inherit;
  }
  
  button {
    cursor: pointer;
  }
`