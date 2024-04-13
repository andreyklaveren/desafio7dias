import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    color: #000000;
}
:root {
    font-size: 62.5%;
}
html {
    scroll-behavior: smooth;
}
`;
