import React, { useState, useEffect } from 'react';
import { Wrapper } from 'components/organisms/Nav/Nav.styles';
import { Link } from 'react-router-dom';

const Nav = () => {
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 66) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    useEffect(() => {
        changeBackground();
        // adding the event when scroll change background
        window.addEventListener('scroll', changeBackground);
    });

    return (
        <Wrapper navbar={navbar}>
            <Link to="/">
                <p>Pokédex</p>
            </Link>
        </Wrapper>
    );
};

export default Nav;
