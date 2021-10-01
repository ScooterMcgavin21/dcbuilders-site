import styled from "styled-components";

/** InfoSec component rendering <div> tag */
export const InfoSec = styled.div`
  color: #fff;
  padding: 160px 0;
  height: 100vh;
  background: ${({ lightBg }) => (lightBg ? '#fff' : '#101522')};
`;