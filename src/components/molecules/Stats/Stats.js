import React, { useState, useEffect } from 'react';
import { Wrapper, StatRenge, StatRengeDiv, Description } from './Stats.styles';

const Stats = ({ stats, type, id }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        let timer = setTimeout(() => setIsLoaded(true), 0);
        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <Wrapper>
            <Description type={type}>Stats</Description>
            <div>
                {stats.map(({ stat }) => (
                    <p key={stat.name}>{stat.name}</p>
                ))}
            </div>
            <div>
                {stats.map((stat) => (
                    <p>{stat.base_stat}</p>
                ))}
            </div>
            <div>
                {stats.map((stat) => (
                    <span>
                        <StatRenge type={type}>
                            <StatRengeDiv stat={stat} isLoaded={isLoaded} type={type}></StatRengeDiv>
                        </StatRenge>
                    </span>
                ))}
            </div>
        </Wrapper>
    );
};

export default Stats;
