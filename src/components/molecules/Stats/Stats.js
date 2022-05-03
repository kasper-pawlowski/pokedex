import React, { useState, useEffect } from 'react';
import { Wrapper, StatRenge, StatRengeDiv, BaseStat, StatName } from './Stats.styles';
import { InfoWrapper, Description, Icon, DescriptionName, Content } from 'components/atoms/PokemonInfoWrapper/PokemonInfoWrapper';
import { StatsChart } from '@styled-icons/ionicons-outline/StatsChart';
import { motion } from 'framer-motion';

const Stats = ({ stats, type }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        let timer = setTimeout(() => setIsLoaded(true), 0);
        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <InfoWrapper as={motion.div} layout transition={{ duration: 0.15 }}>
            <Description>
                <Icon>
                    <StatsChart />
                </Icon>
                <DescriptionName>Stats</DescriptionName>
            </Description>
            <Content>
                <Wrapper>
                    {stats.map(({ stat, base_stat }) => (
                        <div key={stat.name}>
                            <StatName>{stat.name}</StatName>
                            <BaseStat>{base_stat}</BaseStat>
                            <StatRenge type={type}>
                                <StatRengeDiv baseStat={base_stat} isLoaded={isLoaded} type={type}></StatRengeDiv>
                            </StatRenge>
                        </div>
                    ))}
                </Wrapper>
            </Content>
        </InfoWrapper>
    );
};

export default Stats;
