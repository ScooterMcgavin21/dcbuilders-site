import { createGlobalStyle } from "styled-components";

/*globalStyles.js*/
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }
  // prevent issues with animations
  html, body {
    overflow-x: hidden;
  }
`;

export default GlobalStyle;


