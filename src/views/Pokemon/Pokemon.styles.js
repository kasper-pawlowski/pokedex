import { types, typesLight } from 'helpers/types';
import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 50px 0;
    width: 100%;
    grid-area: Route;
    display: flex;
    gap: 30px;
`;

export const ImgWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    flex: 0.8;
    border-radius: 10px;
    /* background-color: ${({ type }) => typesLight(type)}; */
    background-image: linear-gradient(320deg, ${({ type }) => types(type)} 35%, 65%, ${({ type }) => typesLight(type)});
    transition-duration: 5s;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.199);

    img {
        /* max-width: 512px; */
        /* max-height: 512px; */
        margin-bottom: 80px;
        z-index: 1;
    }

    &:after {
        content: '';
        position: absolute;
        width: 400px;
        height: 400px;
        background: red;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.116);
        backdrop-filter: blur(0px);
        -webkit-backdrop-filter: blur(0px);
    }
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1.2;
`;

export const Name = styled.span`
    font-size: 4rem;
    font-weight: 600;
    text-transform: capitalize;
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const Id = styled.p`
    font-size: 4rem;
    font-weight: 600;
    text-transform: capitalize;
    color: #2e305791;
`;
