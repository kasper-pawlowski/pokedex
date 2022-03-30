import { types, typesLight } from 'helpers/types';
import styled from 'styled-components';

export const Wrapper = styled.div`
    /* height: calc(100vh - 70px); */
    padding: 30px 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
`;

export const SpriteCircle = styled.div`
    position: relative;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-image: linear-gradient(320deg, ${({ type }) => types(type)} 35%, 65%, ${({ type }) => typesLight(type)});

    img {
        width: 250px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -60%);
        background: rgba(255, 255, 255, 0.116);
        backdrop-filter: blur(0px);
        -webkit-backdrop-filter: blur(0px);
    }
`;

export const PokemonSpriteWrapper = styled.div`
    width: 350px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-image: linear-gradient(320deg, ${({ type }) => types(type)} 35%, 65%, ${({ type }) => typesLight(type)});
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.199);

    div {
        position: relative;
        width: 100%;
        max-width: 512px;
        /* height: 512px; */
        padding: 0 20px;
        padding-top: 100%;
        float: left;
        img {
            position: absolute;
            width: 100%;
            max-width: 512px;
            height: auto;
            z-index: 1;
            bottom: 40px;
            left: 0;
        }

        &:after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 70%;
            height: 70%;
            width: 80%;
            height: 80%;
            background: red;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.116);
            backdrop-filter: blur(0px);
            -webkit-backdrop-filter: blur(0px);
        }
    }
`;

export const Info = styled.div`
    flex: 1;
    height: 2000px;
    background-color: tomato;
`;
