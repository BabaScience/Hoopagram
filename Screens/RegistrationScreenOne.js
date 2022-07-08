import React, { useState, useContext } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';



// LIBRARIES
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
// import DatePicker from 'react-native-datepicker'
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'

// STATIC DATA 
import { colors } from '../assets/Themes/Colors';



// COMPONENTS 
import AppMiniTitle from '../Components/AppMiniTitle'
import AppTextInput from '../Components/AppTextInput'
import AppButton from '../Components/AppButton'
import AppSecuredTextInput from '../Components/AppSecuredTextInput'
// import SexCheckerComponent from '../Components/SexCheckerComponent'



// CONTEXTS
import AuthContext from '../Contexts/AuthContext';





function AppRegistrationScreenOne ({navigation}){
    const authContext = useContext(AuthContext)
    

    const [date, setDate] = useState('')
    const [waiting, setWaiting] = useState(false)

    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword]  = useState('')

    const [firstnameErr, setFirstNameErr] = useState(false)
    const [lastnameErr, setLastNameErr] = useState(false)
    const [emailErr, setEmailErr] = useState(false)
    const [passwordErr, setPasswordErr] = useState(false)

    const [errorCode, setErrorCode] = useState('')

    const errorMessage = {
        'short/firstname': 'first name too short',
        'short/lastname': 'first name too short',
        'error/email': 'email is not valid',
        'error/password': 'password too short',
        'auth/email-already-in-use': 'this email is already in use'
    }

    async function handleSaveAndGotNext(){
        setLastNameErr(false)
        setFirstNameErr(false)
        setEmailErr(false)
        setPasswordErr(false)

        if (firstname.length < 3) {
            setErrorCode('short/firstname')
            setFirstNameErr(true)
            return
        } 
        if (lastname.length < 2 ) {
            setErrorCode('short/lastname')
            setLastNameErr(true)
            return 
        }
        if (!email.includes('@') || !email.includes('.')) {
            setErrorCode('error/email')
            setEmailErr(true) 
            return
        }

        if (password.length<5 ) {
            setErrorCode('error/password')
            setPasswordErr(true)
            return
        }

        setWaiting(true)
        // console.log('frist name: ', firstname)
        // console.log('last name: ', lastname)
        // console.log('email: ', email)

        authContext.setSignedIn(false)
        authContext.setFirstName(firstname)
        authContext.setLastName(lastname)
        authContext.setEmail(email)
        authContext.setPassword(password)



        // create new user wwith email and password
        try {
            const user = await auth().createUserWithEmailAndPassword(email, password)


            // create db for user collection
            if(user){
                const doc = await firestore()
                    .collection('Users')
                    .add({
                        'first name': firstname,
                        'last name': lastname,
                        'email': email,
                        'username': '',
                        'courts': [],
                        'interests': []
                    })
                    if (doc){
                        authContext.setCurrentDocID(doc.id)
                        setWaiting(false)
                        console.log('done!!!')
                        navigation.navigate('RegistrationScreenTwo')
                    }
                }
        }catch(error){
            if(error.code  === 'auth/email-already-in-use'){
                setErrorCode(error.code)
                setEmailErr(true)
                setWaiting(false)
                console.log('this email is already in use')
                
            }
            console.error(error)
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
                        title='Create an Account'
                        style={{
                            //fontSize: 20,
                            color: 'black',
                        }}
                    />
                </View>
                <View style={styles.entries}>
                    <AppTextInput
                        title='First Name'
                        placeholder="Barack"
                        value={firstname}
                        onChangeText={setFirstname}
                        errMessage={errorMessage[errorCode]}
                        showErrMessage={firstnameErr}
                    />
                    <AppTextInput
                        title='Last Name'
                        placeholder="Obama"
                        value={lastname}
                        onChangeText={setLastname}
                        errMessage={errorMessage[errorCode]}
                        showErrMessage={lastnameErr}
                    />
                    <AppTextInput
                        title='Email'
                        placeholder="user@gmail.com"
                        value={email}
                        onChangeText={setEmail}
                        errMessage={errorMessage[errorCode]}
                        showErrMessage={emailErr}
                    />
                    <AppSecuredTextInput 
                        title='Password'
                        placeholder='password'
                        value={password}
                        onChangeText={setPassword}
                        errMessage={errorMessage[errorCode]}
                        showErrMessage={passwordErr}
                    />
                    {/*
                    <Text style={styles.subTitle}>
                        Sex
                    </Text>
                    <SexCheckerComponent />
                    */}
                </View>
                {/*
                <Text style={styles.subTitle}>
                    Birth Date
                </Text>
                {/*<DatePicker
                    style={{
                        width: widthPercentageToDP('80%'),
                        paddingTop: heightPercentageToDP('1%')
                    }}
                    date={date}
                    placeholder="Select your Birth Date"
                    format='DD-MM-YYYY'
                    confirmBtnTestID='Select'
                    cancelBtnTestID='Cancel'
                    onDateChange={(d)=>setDate(d)}
                />*/}
            </View>


            <View style={styles.button}>
                <AppButton
                    title='Next'
                    containerStyle={{
                            backgroundColor: colors.purple_color
                    }}
                    textStyle={{
                        color: 'white'
                    }}
                    onPress={handleSaveAndGotNext}
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
    title:{
        width: '90%',
        // backgroundColor: 'yellow',
        paddingTop: heightPercentageToDP('4%'),
        paddingBottom: heightPercentageToDP('5%'),
        paddingLeft: widthPercentageToDP('2.5%'),
    },
    entries: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 7,
    },
    button: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        //position: 'absolute',
        bottom: heightPercentageToDP('2%'),
        // marginTop: heightPercentageToDP('23%')
    },
    subTitle:{
        fontSize: 15,
        alignSelf: 'flex-start',
        paddingLeft: widthPercentageToDP('6%'),
        color: 'black',
    }
})

export default AppRegistrationScreenOne;