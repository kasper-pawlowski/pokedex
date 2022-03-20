import { typesColors, lightTypesColors } from 'assets/pokemon-types-colors';

export const types = (type) => {
    return type === 'grass'
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
        : '#fff';
};

export const typesLight = (type) => {
    return type === 'grass'
        ? lightTypesColors.grass
        : type === 'fire'
        ? lightTypesColors.fire
        : type === 'water'
        ? lightTypesColors.water
        : type === 'bug'
        ? lightTypesColors.bug
        : type === 'ground'
        ? lightTypesColors.ground
        : type === 'poison'
        ? lightTypesColors.poison
        : type === 'electric'
        ? lightTypesColors.electric
        : type === 'psychic'
        ? lightTypesColors.psychic
        : type === 'normal'
        ? lightTypesColors.normal
        : type === 'fairy'
        ? lightTypesColors.fairy
        : type === 'ice'
        ? lightTypesColors.ice
        : type === 'fighting'
        ? lightTypesColors.fighting
        : type === 'flying'
        ? lightTypesColors.flying
        : type === 'rock'
        ? lightTypesColors.rock
        : type === 'ghost'
        ? lightTypesColors.ghost
        : type === 'dragon'
        ? lightTypesColors.dragon
        : type === 'dark'
        ? lightTypesColors.dark
        : type === 'steel'
        ? lightTypesColors.steel
        : '#fff';
};
