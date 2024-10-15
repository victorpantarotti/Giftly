import { createGlobalStyle } from "styled-components";
import preferences from '@/settings/preferences';

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

        /* html, body { height: 100%; } */
        
        body {
            background-color: ${preferences.colors.primaryColor};
            color: ${preferences.colors.textColor};
            font-family: "Sora";
        }

        /* custom scroll */

        ::-webkit-scrollbar { width: 7px; }

        ::-webkit-scrollbar-track { background-color: ${preferences.colors.textColor}; }

        ::-webkit-scrollbar-thumb {
            background-color: ${preferences.colors.secondaryColor};
            border-radius: 10px;
        }
    `;

    return <Styled />;
}

export default GlobalStyle;