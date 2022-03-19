import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 0 10%;
    min-height: 100vh;
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    gap: 0px 0px;
    grid-template-areas:
        'Nav'
        'Route';
`;
