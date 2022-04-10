import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Wrapper, StyledArrowDownOutline, Label, Text } from './Ability.styles';

const Ability = ({ item }) => {
    const [ability, setAbility] = useState([]);
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        axios
            .get(item?.ability?.url)
            .then(({ data }) => setAbility(data))
            .catch((err) => console.log(err));
    }, [item]);

    return (
        <Wrapper onClick={() => setToggle(!toggle)}>
            <Label>
                <p>{ability.name}</p>
                <StyledArrowDownOutline toggle={toggle} />
            </Label>
            {toggle ? <Text toggle={toggle}>{ability.flavor_text_entries[3].flavor_text}</Text> : null}
        </Wrapper>
    );
};

export default Ability;
