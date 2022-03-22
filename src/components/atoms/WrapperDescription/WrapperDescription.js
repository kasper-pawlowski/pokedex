import { types, typesLight } from 'helpers/types';
import styled from 'styled-components';

const WrapperDescription = styled.div`
    position: absolute;
    top: -20px;
    left: 0;
    border-bottom: 2px solid ${({ type }) => types(type)};
    font-size: 1.2rem;
`;

export default WrapperDescription;
