import React, { useState, useEffect } from 'react';
import { Wrapper, Img, Name, Id, ImgWrapper, Info, Column, Item } from './Pokemon.styles';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import PokemonPagination from 'components/molecules/PokemonPagination/PokemonPagination';
import PokemonHeroBg from '../../components/atoms/PokemonHeroBg/PokemonHeroBg';
import Types from 'components/molecules/Types/Types';
import Dimensions from 'components/molecules/Dimensions/Dimensions';
import Stats from 'components/molecules/Stats/Stats';
import EvolutionChain from 'components/molecules/EvolutionChain/EvolutionChain';
import Abilities from 'components/molecules/Abilities/Abilities';
import { motion, AnimateSharedLayout } from 'framer-motion';

const Pokemon = () => {
    const [pokemon, setPokemon] = useState([]);
    const [pokemonSpecies, setPokemonSpecies] = useState([]);
    const [evolutionChain, setEvolutionChain] = useState([]);
    const [loaded, isLoaded] = useState(false);
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
                .get(pokemonSpecies?.evolution_chain?.url)
                .then(({ data }) => setEvolutionChain(data))
                .catch((err) => console.log(err));
        }
    }, [pokemonSpecies]);

    if (pokemon.sprites === undefined) {
        return <div />;
    }

    return (
        <>
            <PokemonHeroBg type={pokemon.types[0].type.name} />
            <Wrapper>
                <ImgWrapper>
                    {pokemon.sprites.other.home.front_default ? <Img src={pokemon.sprites.other.home.front_default} alt="" /> : null}
                </ImgWrapper>
                <Name>
                    <p>{pokemon.name}</p>
                    <Id>{pokemon.id <= 9 ? `#00${pokemon.id}` : pokemon.id <= 99 ? `#0${pokemon.id}` : `#${pokemon.id}`}</Id>
                </Name>
                <Types types={pokemon.types} />
                <AnimateSharedLayout>
                    <Info as={motion.div} layout>
                        <Column as={motion.div} layout>
                            <Dimensions height={pokemon.height} weight={pokemon.weight} type={pokemon.types[0].type.name} />
                            <Abilities abilities={pokemon.abilities} />
                        </Column>
                        <Column as={motion.div} layout>
                            <Stats stats={pokemon.stats} type={pokemon.types[0].type.name} />
                        </Column>
                        <EvolutionChain evolutionChain={evolutionChain} type={pokemon.types[0].type.name} />
                    </Info>
                </AnimateSharedLayout>
            </Wrapper>
            <PokemonPagination type={pokemon.types[0].type.name} id={id} />
        </>
    );
};

export default Pokemon;
