import styled from 'styled-components';
import { typesLight } from 'helpers/types';

export const Wrapper = styled.div`
    display: flex;
    gap: 10px;
    grid-area: Types;
`;

export const Span = styled.span`
    border-radius: 10px;
    padding: 3px 7px;
    border: 2px solid ${({ data }) => typesLight(data)};
`;
