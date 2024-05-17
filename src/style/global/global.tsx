import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        scrollbar-width: none;
    }

    body {
        background: #000;
        font-family: StratosSkyeng;
        overflow: auto;

        &::-webkit-scrollbar {
            display: none;
        }
    }

    ul {
        list-style: none;
    }

    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }
`;
