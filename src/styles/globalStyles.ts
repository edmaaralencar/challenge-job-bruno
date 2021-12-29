import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: Inter, sans-serif;
    }

    html {
        font-size: 62.5%;
    }

    body {
        background-color: #F8F7FC;
    }

    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }
    
    .Toastify__toast-body {
        font-size: 1.6rem;
    }
`