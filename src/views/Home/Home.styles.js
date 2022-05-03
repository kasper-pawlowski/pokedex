import styled from 'styled-components';

export const Wrapper = styled.div`
    gap: 50px;
    display: flex;
    flex-direction: column;
    padding: 50px 5%;
`;

export const HeroText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #2e3057;
    align-self: center;
    gap: 10px;
    h1 {
        font-size: 50px;
    }
    p {
        font-size: 20px;
        font-weight: 600;
    }
`;
