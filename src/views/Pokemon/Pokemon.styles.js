import { types, typesLight } from 'helpers/types';
import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 500px;
    padding: 30px 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    overflow: hidden;
    /* background-image: linear-gradient(320deg, ${({ type }) => types(type)} 35%, 65%, ${({ type }) => typesLight(type)}); */
`;

export const TypeBackground = styled.div`
    background-image: linear-gradient(180deg, ${({ type }) => types(type)} 35%, 65%, ${({ type }) => typesLight(type)});
    height: 600px;
    width: 100%;
    border-radius: 50%;
    position: absolute;
    top: -350px;
    /* left: -50px; */
    overflow: hidden;
`;
