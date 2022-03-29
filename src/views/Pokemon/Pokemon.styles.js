import { types, typesLight } from 'helpers/types';
import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    gap: 30px;
    flex-grow: 1;
    padding-bottom: 50px;
    max-height: 100vh;
`;

export const ImgWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0.6;
    border-radius: 10px;
    /* background-color: ${({ type }) => typesLight(type)}; */
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
    display: flex;
    flex-direction: column;
    flex: 1.2;
`;

export const InfoBaseStats = styled.div`
    margin-top: 30px;
    flex: 1;
    /* overflow-y: scroll; */
    overflow-x: hidden;
    display: flex;
    gap: 30px;
    /* flex-direction: column; */
    max-height: 100%;
    overflow: hidden;
    overflow-y: scroll;

    @media (max-width: 1200px) {
        flex-direction: column;
    }
`;

export const Column = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 30px;
`;

export const Name = styled.span`
    font-size: 3.2vw;
    font-weight: 600;
    text-transform: capitalize;
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const Id = styled.p`
    font-size: 3.2vw;
    font-weight: 600;
    text-transform: capitalize;
    color: #2e305791;
`;
