import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Wrapper, AbilityWrapper, StyledArrowDownOutline } from './Abilities.styles';
import { InfoWrapper, Description, Icon, DescriptionName, Content } from 'components/atoms/PokemonInfoWrapper/PokemonInfoWrapper';
import { Ruler } from '@styled-icons/remix-line/Ruler';

const Abilities = ({ abilities }) => {
    const [ability, setAbility] = useState({});

    const requestOne = axios.get(abilities[0]?.ability?.url);
    const requestTwo = axios.get(abilities[1]?.ability?.url);
    const requestThree = axios.get(abilities[2]?.ability?.url);

    useEffect(() => {
        axios
            .all([requestOne, requestTwo, requestThree])
            .then(
                axios.spread((...responses) => {
                    const responseOne = setAbility({ abilityI: responses[0].name });
                    const responseTwo = setAbility({ abilityII: responses[1].name });
                    const responesThree = setAbility({ abilityIII: responses[2].name });
                    // use/access the results
                })
            )
            .catch((errors) => {
                // react on errors.
            });
    }, [requestOne, requestThree, requestTwo]);

    // console.log('----------------');
    console.log(ability);

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
                        {/* {abilities.map((e) => (
                            <div>
                                <p key={e.ability.name}>
                                    {e.ability.name} <StyledArrowDownOutline />
                                </p>
                                {console.log(ability)}
                                {effect_entries?.filter((e) => {
                                    if (e.language.name === 'en') {
                                        return console.log(e);
                                    }
                                })}
                            </div>
                        ))} */}
                    </AbilityWrapper>
                </Wrapper>
            </Content>
        </InfoWrapper>
    );
};

export default Abilities;
