import { createGlobalStyle } from "styled-components";

import Sora from "./fonts/Sora.ttf";

import './normalize.css';

const GlobalStyle = () => {
    const Styled = createGlobalStyle`
        @font-face {
            font-family: "Sora";
            src: local("Sora"), url(${Sora}), format("truetype");
            font-weight: normal;
            font-style: normal;
        }

        html, body { height: 100%; }
        
        body { font-family: "Sora"; }

        /* custom scroll */

        ::-webkit-scrollbar { width: 7px; }

        ::-webkit-scrollbar-track { background-color: black; }

        ::-webkit-scrollbar-thumb {
            background-color: #676767;
            border-radius: 10px;
        }

    `;

    return <Styled />;
}

export default GlobalStyle;