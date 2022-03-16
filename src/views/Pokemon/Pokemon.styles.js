import { types, typesLight } from 'helpers/types';
import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 50px 0;
    width: 100%;
    height: 100%;
    display: flex;
`;

export const ImgWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 400px;
    border-radius: 10px;
    /* background-color: ${({ type }) => types(type)}; */
    background-image: linear-gradient(320deg, ${({ type }) => types(type)} 35%, 65%, ${({ type }) => typesLight(type)});
    img {
        width: 350px;
        height: 350px;
        margin-bottom: 50px;
    }
`;
