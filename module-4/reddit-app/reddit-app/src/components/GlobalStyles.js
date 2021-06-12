import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    display: ${(props) => (props.windowsize > 999 ? "grid" : "flex")};
    grid-template-columns: 66% 33%;
    margin: 0;
    padding: 0;
    min-height: 100vh;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
    
  }
`;

export { GlobalStyles };
