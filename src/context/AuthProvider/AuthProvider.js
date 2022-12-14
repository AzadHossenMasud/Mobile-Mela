import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, deleteUser, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';



export const  AuthContext = createContext()

const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null)
    const [loading, setLoading] = useState(true)

    console.log(auth.currentUser);

    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const updateUser = (userInfo)=>{
        setLoading(true)
       return updateProfile(auth.currentUser, userInfo)
    }

    const loginUser = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }

    const googleLogin = (provider)=>{
        setLoading(true)
       return signInWithPopup(auth, provider)

    }

    const logoutUser = ()=>{
        return signOut(auth)
    }

    // const  delUser= (uid)=>{
    //     return getAuth().deleteUser(uid)
    // }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged( auth, currentUser =>{
            setUser(currentUser)
            setLoading(false)
        })

        return ()=> unsubscribe()
    },[])

    const authInfo ={user, loading,createUser, updateUser, loginUser, googleLogin, logoutUser,}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;