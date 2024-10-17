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

        :root {
            --primaryColor: ${preferences.colors.primaryColor};
            --secondaryColor: ${preferences.colors.secondaryColor};
            --textColor: ${preferences.colors.textColor};
            --boxShadow: ${preferences.colors.boxShadow};

            --accordion-backgroundColor: ${
                preferences.colors.accordion && 
                preferences.colors.accordion.backgroundColor 
                    ? preferences.colors.accordion.backgroundColor
                    : preferences.colors.secondaryColor
            };
            --accordion-titleColor: ${
                preferences.colors.accordion && 
                preferences.colors.accordion.titleColor 
                    ? preferences.colors.accordion.titleColor
                    : preferences.colors.primaryColor
            };
            --accordion-textColor: ${
                preferences.colors.accordion && 
                preferences.colors.accordion.textColor 
                    ? preferences.colors.accordion.textColor
                    : preferences.colors.textColor
            };
            --accordion-boxShadow: ${
                preferences.colors.accordion && 
                preferences.colors.accordion.boxShadow 
                    ? preferences.colors.accordion.boxShadow
                    : preferences.colors.boxShadow
            };

            --gallery-backgroundColor: ${
                preferences.colors.gallery && 
                preferences.colors.gallery.backgroundColor 
                    ? preferences.colors.gallery.backgroundColor
                    : preferences.colors.secondaryColor
            };
            --gallery-textColor: ${
                preferences.colors.gallery && 
                preferences.colors.gallery.textColor 
                    ? preferences.colors.gallery.textColor
                    : preferences.colors.primaryColor
            };
            --gallery-boxShadow: ${
                preferences.colors.gallery && 
                preferences.colors.gallery.boxShadow 
                    ? preferences.colors.gallery.boxShadow
                    : preferences.colors.boxShadow
            };

            --navigationFinish-backgroundColor: ${
                preferences.colors.navigationFinish && 
                preferences.colors.navigationFinish.backgroundColor 
                    ? preferences.colors.navigationFinish.backgroundColor
                    : preferences.colors.secondaryColor
            };
            --navigationFinish-textColor: ${
                preferences.colors.navigationFinish && 
                preferences.colors.navigationFinish.textColor 
                    ? preferences.colors.navigationFinish.textColor
                    : preferences.colors.primaryColor
            };
        }
        
        body {
            background-color: var(--primaryColor);
            color: var(--textColor);
            font-family: "Sora";
        }

        /* custom scroll */

        ::-webkit-scrollbar { width: 7px; }

        ::-webkit-scrollbar-track { background-color: var(--textColor); }

        ::-webkit-scrollbar-thumb {
            background-color: var(--secondaryColor);
            border-radius: 10px;
        }
    `;

    return <Styled />;
}

export default GlobalStyle;