import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { types, typesLight } from 'helpers/types';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 10px;
    width: 100%;
    @media (max-width: 700px) {
        /* flex-direction: column; */
    }
`;

export const StyledLink = styled(Link)`
    padding: 10px;
    border-radius: 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    p {
        text-transform: capitalize;
        font-size: 18px;
        font-weight: 500;
        @media (max-width: 500px) {
            font-size: 14px;
        }
    }
    img {
        @media (max-width: 500px) {
            width: 80px;
        }
    }
`;

export const Line = styled.div`
    width: 50px;
    height: 2px;
    background-color: ${({ type }) => types(type)};
    @media (max-width: 700px) {
        display: none;
    }
`;
