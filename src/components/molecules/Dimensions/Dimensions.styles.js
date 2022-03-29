import styled from 'styled-components';
import { Ruler } from '@styled-icons/fluentui-system-regular/Ruler';
import { MonitorWeight } from '@styled-icons/material-outlined/MonitorWeight';
import { types, typesLight } from 'helpers/types';

export const Wrapper = styled.div`
    position: relative;
    background-color: #ebf3f5;
    display: flex;
    border-radius: 10px;
    gap: 20px;

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 0px;

        p {
            font-weight: 500;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 5px;
            font-size: 14px;
            width: 80px;
        }

        span {
            color: #2e3057af;
        }
    }
`;

export const Line = styled.div`
    height: 40px;
    width: 2px;
    border-radius: 10px;
    background-color: #2e305750;
`;

export const StyledRuler = styled(Ruler)`
    width: 22px;
`;

export const StyledWeight = styled(MonitorWeight)`
    width: 22px;
`;
