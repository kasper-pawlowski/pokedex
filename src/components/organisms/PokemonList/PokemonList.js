import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Wrapper } from './PokemonList.styles';
import PokemonCard from 'components/molecules/PokemonCard/PokemonCard';

const PokemonList = () => {
    const [{ nextPage, pokemons }, setData] = useState({
        nextPage: '',
        pokemons: [],
    });
    const [error, setError] = useState('');
    const api = 'https://pokeapi.co/api/v2';

    useEffect(() => {
        axios
            .get(`${api}/pokemon/?limit=25`)
            .then(({ data }) =>
                setData({
                    nextPage: data.next,
                    pokemons: data.results,
                })
            )
            .catch((err) => setError(err));
    }, []);

    // console.log(pokemons);

    return (
        <>
            <Wrapper>
                {pokemons.length > 0 ? pokemons.map((e) => <PokemonCard key={e.name} data={e} />) : <p>{error ? error : 'Loading...'}</p>}
            </Wrapper>
            <button>Show more pokemons...</button>
        </>
    );
};

export default PokemonList;
