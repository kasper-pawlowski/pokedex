import React, { useState, useEffect } from 'react';
import { Wrapper, ImgWrapper, Info, Name, Id } from './Pokemon.styles';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Types from '../../components/molecules/Types/Types.js';

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
            <Info>
                <Name>
                    {pokemon.name}
                    <Id>{pokemon.id <= 9 ? `#00${pokemon.id}` : pokemon.id <= 99 ? `#0${pokemon.id}` : `#${pokemon.id}`}</Id>
                </Name>
                <Types types={pokemon.types} />
            </Info>
        </Wrapper>
    );
};

export default Pokemon;
