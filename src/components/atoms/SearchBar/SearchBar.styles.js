import styled from 'styled-components';
import { Search } from '@styled-icons/boxicons-regular/Search';

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    align-self: center;
    align-items: center;
    justify-content: center;
    width: 30%;
    @media (max-width: 1400px) {
        width: 40%;
    }
    @media (max-width: 1000px) {
        width: 60%;
    }
    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const Input = styled.input`
    background-color: #ebf3f5;
    padding: 15px 30px 15px 60px;
    width: 100%;
    outline: none;
    border: 0;
    border-radius: 30px;
    color: #2e3057;
    font-size: 18px;
    font-weight: 500;
    display: flex;
    align-items: center;

    &::placeholder {
        color: #a6acbc;
        font-weight: 400;
        font-size: 18px;
    }
`;

export const SearchIcon = styled(Search)`
    width: 22px;
    left: 22px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: #5e617f;
`;
