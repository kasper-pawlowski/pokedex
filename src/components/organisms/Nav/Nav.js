import React, { useState, useEffect } from 'react';
import {
    Wrapper,
    LoginWrapper,
    ProfilePicture,
    StyledArrowDownOutline,
    LogIn,
    Dropdown,
    StyledLogOut,
    StyledUser,
    StyledLink,
} from 'components/organisms/Nav/Nav.styles';
import { Link } from 'react-router-dom';
import { useAuth } from 'context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import { useDetectClickOutside } from 'react-detect-click-outside';

const Nav = () => {
    const [navbar, setNavbar] = useState(false);
    const [open, setOpen] = useState(false);
    const { loginWithGoogle, currentUser, logout } = useAuth();

    const changeBackground = () => {
        if (window.scrollY >= 66) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    useEffect(() => {
        changeBackground();
        window.addEventListener('scroll', changeBackground);
    });

    // console.log(currentUser);

    const Dropdownn = () => {
        const ref = useDetectClickOutside({ onTriggered: () => setOpen(false) });
        const out = async () => {
            console.log('before', open);
            logout();
            await setOpen(false);
            console.log('after', open);
        };

        return (
            <Dropdown
                ref={ref}
                as={motion.div}
                layout
                transition={{ duration: 0.15 }}
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}>
                <StyledLink to="/profile">
                    <StyledUser />
                    Profile
                </StyledLink>
                <div onClick={() => setOpen(false)}>
                    <StyledLogOut /> Log Out
                </div>
            </Dropdown>
        );
    };

    return (
        <Wrapper navbar={navbar}>
            <Link
                to="/"
                onClick={() =>
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth',
                    })
                }>
                <p>Pokédex</p>
            </Link>
            <LoginWrapper onClick={() => setOpen(!open)}>
                {currentUser ? (
                    <>
                        <ProfilePicture src={currentUser.photoURL} alt="" />
                        <StyledArrowDownOutline open={open} />
                        {open ? (
                            <AnimatePresence>
                                <Dropdownn />
                            </AnimatePresence>
                        ) : null}
                    </>
                ) : (
                    <LogIn onClick={() => loginWithGoogle()}>log in</LogIn>
                )}
            </LoginWrapper>
        </Wrapper>
    );
};

export default Nav;
