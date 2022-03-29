import React from 'react';
import { Wrapper } from 'components/organisms/Nav/Nav.styles';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <Wrapper>
            <Link to="/">
                <p>Pokédex</p>
            </Link>
        </Wrapper>
    );
};

export default Nav;
