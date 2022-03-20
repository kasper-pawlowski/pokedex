import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Wrapper } from './EvolutionChain.styles.js';

const EvolutionChain = ({ evolutionChain }) => {
    // const [a, b] = useState([]);

    // useEffect(() => {
    //     if (evolutionChain.chain) {
    //         axios
    //             .get(`https://pokeapi.co/api/v2/pokemon/${}/`)
    //             .then(({ data }) => b(data))
    //             .catch((err) => console.log(err));
    //     }
    // }, [evolutionChain.chain]);

    return (
        <Wrapper>
            <p>{evolutionChain.chain ? evolutionChain.chain.species.name : null}</p>
            <p>{evolutionChain.chain ? evolutionChain.chain.evolves_to[0]?.species.name : null}</p>
            <p>{evolutionChain.chain ? evolutionChain.chain.evolves_to[0]?.evolves_to[0]?.species.name : null}</p>
        </Wrapper>
    );
};

export default EvolutionChain;
