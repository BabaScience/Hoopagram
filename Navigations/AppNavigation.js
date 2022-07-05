import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import AuthNavigation  from './AuthNavigation'


import { AuthProvider } from '../Contexts/AuthContext'
import MainNavigation from './MainNavigation';



function AppNavigation (props){
    const [signedIn, setSignedIn] = useState(false)
    return(
        <AuthProvider value={{
            signedIn,
            setSignedIn
        }}>
            {!signedIn ? <AuthNavigation/> : <MainNavigation/>}
        </AuthProvider>
    );
}

const styles = StyleSheet.create({
    container: {

    }
})

export default AppNavigation;