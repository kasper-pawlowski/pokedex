import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
    padding: 30px;
    /* background-color: #ebf3f5; */
    display: flex;
    gap: 30px;
    grid-area: EvolutionChain;
    width: fit-content;
    height: fit-content;
    align-self: flex-end;
    border-radius: 10px;
`;

export const StyledLink = styled(Link)`
    background-color: #ebf3f5;
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
    }
`;
