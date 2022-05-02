import React from 'react';
import { Wrapper, Line, StyledRuler, StyledWeight } from './Dimensions.styles';
import { InfoWrapper, Description, Icon, DescriptionName, Content } from 'components/atoms/PokemonInfoWrapper/PokemonInfoWrapper';
import { Ruler } from '@styled-icons/remix-line/Ruler';
import { motion } from 'framer-motion';

const Dimensions = ({ height, weight, type }) => {
    return (
        <InfoWrapper as={motion.div} layout transition={{ duration: 0.15 }}>
            <Description>
                <Icon>
                    <Ruler />
                </Icon>
                <DescriptionName>Dimensions</DescriptionName>
            </Description>
            <Content>
                <Wrapper>
                    <div>
                        <p>
                            <StyledWeight />
                            {`${height / 10}m`}
                        </p>
                        <span>Height</span>
                    </div>
                    <Line />
                    <div>
                        <p>
                            <StyledRuler />

                            {`${(weight / 10).toFixed(1)}kg`}
                        </p>
                        <span>Weight</span>
                    </div>
                </Wrapper>
            </Content>
        </InfoWrapper>
    );
};

export default Dimensions;
