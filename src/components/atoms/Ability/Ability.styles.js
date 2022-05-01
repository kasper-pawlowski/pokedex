import styled, { keyframes } from 'styled-components';
import { ArrowDownOutline } from '@styled-icons/evaicons-outline/ArrowDownOutline';

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
`;

export const StyledArrowDownOutline = styled(ArrowDownOutline)`
    width: 20px;
    height: 20px;
    transform: ${({ isOpen }) => isOpen && 'rotate(180deg)'};
    transition-duration: 0.2s;
`;

export const Text = styled.div`
    display: flex;
    margin-top: 10px;
    color: #2e3057b6;
`;
