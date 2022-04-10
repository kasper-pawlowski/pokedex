import styled, { keyframes } from 'styled-components';

const fade = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

export const Wrapper = styled.div`
    p {
        animation: ${fade} 0.5s linear;
    }
`;
