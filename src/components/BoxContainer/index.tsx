import { ReactElement } from "react";

import styled from "styled-components";

interface BoxContainerProps {
    children: ReactElement
}

const Container = styled.div`
    width: 60%;
    background-color: var(--textBox-backgroundColor);
    color: var(--textBox-textColor);
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 5px;
    border-radius: 5px;
    box-shadow: 3px 3px 12px -1px var(--textBox-boxShadow);

    @media screen and (max-width: 1270px) {
        width: 80%;
    }
`;

const BoxContainer = ({ children }: BoxContainerProps) => {
    return (
        <Container>
            {children}
        </Container>
    );
};

export default BoxContainer;