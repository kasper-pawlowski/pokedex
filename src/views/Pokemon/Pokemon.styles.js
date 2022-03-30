import { types, typesLight } from 'helpers/types';
import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100%;
    padding: 50px 5%;
    display: flex;
`;

export const PokemonSpriteWrapper = styled.div`
    width: 300px;
    height: 435px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;

    background-image: linear-gradient(320deg, ${({ type }) => types(type)} 35%, 65%, ${({ type }) => typesLight(type)});
    /* box-shadow: 0 4px 30px rgba(0, 0, 0, 0.199); */

    img {
        transform: translateY(-40px);
        width: 300px;
    }
`;
