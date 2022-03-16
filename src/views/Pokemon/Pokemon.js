import React, { useState, useEffect } from 'react';
import { Wrapper, ImgWrapper } from './Pokemon.styles';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Pokemon = () => {
    const [pokemon, setPokemon] = useState([]);
    let { id } = useParams();

    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(({ data }) => setPokemon(data))
            .catch((err) => console.log(err));
    }, [id]);

    if (pokemon.sprites === undefined) {
        return <div />;
    }

    return (
        <Wrapper>
            <ImgWrapper type={pokemon.types[0].type.name}>
                <img src={pokemon.sprites.other.home.front_default} alt="" />
            </ImgWrapper>
            {/* <Img src={pokemon.sprites.other.home.front_default} alt="" /> */}
            {/* <Name>{pokemon.name}</Name> */}
            {/* <Id>{pokemon.id <= 9 ? `#00${pokemon.id}` : pokemon.id <= 99 ? `#0${pokemon.id}` : `#${pokemon.id}`}</Id> */}
        </Wrapper>
    );
};

export default Pokemon;
