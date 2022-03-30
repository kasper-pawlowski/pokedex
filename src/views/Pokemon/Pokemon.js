import React, { useState, useEffect } from 'react';
import { PokemonSpriteWrapper, Wrapper, SpriteCircle } from './Pokemon.styles';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import PokemonPagination from 'components/molecules/PokemonPagination/PokemonPagination';

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

    return (
        <Wrapper>
            <SpriteCircle type={pokemon.types[0].type.name}>
                <img src={pokemon.sprites.other.home.front_default} alt="" />
            </SpriteCircle>
            {/* <PokemonSpriteWrapper type={pokemon.types[0].type.name}>
                <div>{pokemon.sprites.other.home.front_default ? <img src={pokemon.sprites.other.home.front_default} alt="" /> : 'loading'}</div>
            </PokemonSpriteWrapper> */}
            {/* <Info></Info> */}
            {/* <PokemonPagination type={pokemon.types[0].type.name} id={id} /> */}
        </Wrapper>
    );
};

export default Pokemon;
