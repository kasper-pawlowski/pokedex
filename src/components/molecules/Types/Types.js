import React from 'react';
import { Wrapper, Span } from './Types.styles';
// import Badge from 'components/atoms/Badge/Badge';

const Types = ({ types }) => {
    return (
        <Wrapper>
            {types.map(({ type }) => (
                <Span key={type.name} data={type.name}>
                    <p>{type.name}</p>
                </Span>
            ))}
        </Wrapper>
    );
};

export default Types;
