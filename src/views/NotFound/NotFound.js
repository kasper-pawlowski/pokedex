import React from 'react';
import { Wrapper, Img, StyledLink } from './NotFound.styles';
import Snorlax from 'assets/images/snorlax404.png';

const NotFound = () => {
    return (
        <Wrapper>
            <Img src={Snorlax} alt="" />
            <p>
                <span>Oops!</span> A wild Snorlax has blocked your path!
            </p>
            <StyledLink to="/">◀ Go Back</StyledLink>
        </Wrapper>
    );
};

export default NotFound;
