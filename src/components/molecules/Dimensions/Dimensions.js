import React from 'react';
import { Wrapper, Line, StyledRuler, StyledWeight } from './Dimensions.styles';

const EvolutionChain = ({ height, weight }) => {
    return (
        <Wrapper>
            <div>
                <p>
                    <StyledWeight />
                    {`${(weight / 10).toFixed(1)}kg (${(weight * 0.2205).toFixed(1)}lbs)`}
                </p>
                <span>Height</span>
            </div>
            <Line />
            <div>
                <p>
                    <StyledRuler />
                    {`${height / 10}m (${`${Math.floor((height / 10) * 3.28)}'${Math.round((((height / 10) * 3.28) % 1) * 12)}")`} `}
                </p>
                <span>Weight</span>{' '}
            </div>
        </Wrapper>
    );
};

export default EvolutionChain;
