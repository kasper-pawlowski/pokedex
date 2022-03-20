import styled from 'styled-components';
import { Search } from '@styled-icons/boxicons-regular/Search';

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Input = styled.input`
    background-color: #ebf3f5;
    padding: 10px 15px 10px 40px;
    outline: none;
    border: 0;
    border-radius: 10px;
    color: #2e3057;
    font-size: 16px;
    font-weight: 500;
    display: flex;
    align-items: center;

    &::placeholder {
        color: #a6acbc;
        opacity: 1;
        font-weight: 400;
        font-size: 14px;
    }
`;

export const SearchIcon = styled(Search)`
    width: 18px;
    left: 14px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: #5e617f;
`;
