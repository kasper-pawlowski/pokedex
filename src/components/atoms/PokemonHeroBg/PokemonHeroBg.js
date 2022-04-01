import React from 'react';
import { types, typesLight } from 'helpers/types';
import { Svg } from './PokemonHeroBg.styles';

const PokemonHeroBg = ({ type }) => {
    return (
        <Svg width="100%" height="276" preserveAspectRatio="none" viewBox="0 0 1366 276" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M1366 170.458L1032.23 239.627C801.858 287.368 564.142 287.368 333.769 239.627L-4.07696e-05 170.458V-432L1366 -432V170.458Z"
                fill="url(#paint0_linear_43_79)"
            />
            <defs>
                <linearGradient id="paint0_linear_43_79" x1="683" y1="284.988" x2="683" y2="-60" gradientUnits="userSpaceOnUse">
                    <stop stopColor={typesLight(type)} />
                    <stop offset="1" stopColor={types(type)} />
                </linearGradient>
            </defs>
        </Svg>
    );
};

export default PokemonHeroBg;
