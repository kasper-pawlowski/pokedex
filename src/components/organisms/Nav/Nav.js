import React from 'react';
import { Wrapper } from 'components/organisms/Nav/Nav.styles';
import SearchBar from 'components/atoms/SearchBar/SearchBar';

const Nav = () => {
    return (
        <Wrapper>
            <p>Pokédex</p>
            <SearchBar placeholder="Name or number" />
        </Wrapper>
    );
};

export default Nav;
