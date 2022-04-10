import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Wrapper } from './Ability.styles';

const Ability = ({ item }) => {
    const [ability, setAbility] = useState([]);

    useEffect(() => {
        axios
            .get(item?.ability?.url)
            .then(({ data }) => setAbility(data))
            .catch((err) => console.log(err));
    }, [item]);

    return (
        <Wrapper>
            <p>{ability.name}</p>
        </Wrapper>
    );
};

export default Ability;
