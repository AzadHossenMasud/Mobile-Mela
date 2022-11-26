import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';



export const  AuthContext = createContext()

const auth = getAuth(app);


const AuthProvider = ({children}) => {


    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const updateUser = (userInfo)=>{
       return updateProfile(auth.currentUser, userInfo)
    }

    const authInfo ={createUser, updateUser}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;