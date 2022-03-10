// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Wrapper } from './PokemonList.styles';
// import PokemonCard from 'components/molecules/PokemonCard/PokemonCard';

// const PokemonList = () => {
//     const [{ nextPage, pokemons }, setData] = useState({
//         nextPage: '',
//         pokemons: [],
//     });
//     const [error, setError] = useState('');
//     const api = 'https://pokeapi.co/api/v2';

//     useEffect(() => {
//         axios
//             .get(`${api}/pokemon/?limit=25`)
//             .then(({ data }) =>
//                 setData({
//                     nextPage: data.next,
//                     pokemons: data.results,
//                 })
//             )
//             .catch((err) => setError(err));
//     }, []);

//     // console.log(pokemons);

//     return (
//         <>
//             <Wrapper>
//                 {pokemons.length > 0 ? pokemons.map((e) => <PokemonCard key={e.name} data={e} />) : <p>{error ? error : 'Loading...'}</p>}
//             </Wrapper>
//             <button>Show more pokemons...</button>
//         </>
//     );
// };

// export default PokemonList;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Wrapper } from './PokemonList.styles';
import PokemonCard from 'components/molecules/PokemonCard/PokemonCard';

const Pagination = ({ gotoNextPage, gotoPrevPage }) => {
    return (
        <div>
            {gotoPrevPage && <button onClick={gotoPrevPage}>Previous</button>}
            {gotoNextPage && <button onClick={gotoNextPage}>Next</button>}
        </div>
    );
};

export default function PokemonList() {
    const [pokeData, setPokeData] = useState(['']);
    const [currentUrl, setCurrentUrl] = useState('https://pokeapi.co/api/v2/pokemon');
    const [nextUrl, setNextUrl] = useState('');
    const [prevUrl, setPrevUrl] = useState('');
    console.log(pokeData[0]);

    useEffect(() => {
        let cancel;

        axios
            .get(currentUrl, {
                cancelToken: new axios.CancelToken((c) => (cancel = c)), //membatalkan previus request
            })
            .then((res) => {
                console.log('data', res.data.results);
                setPokeData(res.data.results);
                setNextUrl(res.data.next);
                setPrevUrl(res.data.previous);
            });
        return () => cancel();
    }, [currentUrl]);
    function gotoNextPage() {
        setCurrentUrl(nextUrl);
    }
    function gotoPrevPage() {
        setCurrentUrl(prevUrl);
    }

    console.log(pokeData);

    return (
        <>
            <Wrapper>
                {pokeData.map((e) => (
                    <PokemonCard key={e.name} data={e} />
                ))}
            </Wrapper>

            <Pagination gotoNextPage={nextUrl ? gotoNextPage : null} gotoPrevPage={prevUrl ? gotoPrevPage : null} />
        </>
    );
}
