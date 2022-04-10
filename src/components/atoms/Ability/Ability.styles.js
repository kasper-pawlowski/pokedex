import styled, { keyframes } from 'styled-components';
import { ArrowDownOutline } from '@styled-icons/evaicons-outline/ArrowDownOutline';

const fade = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

export const Wrapper = styled.div`
    padding: 10px;
    border-radius: 7px;
    overflow: hidden;
    cursor: pointer;
    &:hover {
        background-color: #d2d9db;
    }
`;

export const Label = styled.div`
    display: flex;
    align-items: center;
    font-weight: 500;
    p {
        animation: ${fade} 0.5s linear;
    }
`;

export const StyledArrowDownOutline = styled(ArrowDownOutline)`
    width: 20px;
    height: 20px;
    transform: ${({ toggle }) => (toggle ? 'rotate(180deg)' : null)};
    transition-duration: 0.2s;
`;

export const Text = styled.div`
    display: flex;
    margin-top: 10px;
    height: ${({ toggle }) => (toggle ? 'auto' : '0')};
    opacity: ${({ toggle }) => (toggle ? 1 : 0)};
    transition-duration: 0.2s;
    color: #2e3057b6;
`;

// export const Text = styled.div.attrs((props) => ({
//     style: {
//         height: props.toggle ? 'auto' : '0',
//         opacity: props.toggle ? 1 : 0,
//     },
// }))`
//     display: flex;
//     margin-top: 10px;
//     transition-duration: 0.2s;
//     color: #2e3057b6;
// `;
