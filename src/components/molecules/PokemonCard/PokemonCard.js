import React, { useState, useEffect } from 'react';
import { Id, Img, Name, Wrapper } from './PokemonCard.styles';
import axios from 'axios';

const PokemonCard = ({ data: { url } }) => {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        const abortCont = new AbortController();
        axios
            .get(url, { signal: abortCont.signal })
            .then(({ data }) => setPokemon(data))
            .catch((err) => console.log(err));
        return () => abortCont.abort();
    }, [url]);

    if (pokemon.sprites === undefined) {
        return <div />;
    }

    return (
        <Wrapper to={`/pokemon/${pokemon.id}`} type={pokemon.types[0].type.name}>
            <Img src={pokemon.sprites.other.home.front_default} alt="" />
            <Name>{pokemon.name}</Name>
            <Id>{pokemon.id <= 9 ? `#00${pokemon.id}` : pokemon.id <= 99 ? `#0${pokemon.id}` : `#${pokemon.id}`}</Id>
        </Wrapper>
    );
};

export default PokemonCard;
