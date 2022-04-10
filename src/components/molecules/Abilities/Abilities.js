import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Wrapper, AbilityWrapper } from './Abilities.styles';
import { InfoWrapper, Description, Icon, DescriptionName, Content } from 'components/atoms/PokemonInfoWrapper/PokemonInfoWrapper';
import { Ruler } from '@styled-icons/remix-line/Ruler';
import Ability from 'components/atoms/Ability/Ability';

const Abilities = ({ abilities }) => {
    return (
        <InfoWrapper>
            <Description>
                <Icon>
                    <Ruler />
                </Icon>
                <DescriptionName>Abilities</DescriptionName>
            </Description>
            <Content>
                <Wrapper>
                    <AbilityWrapper>
                        {abilities.map((e) => (
                            <Ability key={e.ability.name} item={e} />
                        ))}
                    </AbilityWrapper>
                </Wrapper>
            </Content>
        </InfoWrapper>
    );
};

export default Abilities;
