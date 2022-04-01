import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { InfoWrapper, Description, Icon, DescriptionName, Content } from 'components/atoms/PokemonInfoWrapper/PokemonInfoWrapper';
import { Wrapper, StyledLink } from './EvolutionChain.styles.js';
import { Ruler } from '@styled-icons/remix-line/Ruler';

const EvolutionChain = ({ evolutionChain: { chain } }) => {
    const evo = {
        I: chain?.species.name,
        II: chain?.evolves_to[0]?.species.name,
        III: chain?.evolves_to[0]?.evolves_to[0]?.species.name,
    };

    return (
        <InfoWrapper evolutionChain>
            <Description>
                <Icon>
                    <Ruler />
                </Icon>
                <DescriptionName>Evolution Chain</DescriptionName>
            </Description>
            <Content>
                <Wrapper>
                    <StyledLink to={`/pokemon/${evo.I}`}>
                        <img src={`https://img.pokemondb.net/sprites/home/normal/${evo.I}.png`} alt="" />
                        <p>{evo.I}</p>
                    </StyledLink>

                    {evo.II ? (
                        <StyledLink to={`/pokemon/${evo.II}`}>
                            <img src={`https://img.pokemondb.net/sprites/home/normal/${evo.II}.png`} alt="" />
                            <p>{evo.II}</p>
                        </StyledLink>
                    ) : null}
                    {evo.III ? (
                        <StyledLink to={`/pokemon/${evo.III}`}>
                            <img src={`https://img.pokemondb.net/sprites/home/normal/${evo.III}.png`} alt="" />
                            <p>{evo.III}</p>
                        </StyledLink>
                    ) : null}
                </Wrapper>
            </Content>
        </InfoWrapper>
    );
};

export default EvolutionChain;
