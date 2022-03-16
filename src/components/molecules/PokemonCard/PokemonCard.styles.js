import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { types, typesLight } from 'helpers/types';

export const Wrapper = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 280px;
    border-radius: 10px;
    /* background-color: ${({ type }) => types(type)}; */
    background-image: linear-gradient(320deg, ${({ type }) => types(type)} 35%, 65%, ${({ type }) => typesLight(type)});
`;

export const Img = styled.img`
    width: 180px;
    height: 180px;
    transform: translateY(-10px);
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
