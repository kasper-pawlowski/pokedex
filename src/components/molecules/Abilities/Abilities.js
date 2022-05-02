import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Wrapper, AbilityWrapper } from './Abilities.styles';
import { InfoWrapper, Description, Icon, DescriptionName, Content } from 'components/atoms/PokemonInfoWrapper/PokemonInfoWrapper';
import { Ruler } from '@styled-icons/remix-line/Ruler';
import Ability from 'components/atoms/Ability/Ability';

import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';

const Abilities = ({ abilities }) => {
    return (
        <AnimateSharedLayout>
            <InfoWrapper as={motion.div} layout transition={{ duration: 0.15 }}>
                <Description as={motion.div} layout>
                    <Icon>
                        <Ruler />
                    </Icon>
                    <DescriptionName>Abilities</DescriptionName>
                </Description>
                <Content as={motion.div} layout>
                    <Wrapper as={motion.div} layout>
                        <AbilityWrapper as={motion.ul} layout>
                            {abilities.map((e) => (
                                <Ability key={e.ability.name} item={e} />
                            ))}
                        </AbilityWrapper>
                    </Wrapper>
                </Content>
            </InfoWrapper>
        </AnimateSharedLayout>
    );
};

export default Abilities;
