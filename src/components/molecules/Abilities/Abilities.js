import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Wrapper, AbilityWrapper, StyledArrowDownOutline } from './Abilities.styles';
import { InfoWrapper, Description, Icon, DescriptionName, Content } from 'components/atoms/PokemonInfoWrapper/PokemonInfoWrapper';
import { Ruler } from '@styled-icons/remix-line/Ruler';
import Ability from 'components/atoms/Ability/Ability';

const Abilities = ({ abilities }) => {
    const [ability, setAbility] = useState([]);

    // useEffect(() => {
    //     abilities.map((e) => {
    //         axios
    //             .get(e.ability.url)
    //             .then(({ data }) => {
    //                 Comp = <p>asd</p>;
    //             })
    //             .catch((err) => console.log(err));
    //     });
    // }, [abilities]);

    // console.log(ability.name);

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
                        {/* <p>{console.log(ability.name)}</p> */}
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
