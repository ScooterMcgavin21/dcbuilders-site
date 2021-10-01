import styled, { createGlobalStyle } from "styled-components";
/*globalStyles.js*/
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Quicksand', sans-serif;
  }
  // prevent issues with animations
  /* html, body {
    overflow-x: hidden;
  } */
`;

/** GlobalStyle Container rendering <div> tag */
export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;

/** Button Container rendering button tag */
export const Button = styled.button`
  // border-radius: 4px; round square
  border-radius: 50px; // circle
  // If primary colors set, use it
  background: ${({ primary }) => (primary ? '#66FCF1' : '#C5C6C7')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  color: #101522;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  font-weight: bold;
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background: ${({ primary }) => (primary ? '#C5C6C7' : '#66FCF1')};
    transform: translate(-2px);
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export default GlobalStyle;



