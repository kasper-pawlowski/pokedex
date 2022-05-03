import styled from 'styled-components';
import { types, typesLight } from 'helpers/types';

export const Wrapper = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 14px;

    div {
        display: flex;
        gap: 20px;
        align-items: center;
    }
`;

export const StatName = styled.p`
    width: 115px;
`;

export const BaseStat = styled.p`
    width: 25px;
    display: flex;
    justify-content: center;
`;

export const StatRenge = styled.div`
    flex: 1;
    background-color: ${({ type }) => typesLight(type)};
    height: 12px;
    border-radius: 10px;
    transition-duration: 0.5s;
`;

export const StatRengeDiv = styled.div.attrs((props) => ({
    style: {
        backgroundColor: types(props.type),
        width: props.isLoaded ? `${props.baseStat / 2.5}%` : '0%',
    },
}))`
    width: 50%;
    height: 100%;
    border-radius: 10px;
    transition-duration: 1s;
`;
