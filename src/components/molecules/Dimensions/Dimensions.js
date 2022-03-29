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
                            {/* {`${(weight / 10).toFixed(1)}kg (${(weight * 0.2205).toFixed(1)}lbs)`} */}
                            {`${(weight / 10).toFixed(1)}kg`}
                        </p>
                        <span>Height</span>
                    </div>
                    <Line />
                    <div>
                        <p>
                            <StyledRuler />
                            {/* {`${height / 10}m (${`${Math.floor((height / 10) * 3.28)}'${Math.round((((height / 10) * 3.28) % 1) * 12)}")`} `} */}
                            {`${height / 10}m`}
                        </p>
                        <span>Weight</span>
                    </div>
                </Wrapper>
            </Content>
        </InfoWrapper>
    );
};

export default Dimensions;
