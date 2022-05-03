import styled from 'styled-components';
import { Github } from '@styled-icons/boxicons-logos/Github';

export const Wrapper = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #2e3057;
    font-size: 34px;
    font-weight: 700;
    padding: 0 5%;
    grid-area: Nav;
    position: fixed;
    top: 0;
    z-index: 2;
    transition-duration: 0.15s;
    background-color: ${({ navbar }) => (navbar ? '#ebebeba3' : 'transparent')};
    backdrop-filter: ${({ navbar }) => (navbar ? 'blur(20px) saturate(200%)' : null)};
`;

export const GithubLink = styled(Github)`
    height: 40px;
    display: flex;
    align-items: center;
`;
