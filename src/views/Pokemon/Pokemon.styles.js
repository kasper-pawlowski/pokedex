import { types, typesLight } from 'helpers/types';
import styled from 'styled-components';

export const Wrapper = styled.div`
    grid-area: Route;
    padding: 50px 0;
    width: 100%;
    display: flex;
    gap: 30px;
    flex-grow: 1;
`;

export const ImgWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0.5;
    border-radius: 10px;
    /* background-color: ${({ type }) => typesLight(type)}; */
    background-image: linear-gradient(320deg, ${({ type }) => types(type)} 35%, 65%, ${({ type }) => typesLight(type)});
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.199);

    div {
        position: relative;
        width: 100%;
        max-width: 512px;
        /* height: 512px; */
        padding: 0 20px;
        padding-top: 100%;
        float: left;
        img {
            position: absolute;
            width: 100%;
            max-width: 512px;
            height: auto;
            z-index: 1;
            bottom: 40px;
            left: 0;
        }

        &:after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 70%;
            height: 70%;
            width: 80%;
            height: 80%;
            background: red;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.116);
            backdrop-filter: blur(0px);
            -webkit-backdrop-filter: blur(0px);
        }
    }
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1.2;
`;

export const InfoBaseStats = styled.div`
    flex: 1;
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    gap: 20px 20px;
    grid-template-areas:
        'Dimensions IDK'
        'Stats EvolutionChain';
    grid-area: InfoBaseStats;
    padding-top: 20px;

    span {
        display: flex;
        align-items: center;
    }
`;

export const Name = styled.span`
    font-size: 3.2vw;
    font-weight: 600;
    text-transform: capitalize;
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const Id = styled.p`
    font-size: 3.2vw;
    font-weight: 600;
    text-transform: capitalize;
    color: #2e305791;
`;

// import { types, typesLight } from 'helpers/types';
// import styled from 'styled-components';

// export const Wrapper = styled.div`
//     padding: 50px 0;
//     width: 100%;
//     grid-area: Route;
//     display: flex;
//     gap: 30px;
// `;

// export const ImgWrapper = styled.div`
//     position: relative;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     height: 100%;
//     flex: 0.8;
//     border-radius: 10px;
//     /* background-color: ${({ type }) => typesLight(type)}; */
//     background-image: linear-gradient(320deg, ${({ type }) => types(type)} 35%, 65%, ${({ type }) => typesLight(type)});
//     transition-duration: 5s;
//     box-shadow: 0 4px 30px rgba(0, 0, 0, 0.199);

//     img {
//         max-width: 512px;
//         max-height: 512px;
//         margin-bottom: 80px;
//         z-index: 1;
//     }

//     &:after {
//         content: '';
//         position: absolute;
//         width: 400px;
//         height: 400px;
//         background: red;
//         border-radius: 50%;
//         background: rgba(255, 255, 255, 0.116);
//         backdrop-filter: blur(0px);
//         -webkit-backdrop-filter: blur(0px);
//     }
// `;

// export const Info = styled.div`
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//     grid-template-rows: 0.4fr 0.2fr 1.7fr 1.7fr;
//     gap: 0px 0px;
//     grid-template-areas:
//         'Name-and-Id Name-and-Id'
//         'Types Types'
//         'InfoBaseStats InfoBaseStats'
//         'InfoBaseStats InfoBaseStats';
//     grid-area: Info;
// `;

// export const InfoBaseStats = styled.div`
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//     grid-template-rows: 1fr 1fr;
//     gap: 20px 20px;
//     grid-template-areas:
//         'Dimensions IDK'
//         'Stats EvolutionChain';
//     grid-area: InfoBaseStats;
// `;

// export const Name = styled.span`
//     font-size: 4rem;
//     font-weight: 600;
//     text-transform: capitalize;
//     display: flex;
//     align-items: center;
//     gap: 10px;

//     grid-area: Name-and-Id;
// `;

// export const Id = styled.p`
//     font-size: 4rem;
//     font-weight: 600;
//     text-transform: capitalize;
//     color: #2e305791;
// `;
