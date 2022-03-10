import PokemonList from 'components/organisms/PokemonList/PokemonList';
import React from 'react';
import { Wrapper } from './Home.styles';

const Home = () => {
    return (
        <Wrapper>
            <PokemonList />
        </Wrapper>
    );
};

export default Home;
