import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { types, typesLight } from 'helpers/types';

export const Wrapper = styled.div`
    margin-top: 30px;
    width: fit-content;
    height: 100%;
    /* background-color: #ebf3f5; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 30px 20px;
    gap: 30px;
    border-radius: 10px;
`;

export const CurrentId = styled.p`
    color: ${({ type }) => types(type)};
    transition-duration: 0.2s;
`;

export const StyledLink = styled(Link)``;
