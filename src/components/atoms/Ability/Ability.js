import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Wrapper, StyledArrowDownOutline, Label, Text } from './Ability.styles';

import { motion, AnimatePresence } from 'framer-motion';

const Ability = ({ item }) => {
    const [ability, setAbility] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    useEffect(() => {
        const abortCont = new AbortController();
        axios
            .get(item?.ability?.url, { signal: abortCont.signal })
            .then(({ data }) => setAbility(data))
            .catch((err) => console.log(err));
        return () => abortCont.abort();
    }, [item?.ability?.url]);

    return (
        <Wrapper as={motion.li} layout onClick={toggleOpen} transition={{ duration: 0.15 }}>
            <Label as={motion.div} layout initial={{ y: -20 }} animate={{ y: 0 }}>
                <p>{ability.name}</p>
                <StyledArrowDownOutline isOpen={isOpen} />
            </Label>
            <AnimatePresence>
                {isOpen && (
                    <Text
                        transition={{ duration: 0.15 }}
                        as={motion.div}
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}>
                        {ability.flavor_text_entries[3].flavor_text}
                    </Text>
                )}
            </AnimatePresence>
        </Wrapper>
    );
};

export default Ability;
