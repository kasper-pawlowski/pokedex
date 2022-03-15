import React, { useEffect, useState } from 'react';
import { Wrapper } from './Pokemon.styles';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Pokemon = () => {
    const [pokemon, setPokemon] = useState([]);
    let { id } = useParams();

    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(function (response) {
                const { data } = response;
                setPokemon(data);
            })
            .catch(function (error) {
                setPokemon(false);
            });
    }, [id]);

    return (
        <>
            <Wrapper>{pokemon.name}</Wrapper>
        </>
    );
};

export default Pokemon;
