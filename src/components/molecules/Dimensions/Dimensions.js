import React from 'react';
import { Wrapper, Line, StyledRuler, StyledWeight } from './Dimensions.styles';
import { InfoWrapper, Description, Icon, DescriptionName, Content } from 'components/atoms/PokemonInfoWrapper/PokemonInfoWrapper';
import { Ruler } from '@styled-icons/remix-line/Ruler';

const Dimensions = ({ height, weight, type }) => {
    return (
        <InfoWrapper>
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
