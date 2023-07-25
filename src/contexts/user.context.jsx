import { createContext, useState, useEffect } from 'react';

import { 
    onAuthStateChangedListener,
    createUserDocumentFromAuth
 } from '../utils/firebase/firebase.utils'

export const UserContext = createContext({
    email: 'demo@fmp.com',
    displayName: 'Demo Version'
})

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({
        email: 'demo@fmp.com',
        displayName: 'Demo Version'
    })
    const value = { currentUser, setCurrentUser }

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
//