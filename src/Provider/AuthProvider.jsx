import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../firebase/firebase.config';


export const AuthContext = createContext();

const googleProvider=new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
     const createSignIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const googleSignIn=()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const logout = () => {
        return signOut(auth);
    };

    const resetPassword=(email)=>{
        return sendPasswordResetEmail( auth, email);
    };

   

    const updateUser = async (UpdatedData) => {
        // return updateProfile(auth.currentUser, UpdatedData);
        try {
      if (!auth.currentUser) {
        throw new Error("No user is logged in");
      }

      await updateProfile(auth.currentUser, UpdatedData);
      await auth.currentUser.reload();
      setUser({ ...auth.currentUser }); // force re-render with updated info

      return { success: true, message: "Profile updated successfully" };
    } catch (error) {
      console.error("Update failed:", error);
      return { success: false, message: error.message };
    }
        
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            unSubscribe();
        }
    }, []);

    const authData = {
        user,
        setUser,
        createUser,
        logout,
        createSignIn,
        googleSignIn,
        loading,
        setLoading,
        updateUser,
        resetPassword
    };

    return <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>;
};

export default AuthProvider;