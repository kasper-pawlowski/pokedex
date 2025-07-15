import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import { InfoWrapper, Description, Icon, DescriptionName, Content } from 'components/atoms/PokemonInfoWrapper/PokemonInfoWrapper';
import { Wrapper, StyledLink, Line } from './EvolutionChain.styles.js';
import { Ruler } from '@styled-icons/remix-line/Ruler';
import { motion } from 'framer-motion';

const EvolutionChain = ({ evolutionChain: { chain }, id, type }) => {
    const [urls, setUrls] = useState([]);

    const evo = useMemo(
        () => [chain?.species, chain?.evolves_to[0]?.species, chain?.evolves_to[0]?.evolves_to[0]?.species],
        [chain?.evolves_to, chain?.species]
    );

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        axios
            .all(evo.map((endpoint) => axios.get(endpoint?.url)))
            .then((data) => setUrls(data))
            .catch((err) => console.log(err));
    }, [evo]);
    return (
        <InfoWrapper evolutionChain as={motion(InfoWrapper)} layout transition={{ duration: 0.15 }}>
            <Description>
                <Icon>
                    <Ruler />
                </Icon>
                <DescriptionName>Evolution Chain</DescriptionName>
            </Description>
            <Content>
                <Wrapper>
                    <StyledLink onClick={() => scrollToTop()} to={`/pokemon/${urls[0]?.data?.id}`} as={motion(StyledLink)} layout>
                        <img src={`https://img.pokemondb.net/sprites/home/normal/${evo[0]?.name}.png`} alt="" />
                        <p>{evo[0]?.name}</p>
                    </StyledLink>
                    {evo[1] ? <Line type={type} /> : null}
                    {evo[1] ? (
                        <StyledLink onClick={() => scrollToTop()} to={`/pokemon/${urls[1]?.data?.id}`} as={motion(StyledLink)} layout>
                            <img src={`https://img.pokemondb.net/sprites/home/normal/${evo[1]?.name}.png`} alt="" />
                            <p>{evo[1]?.name}</p>
                        </StyledLink>
                    ) : null}
                    {evo[2] ? <Line type={type} /> : null}
                    {evo[2] ? (
                        <StyledLink onClick={() => scrollToTop()} to={`/pokemon/${urls[2]?.data?.id}`} as={motion(StyledLink)} layout>
                            <img src={`https://img.pokemondb.net/sprites/home/normal/${evo[2]?.name}.png`} alt="" />
                            <p>{evo[2]?.name}</p>
                        </StyledLink>
                    ) : null}
                </Wrapper>
            </Content>
        </InfoWrapper>
    );
};

export default EvolutionChain;
