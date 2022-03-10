import styled from 'styled-components';
import { typesColors } from 'assets/pokemon-types-colors';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 280px;
    border-radius: 10px;
    background-color: ${({ type }) =>
        type === 'grass'
            ? typesColors.grass
            : type === 'fire'
            ? typesColors.fire
            : type === 'water'
            ? typesColors.water
            : type === 'bug'
            ? typesColors.bug
            : type === 'ground'
            ? typesColors.ground
            : type === 'poison'
            ? typesColors.poison
            : type === 'electric'
            ? typesColors.electric
            : type === 'psychic'
            ? typesColors.psychic
            : type === 'normal'
            ? typesColors.normal
            : type === 'fairy'
            ? typesColors.fairy
            : type === 'ice'
            ? typesColors.ice
            : type === 'fighting'
            ? typesColors.fighting
            : type === 'flying'
            ? typesColors.flying
            : type === 'rock'
            ? typesColors.rock
            : type === 'ghost'
            ? typesColors.ghost
            : type === 'dragon'
            ? typesColors.dragon
            : type === 'dark'
            ? typesColors.dark
            : type === 'steel'
            ? typesColors.steel
            : '#fff'};
`;

export const Img = styled.img`
    width: 180px;
    height: 180px;
    transform: translateY(-10px);
`;

export const Name = styled.p`
    font-size: 20px;
    font-weight: 600;
    text-transform: capitalize;
    margin-top: auto;
`;

export const Id = styled.p`
    font-weight: 400;
    color: #3e4174;
    margin-bottom: 20px;
`;
