import { createContext, useState } from 'react';

export const PokeContext = createContext();

export const PokeProvider = ({ children }) => {
    const [searchValue, setSearchValue] = useState('');

    const value = {
        searchValue,
        setSearchValue,
    };

    return <PokeContext.Provider value={value}>{children}</PokeContext.Provider>;
};
