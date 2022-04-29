import React, { useState, useContext, useEffect } from 'react';
import { auth, provider } from 'firebase.js';
import { getAuth, signInWithPopup } from 'firebase/auth';

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    function loginWithGoogle() {
        const auth = getAuth();
        return signInWithPopup(auth, provider)
            .then((result) => {
                setCurrentUser(result.user);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    function logout() {
        return auth.signOut();
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    const value = {
        currentUser,
        loginWithGoogle,
        logout,
    };

    return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}
