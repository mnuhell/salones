import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`

    body {
        font-family: 'Thasadith', sans-serif;
        color: #B98650;
        background: #1D2D48;
        font-weight: 700;
    }
    h1, h2, h3, h4, h5{
        color: #B98650;
    }
    .container{
        width: 100%;
        max-width: 960px;
        margin: 0 auto;
        padding: 0px 15px;
    }

    .row{
        padding: 0 15px;
    }
`;

export default GlobalStyle;

