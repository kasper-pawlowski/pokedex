import React, { useContext } from 'react';
import { PokeContext } from 'context/PokeContext';
import { Input, SearchIcon, Wrapper } from './SearchBar.styles';

const SearchBar = ({ placeholder }) => {
    const { setSearchValue } = useContext(PokeContext);

    return (
        <Wrapper>
            <Input placeholder={placeholder} onChange={(e) => setSearchValue(e.target.value)} />
            <SearchIcon />
        </Wrapper>
    );
};

export default SearchBar;
