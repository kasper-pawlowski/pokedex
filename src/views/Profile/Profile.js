import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Wrapper, ProfilePicture } from './Profile.styles';
import { useAuth } from 'context/AuthContext';

const Profile = () => {
    const { currentUser } = useAuth();

    return (
        <Wrapper>
            <ProfilePicture src={currentUser.photoURL} alt="" />
            {currentUser.displayName}
        </Wrapper>
    );
};

export default Profile;
