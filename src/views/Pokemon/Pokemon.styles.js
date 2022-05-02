import { types, typesLight } from 'helpers/types';
import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 30px 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ImgWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    img {
        z-index: 1;
    }
    &::before {
        content: '';
        position: absolute;
        background: rgba(146, 146, 146, 0.35);
        bottom: -5px;
        width: 200px;
        height: 30px;
        border-radius: 50%;
    }
`;

export const Img = styled.img`
    width: 300px;
    height: 300px;
`;

export const Name = styled.span`
    font-size: 52px;
    font-weight: 600;
    text-transform: capitalize;
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 30px;
`;

export const Id = styled.p`
    color: #2e305791;
`;

export const Info = styled.div`
    width: 800px;
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
`;

export const Column = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 30px;
`;
