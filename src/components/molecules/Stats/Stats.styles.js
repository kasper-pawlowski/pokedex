import styled from 'styled-components';
import { types, typesLight } from 'helpers/types';

export const Wrapper = styled.div`
    position: relative;
    width: fit-content;
    height: fit-content;
    margin-top: auto;
    /* padding: 20px 20px; */
    display: flex;
    gap: 20px;
    border-radius: 10px;

    grid-area: Stats;

    div {
        display: flex;
        flex-direction: column;
        gap: 5px;

        span {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 5px;
        }

        p {
            text-transform: capitalize;
        }
    }
`;

export const BaseStat = styled.p`
    width: 26px;
`;

export const StatRenge = styled.div`
    width: 170px;
    height: 12px;
    background-color: ${({ type }) => typesLight(type)};
    border-radius: 10px;
    transition-duration: 0.5s;
`;

export const StatRengeDiv = styled.div`
    background-color: ${({ type }) => types(type)};
    width: ${({ stat, isLoaded }) => (isLoaded ? `${stat.base_stat / 2.5}%` : '0%')};
    transition-duration: 1s;
    height: 100%;
    border-radius: 10px;
`;

// na monitorze dziala ladnie i pasuje

// export const Wrapper = styled.div`
//     position: relative;
//     margin-top: 30px;
//     width: fit-content;
//     height: fit-content;
//     padding: 30px 20px;
//     /* background-color: #ebf3f5; */
//     display: flex;
//     gap: 30px;
//     border-radius: 10px;

//     grid-area: Stats;

//     div {
//         display: flex;
//         flex-direction: column;
//         gap: 5px;

//         span {
//             height: 100%;
//             display: flex;
//             flex-direction: column;
//             justify-content: center;
//             gap: 5px;
//         }

//         p {
//             text-transform: capitalize;
//         }
//     }
// `;

// export const Description = styled.div`
//     position: absolute;
//     top: -20px;
//     left: 0;
//     border-bottom: 2px solid ${({ type }) => types(type)};
//     font-size: 1.2rem;
// `;

// export const StatRenge = styled.div`
//     width: 170px;
//     height: 12px;
//     background-color: ${({ type }) => typesLight(type)};
//     border-radius: 10px;
// `;

// export const StatRengeDiv = styled.div`
//     background-color: ${({ type }) => types(type)};
//     width: ${({ stat, isLoaded }) => (isLoaded ? `${stat.base_stat / 2}%` : '0%')};
//     transition-duration: 1s;
//     height: 100%;
//     border-radius: 10px;
// `;
