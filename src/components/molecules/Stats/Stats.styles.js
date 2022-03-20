import styled from 'styled-components';
import { types, typesLight } from 'helpers/types';

export const Wrapper = styled.div`
    margin-top: 30px;
    width: fit-content;
    /* padding: 30px; */
    /* background-color: #ebf3f5; */
    display: flex;
    gap: 30px;
    border-radius: 10px;

    div {
        display: flex;
        flex-direction: column;
        gap: 5px;

        span {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 5px;
        }

        p {
            text-transform: capitalize;
        }
    }
`;

export const StatRenge = styled.div`
    width: 170px;
    height: 12px;
    background-color: ${({ type }) => typesLight(type)};
    border-radius: 10px;
`;

export const StatRengeDiv = styled.div`
    background-color: ${({ type }) => types(type)};
    width: ${({ stat, isLoaded }) => (isLoaded ? `${stat.base_stat / 2}%` : '0%')};
    transition-duration: 1s;
    height: 100%;
    border-radius: 10px;
`;
