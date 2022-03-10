import React from 'react';
import { Input, SearchIcon, Wrapper } from './SearchBar.styles';

const SearchBar = ({ placeholder }) => {
    return (
        <Wrapper>
            <Input placeholder={placeholder} />
            <SearchIcon />
        </Wrapper>
    );
};

export default SearchBar;
