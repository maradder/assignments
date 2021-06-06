import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    }
    
    body {
        background-color: ${({ theme }) => theme.backgroundColor};
        font-family: 'Montserrat', sans-serif;
        color:${({ theme }) => theme.primaryText};

        transition: all 0.50s linear;

    }
`;
export { GlobalStyle };
