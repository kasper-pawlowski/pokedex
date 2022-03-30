import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #2e3057;
    font-size: 34px;
    font-weight: 700;
    padding: 0 5%;
    grid-area: Nav;
    position: sticky;
    top: 0;
    z-index: 2;
    transition-duration: 0.15s;
    background-color: ${({ navbar }) => (navbar ? '#ebebeba3' : '#F8FBF5')};
    backdrop-filter: ${({ navbar }) => (navbar ? 'blur(20px) saturate(200%)' : null)};
`;
