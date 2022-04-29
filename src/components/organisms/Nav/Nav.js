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
} from 'components/organisms/Nav/Nav.styles';

import { Link } from 'react-router-dom';
import { useAuth } from 'context/AuthContext';

import OutsideClickHandler from 'react-outside-click-handler';

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

    console.log(currentUser);

    return (
        <Wrapper navbar={navbar}>
            <Link to="/">
                <p>Pokédex</p>
            </Link>
            <LoginWrapper onClick={() => setOpen(true)}>
                {open ? (
                    <OutsideClickHandler onOutsideClick={() => setOpen(false)}>
                        <Dropdown>
                            <div>
                                <StyledUser />
                                Profile
                            </div>
                            <div onClick={() => logout()}>
                                <StyledLogOut /> Log Out
                            </div>
                        </Dropdown>
                    </OutsideClickHandler>
                ) : null}
                {currentUser ? (
                    <>
                        <ProfilePicture src={currentUser.photoURL} alt="" />
                        <StyledArrowDownOutline open={open} />
                    </>
                ) : (
                    <LogIn onClick={() => loginWithGoogle()}>log in</LogIn>
                )}
            </LoginWrapper>
        </Wrapper>
    );
};

export default Nav;
