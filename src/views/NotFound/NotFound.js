import React from 'react';
import { Wrapper, FourZeroFour, Img, StyledLink } from './NotFound.styles';
import Snorlax from 'assets/images/snorlax404.png';

const NotFound = () => {
    return (
        <Wrapper>
            {/* <FourZeroFour>404</FourZeroFour> */}
            <Img src={Snorlax} alt="" />
            <p>
                <span>Oops!</span> A wild Snorlax has blocked your path!
            </p>
            <StyledLink to="/">GO BACK</StyledLink>
        </Wrapper>
    );
};

export default NotFound;
