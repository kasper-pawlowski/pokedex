import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { types, typesLight } from 'helpers/types';

const blur = keyframes`
    0% {
        transform: scale(0.8);
    }
    100% {
        transform: scale(1);
    }
`;

export const Wrapper = styled(Link)`
    animation: ${blur} 0.2s linear;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 280px;
    border-radius: 10px;
    transition-duration: 0.15s;
    background-color: ${({ type }) => typesLight(type)};

    &:after {
        content: '';
        position: absolute;
        top: 40%;
        transform: translateY(-60%);
        width: 150px;
        height: 150px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.15);
        backdrop-filter: blur(0px);
        -webkit-backdrop-filter: blur(0px);
        transition-duration: 0.15s;
    }

    &:active {
        transform: translateY(3px);
    }
`;

export const Img = styled.img`
    width: 180px;
    height: 180px;
    transform: translateY(-10px);
    z-index: 1;
`;

export const Name = styled.p`
    font-size: 20px;
    font-weight: 600;
    text-transform: capitalize;
    margin-top: auto;
`;

export const Id = styled.p`
    font-weight: 400;
    color: #3e4174;
    margin-bottom: 20px;
`;
