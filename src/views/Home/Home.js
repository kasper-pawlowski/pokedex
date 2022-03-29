import PokemonList from 'components/organisms/PokemonList/PokemonList';
import React from 'react';
import { Wrapper, HeroText } from './Home.styles';
import SearchBar from 'components/atoms/SearchBar/SearchBar';

const Home = () => {
    return (
        <Wrapper>
            <HeroText>
                <h1>Pokédex</h1>
                <p>What pokémon are you looking for?</p>
            </HeroText>
            <SearchBar placeholder="Search pokémon" />
            <PokemonList />
        </Wrapper>
    );
};

export default Home;
