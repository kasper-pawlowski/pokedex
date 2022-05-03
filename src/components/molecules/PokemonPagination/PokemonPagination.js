import React from 'react';
import { Wrapper, CurrentId, StyledLink, StyledArrowIosUpwardOutline, StyledArrowIosDownwardOutline } from './PokemonPagination.styles';

const PokemonPagination = ({ id, type }) => {
    const formatId = (num) => {
        return String(num).padStart(3, '0');
    };

    return (
        <Wrapper>
            <StyledLink to={`/pokedex/pokemon/${id - 1}`} id={id}>
                <StyledArrowIosUpwardOutline />
            </StyledLink>
            <StyledLink to={`/pokedex/pokemon/${id - 3}`}>{id > 3 ? formatId(id - 3) : <button disabled>&#8226;</button>}</StyledLink>
            <StyledLink to={`/pokedex/pokemon/${id - 2}`}>{id > 2 ? formatId(id - 2) : <button disabled>&#8226;</button>}</StyledLink>
            <StyledLink to={`/pokedex/pokemon/${id - 1}`}>{id > 1 ? formatId(id - 1) : <button disabled>&#8226;</button>}</StyledLink>
            <CurrentId type={type}>{formatId(id)}</CurrentId>
            <StyledLink to={`/pokedex/pokemon/${+id + 1}`}>{+id ? formatId(+id + 1) : <button disabled>-</button>}</StyledLink>
            <StyledLink to={`/pokedex/pokemon/${+id + 2}`}>{+id ? formatId(+id + 2) : <button disabled>-</button>}</StyledLink>
            <StyledLink to={`/pokedex/pokemon/${+id + 3}`}>{+id ? formatId(+id + 3) : <button disabled>-</button>}</StyledLink>
            <StyledLink to={`/pokedex/pokemon/${+id + 1}`}>
                <StyledArrowIosDownwardOutline />
            </StyledLink>
        </Wrapper>
    );
};

export default PokemonPagination;
