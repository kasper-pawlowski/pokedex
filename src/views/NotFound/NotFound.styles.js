import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
        transform: translateY(-40px);
        font-size: 26px;
        font-weight: 600;

        span {
            color: #00739a;
        }
    }
`;

export const FourZeroFour = styled.span`
    font-weight: 600;
    font-size: 100px;
`;

export const Img = styled.img`
    width: 400px;
    transform: translateY(-80px);
`;

export const StyledLink = styled(Link)`
    padding: 10px 30px;
    background-color: #00739a;
    border: none;
    border-radius: 30px;
    font-size: 20px;
    color: #f8fbf5;
    transition: 0.15s;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    &:hover {
        background-color: #006586;
    }

    &:active {
        transform: translateY(3px);
    }
`;
