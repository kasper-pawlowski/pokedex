import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import { InfoWrapper, Description, Icon, DescriptionName, Content } from 'components/atoms/PokemonInfoWrapper/PokemonInfoWrapper';
import { Wrapper, StyledLink, Line } from './EvolutionChain.styles.js';
import { Ruler } from '@styled-icons/remix-line/Ruler';

const EvolutionChain = ({ evolutionChain: { chain }, type }) => {
    const [urls, setUrls] = useState([]);

    const evo = useMemo(
        () => [chain?.species, chain?.evolves_to[0]?.species, chain?.evolves_to[0]?.evolves_to[0]?.species],
        [chain?.evolves_to, chain?.species]
    );

    useEffect(() => {
        axios
            .all(evo.map((endpoint) => axios.get(endpoint?.url)))
            .then((data) => setUrls(data))
            .catch((err) => console.log(err));
    }, [evo]);

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
                    <StyledLink to={`/pokemon/${urls[0]?.data?.id}`}>
                        <img src={`https://img.pokemondb.net/sprites/home/normal/${evo[0]?.name}.png`} alt="" />
                        <p>{evo[0]?.name}</p>
                    </StyledLink>
                    {evo[1] ? <Line type={type} /> : null}
                    {evo[1] ? (
                        <StyledLink to={`/pokemon/${urls[1]?.data?.id}`}>
                            <img src={`https://img.pokemondb.net/sprites/home/normal/${evo[1]?.name}.png`} alt="" />
                            <p>{evo[1]?.name}</p>
                        </StyledLink>
                    ) : null}
                    {evo[2] ? <Line type={type} /> : null}
                    {evo[2] ? (
                        <StyledLink to={`/pokemon/${urls[2]?.data?.id}`}>
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
