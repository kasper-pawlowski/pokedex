import React, { useState, useEffect } from 'react';
import { Wrapper, ImgWrapper, Info, Name, Id, InfoBaseStats } from './Pokemon.styles';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Types from 'components/molecules/Types/Types';
import EvolutionChain from 'components/molecules/EvolutionChain/EvolutionChain';
import Dimensions from 'components/molecules/Dimensions/Dimensions';
import Stats from 'components/molecules/Stats/Stats';
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
            <ImgWrapper type={pokemon.types[0].type.name}>
                <div>{pokemon.sprites.other.home.front_default ? <img src={pokemon.sprites.other.home.front_default} alt="" /> : 'loading'}</div>
            </ImgWrapper>
            <Info>
                <Name>
                    <p>{pokemon.name}</p>
                    <Id>{pokemon.id <= 9 ? `#00${pokemon.id}` : pokemon.id <= 99 ? `#0${pokemon.id}` : `#${pokemon.id}`}</Id>
                </Name>
                <Types types={pokemon.types} />
                <InfoBaseStats>
                    <Dimensions height={pokemon.height} weight={pokemon.weight} type={pokemon.types[0].type.name} />
                    {/* <Stats stats={pokemon.stats} type={pokemon.types[0].type.name} id={pokemon.id} /> */}
                    {/* <EvolutionChain evolutionChain={evolutionChain} /> */}
                </InfoBaseStats>
            </Info>
            <PokemonPagination type={pokemon.types[0].type.name} id={id} />
        </Wrapper>
    );
};

export default Pokemon;
