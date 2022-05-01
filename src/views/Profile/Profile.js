import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Wrapper, ItemList, Evo } from './Profile.styles';

import { motion, AnimateSharedLayout, AnimatePresence, LayoutGroup } from 'framer-motion';

const Profile = () => {
    const items = ['jeden', 'dwa', 'trzy', 'cztery'];

    function Item() {
        const [isOpen, setIsOpen] = useState(false);

        const toggleOpen = () => setIsOpen(!isOpen);

        return (
            <motion.li layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
                <motion.div layout>-=-=-=-=-=-</motion.div>
                <AnimatePresence>
                    {isOpen && (
                        <motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, quaerat!
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.li>
        );
    }

    function List() {
        return (
            <ItemList as={motion.div} layout>
                <motion.ul layout>
                    <motion.p layout>Items list</motion.p>
                    {items.map((e) => (
                        <Item key={e} />
                    ))}
                </motion.ul>
            </ItemList>
        );
    }

    return (
        <AnimateSharedLayout>
            <Wrapper>
                <motion.div layout>
                    <List />
                </motion.div>
                <motion.div layout>
                    <List />
                </motion.div>
                <motion.div layout>
                    <List />
                </motion.div>
                <motion.div layout>
                    <List />
                </motion.div>
                <motion.div layout>
                    <List />
                </motion.div>
                <motion.div layout>
                    <List />
                </motion.div>
                <motion.div layout>
                    <List />
                </motion.div>
                <motion.div layout>
                    <List />
                </motion.div>
            </Wrapper>
            <Evo as={motion.div} layout />
        </AnimateSharedLayout>
    );
};

export default Profile;
