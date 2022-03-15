import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Wrapper } from './PokemonList.styles';
import PokemonCard from 'components/molecules/PokemonCard/PokemonCard';
import InfiniteScroll from 'react-infinite-scroll-component';
import { PokeContext } from 'context/PokeContext';

const PokemonList = () => {
    const [loading, setLoading] = useState(false);
    const [pokemons, setPokemons] = useState([]);
    const [limit, setLimit] = useState(25);
    const [currentUrl, setCurrentUrl] = useState(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
    const [error, setError] = useState('');
    const { searchValue } = useContext(PokeContext);

    useEffect(() => {
        setLoading(true);
        axios
            .get(currentUrl)
            .then(({ data }) => {
                setPokemons(data.results);
            })
            .catch((err) => setError(err));
        setLoading(false);
    }, [currentUrl, limit]);

    const loadMore = () => {
        setCurrentUrl(`https://pokeapi.co/api/v2/pokemon?limit=${limit + 25}`);
        setLimit(limit + 25);
    };

    return (
        <>
            <InfiniteScroll
                dataLength={pokemons.length}
                next={() => loadMore()}
                hasMore={true}
                loader={<h4>Loading...</h4>}
                pullDownToRefreshThreshold={1}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }>
                <Wrapper>
                    {loading ? (
                        <p>asdas</p>
                    ) : (
                        pokemons
                            .filter((value) => {
                                if (searchValue === '') {
                                    return value;
                                } else if (value.name.toLowerCase().includes(searchValue.toLowerCase())) {
                                    return value;
                                }
                            })
                            .map((e) => <PokemonCard key={e.name} data={e} />)
                    )}
                </Wrapper>
            </InfiniteScroll>
        </>
    );
};

export default PokemonList;
