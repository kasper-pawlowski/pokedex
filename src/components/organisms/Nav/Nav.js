import React, { useState, useEffect } from 'react';
import { Wrapper } from 'components/organisms/Nav/Nav.styles';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Nav = () => {
    const [navbar, setNavbar] = useState(false);
    let location = useLocation();

    const changeBackground = () => {
        if (window.scrollY >= 66) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        changeBackground();
        window.addEventListener('scroll', changeBackground);
    });

    return (
        <Wrapper navbar={navbar}>
            {location.pathname !== '/' || window.scrollY >= 66 ? (
                <Link to="/" onClick={() => scrollToTop()}>
                    Pokédex
                </Link>
            ) : null}
        </Wrapper>
    );
};

export default Nav;
