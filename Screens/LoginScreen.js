import React, { useState } from 'react';
import { View, StyleSheet, StatusBar, Text } from 'react-native';

// LIBRARIES
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import auth from '@react-native-firebase/auth'


// STATIC DATA
import { colors } from '../assets/Themes/Colors';



// CONTEXTS
import AuthContext from '../Contexts/AuthContext'



// COMPONENTS
import AppButton from '../Components/AppButton';
import AppTextInput from '../Components/AppTextInput';
import AppSecuredTextInput from '../Components/AppSecuredTextInput';
import AppMiniTitle from '../Components/AppMiniTitle';
import AppTouchableText from '../Components/AppTouchableText'




function LoginScreen ({navigation}){
    const authContext = React.useContext(AuthContext)

    authContext.setSignedIn(false)


    const emailErrmessage = 'That email address is invalid!'
    const authErrMessage = {
        'auth/user-not-found' : 'email or password incorrect',
        'auth/invalid-email' :  'That email address is invalid!',
        'auth/too-many-requests' : 'Too many attemps, try later.',
        'auth/wrong-password': 'email or password incorrect',
        'empty/email': 'email should not be empty',
        'empty/password': 'password should not be empty'
    }

    const [waiting, setWaiting] = useState(false)

    const [emailErr, setEmailErr] = useState(false)
    const [authErr, setAuthErr] = useState(false)

    const [errorCode, setErrorCode] = useState()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSignIn(){
        console.log('Email: ', email)
        console.log('Password: ', password)

        setAuthErr(false)
        setEmailErr(false)

        if (email.length > 0 && password.length > 0){
            setWaiting(true)
            auth()
                .signInWithEmailAndPassword(email, password)
                .then(() => {
                    console.log('user signed in!')
                    
                    authContext.setSignedIn(true)
                    // authContext.setUser(use)
                })
                .catch(error => {
                    if (error.code === 'auth/invalid-email') {
                        setEmailErr(true)
                        setErrorCode(error.code)
                        setWaiting(false)
                        console.log(emailErrmessage);
                    }
                    
                    if (error.code === 'auth/wrong-password') {
                        setAuthErr(true)
                        setErrorCode(error.code)
                        setWaiting(false)
                        console.log(authErrMessage[error.code]);
                    }
                    
                    
                    if (error.code === 'auth/user-not-found') {
                        setAuthErr(true)
                        setErrorCode(error.code)
                        setWaiting(false)
                        console.log(authErrMessage[error.code]);
                    }
                    
                    if (error.code === 'auth/too-many-requests') {
                        setAuthErr(true)
                        setErrorCode(error.code)
                        setWaiting(false)
                        console.log(authErrMessage[error.code])
                    }

                    setWaiting(false)
                    
                    
                    // console.error(error);
                  });
    
            
        }
        else if (email.length === 0){
            setAuthErr(true)
            setErrorCode('empty/email')
            console.log(authErrMessage['empty/email'])

        }
        else if (password.length === 0){
            setAuthErr(true)
            setErrorCode('empty/password')
            console.log(authErrMessage['empty/password'])

        }

    }

    return(
        <View style={styles.container}>
            <View style={{
                width: widthPercentageToDP('100%'),
                alignItems: 'center',
            }}>
                <View style={styles.title}>
                    <AppMiniTitle 
                        title='Sign in to Hoopagram'
                        style={{
                            color: 'black',
                        }}
                    />
                </View>
                <View style={styles.entries}>
                    <AppTextInput
                        title='Email'
                        placeholder='email@hoopagram.com'
                        onChangeText={setEmail}
                        value={email}
                        showErrMessage={emailErr}
                        errMessage={authErrMessage[errorCode]}
                    />
                    <AppSecuredTextInput 
                        title='Password'
                        placeholder='*********'
                        value={password}
                        onChangeText={setPassword}
                    />
                    {authErr && (
                        <Text style={styles.errorMessage}>
                            {authErrMessage[errorCode]}
                        </Text>
                    )}
                </View>
                <View style={styles.TouchableText}>
                    <AppTouchableText 
                        title='Forgot password'
                        onPress={()=>console.log('pressed')}
                    />
                    <AppTouchableText 
                        title='Create an account'
                        onPress={() => navigation.navigate('RegistrationScreenOne')}
                    />
                </View>
            </View>
            <View style={styles.button}>
                    <AppButton 
                        title='Sign in'
                        containerStyle={{
                            backgroundColor: colors.purple_color
                        }}
                        textStyle={{
                            color:'white'
                        }}
                        onPress={handleSignIn}
                        waiting={waiting}
                    />
                    
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    entries: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
        width: '90%',
        paddingTop: heightPercentageToDP('4%'),
        paddingBottom: heightPercentageToDP('5%'),
        paddingLeft: widthPercentageToDP('7%'),
        //backgroundColor: 'yellow'
    },
    TouchableText: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-between',
        marginTop: 10
        //backgroundColor: 'yellow'
    },
    button: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        //position: 'absolute',
        marginBottom: 10
    },
    errorMessage: {
        color: 'red',

    }
})

export default LoginScreen;