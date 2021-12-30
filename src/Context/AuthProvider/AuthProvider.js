import React, { createContext } from 'react';
import useFirebase from '../../Hooks/UseFirebase/UseFirebase';


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const AllContext = useFirebase();
    return (
        <AuthContext.Provider value ={AllContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;