import React from 'react';
import { Wrapper, CurrentId, StyledLink } from './PokemonPagination.styles';

const PokemonPagination = ({ id, type }) => {
    return (
        <Wrapper>
            <StyledLink to={`/pokemon/${id - 6}`}>{id > 6 ? (id <= 9 ? `#00${id - 6}` : id <= 99 ? `#0${id - 6}` : `#${id - 6}`) : null}</StyledLink>
            <StyledLink to={`/pokemon/${id - 5}`}>{id > 5 ? (id <= 9 ? `#00${id - 5}` : id <= 99 ? `#0${id - 5}` : `#${id - 5}`) : null}</StyledLink>
            <StyledLink to={`/pokemon/${id - 4}`}>{id > 4 ? (id <= 9 ? `#00${id - 4}` : id <= 99 ? `#0${id - 4}` : `#${id - 4}`) : null}</StyledLink>
            <StyledLink to={`/pokemon/${id - 3}`}>{id > 3 ? (id <= 9 ? `#00${id - 3}` : id <= 99 ? `#0${id - 3}` : `#${id - 3}`) : null}</StyledLink>
            <StyledLink to={`/pokemon/${id - 2}`}>{id > 2 ? (id <= 9 ? `#00${id - 2}` : id <= 99 ? `#0${id - 2}` : `#${id - 2}`) : null}</StyledLink>
            <StyledLink to={`/pokemon/${id - 1}`}>{id > 1 ? (id <= 9 ? `#00${id - 1}` : id <= 99 ? `#0${id - 1}` : `#${id - 1}`) : null}</StyledLink>
            <CurrentId type={type}>{id <= 9 ? `#00${id}` : id <= 99 ? `#0${id}` : `#${id}`}</CurrentId>
            {<StyledLink to={`/pokemon/${+id + 1}`}>{id <= 9 ? `#00${+id + 1}` : id <= 99 ? `#0${+id + 1}` : `#${+id + 1}`}</StyledLink>}
            {<StyledLink to={`/pokemon/${+id + 2}`}>{id <= 9 ? `#00${+id + 2}` : id <= 99 ? `#0${+id + 2}` : `#${+id + 2}`}</StyledLink>}
            {<StyledLink to={`/pokemon/${+id + 3}`}>{id <= 9 ? `#00${+id + 3}` : id <= 99 ? `#0${+id + 3}` : `#${+id + 3}`}</StyledLink>}
            {<StyledLink to={`/pokemon/${+id + 4}`}>{id <= 9 ? `#00${+id + 4}` : id <= 99 ? `#0${+id + 4}` : `#${+id + 4}`}</StyledLink>}
            {<StyledLink to={`/pokemon/${+id + 5}`}>{id <= 9 ? `#00${+id + 5}` : id <= 99 ? `#0${+id + 5}` : `#${+id + 5}`}</StyledLink>}
            {<StyledLink to={`/pokemon/${+id + 6}`}>{id <= 9 ? `#00${+id + 6}` : id <= 99 ? `#0${+id + 6}` : `#${+id + 6}`}</StyledLink>}
        </Wrapper>
    );
};

export default PokemonPagination;
