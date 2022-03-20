import React from 'react';
import { Wrapper } from 'components/organisms/Nav/Nav.styles';
import SearchBar from 'components/atoms/SearchBar/SearchBar';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <Wrapper>
            <Link to="/">
                <p>Pokédex</p>
            </Link>
            <SearchBar placeholder="Name or number" />
        </Wrapper>
    );
};

export default Nav;
