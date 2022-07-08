import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';



// FIREBASE
import auth from '@react-native-firebase/auth'


// CONTEXTS
import { AuthProvider } from '../Contexts/AuthContext'


// NAVIGATIONS 
import MainNavigation from './MainNavigation';
import AuthNavigation  from './AuthNavigation'








function AppNavigation (props){
    const [signedIn, setSignedIn] = useState(true)
    const [user, setUser] = useState()
    const [initializing, setInitializing] = useState(true)
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userName, setUserName] = useState('')
    const [currentDocID, setCurrentDocID] = useState('')
    

    function onAuthStateChange(user){
        setUser(user)
        if(initializing) setInitializing(false)
        // if (user) setSignedIn(true)
        // console.log(initializing)
        // console.log(user)
    }
    
    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChange)
        return subscriber  // unsubscribe on unmount
    }, [])

    if(initializing) return null

    return(
        <AuthProvider value={{
            signedIn,
            setSignedIn,
            user,
            email,
            setEmail,
            password,
            setPassword,
            firstName,
            setFirstName,
            lastName,
            setLastName,
            userName,
            setUserName,
            currentDocID,
            setCurrentDocID
        }}>
            {user && signedIn ? <MainNavigation/> : <AuthNavigation/> }
        </AuthProvider>
    );
}

const styles = StyleSheet.create({
    container: {

    }
})

export default AppNavigation;