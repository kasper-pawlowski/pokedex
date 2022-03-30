import React, { useState, useEffect } from 'react';
import { Wrapper } from './Pokemon.styles';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Pokemon = () => {
    const [pokemon, setPokemon] = useState([]);
    const [pokemonSpecies, setPokemonSpecies] = useState([]);
    const [evolutionChain, setEvolutionChain] = useState([]);
    let { id } = useParams();

    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(({ data }) => setPokemon(data))
            .catch((err) => console.log(err));
    }, [id]);

    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
            .then(({ data }) => setPokemonSpecies(data))
            .catch((err) => console.log(err));
    }, [id]);

    useEffect(() => {
        if (pokemonSpecies.evolution_chain) {
            axios
                .get(pokemonSpecies.evolution_chain?.url)
                .then(({ data }) => setEvolutionChain(data))
                .catch((err) => console.log(err));
        }
    }, [pokemonSpecies]);

    if (pokemon.sprites === undefined) {
        return <div />;
    }

    return <Wrapper></Wrapper>;
};

export default Pokemon;
