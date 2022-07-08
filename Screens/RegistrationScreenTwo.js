import React, { useState, useContext } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';



// LIBRARIES 
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import firestore from '@react-native-firebase/firestore'


// STATIC DATA
import { colors } from '../assets/Themes/Colors';




// COMPONENTS
import AppChangeablePhoto from '../Components/AppChangeablePhoto';
import AppMiniTitle from '../Components/AppMiniTitle'
import AppTextInput from '../Components/AppTextInput';
import AppSecuredTextInput from '../Components/AppSecuredTextInput';
import AppButton from '../Components/AppButton';





// CONTEXTS
import AuthContext from '../Contexts/AuthContext';












function RegistrationScreenTwo ({navigation}){
    const authContext = useContext(AuthContext)

    const [username, setUsername]  = useState('')
    
    const [waiting, setWaiting] = useState(false)



    async function SaveAndMoveOn() {
        // console.log('Username', username)
        // console.log('Password', password)
        setWaiting(true)
        authContext.setUserName(username)
        

        // update username to bd

        try {
            console.log('doc ->' , authContext.currentDocID)
            const updatedDoc = await firestore()
                                        .collection('Users')
                                        .doc(authContext.currentDocID)
                                        .update({
                                            'username': username
                                        })
                                        .then(() => {
                                            setWaiting(false)
                                            authContext.setSignedIn(true)
                                        })
                                        .catch(err => {
                                            throw new err
                                        })
            
        }catch(error){
            console.error(error)
        }





        
        // navigation.navigate('RegistrationScreenFinal')
    }

    return(
        <View style={styles.container}>
            <View style={{
                width: widthPercentageToDP('100%'),
                alignItems: 'center',
            }}>

                <View style={styles.title}>
                    <AppMiniTitle 
                            title='Complete Registration'
                            style={{
                                color: 'black'
                            }}
                        />
                </View> 
                <View  style={styles.image}>
                    <AppChangeablePhoto />
                </View>
                <View style={styles.entries}>
                    <AppTextInput 
                        title='Username'
                        placeholder='@hoopagram'
                        value={username}
                        onChangeText={setUsername}
                    />
                    
                </View>
            </View>
            <View style={styles.button}>
                <AppButton 
                    title='Register now'
                    containerStyle={{
                        backgroundColor: colors.purple_color
                    }}
                    textStyle = {{
                        color: 'white'
                    }}
                    onPress={SaveAndMoveOn}
                    waiting={waiting}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        width: '100%',
        justifyContent: 'space-between'
    },
    image: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: 'green',
        paddingTop: 10,
        paddingBottom: 10,
        marginBottom: 15
    },
    title: {
        width: '90%',
        paddingTop: heightPercentageToDP('4%'),
        paddingBottom: heightPercentageToDP('5%'),
        paddingLeft: widthPercentageToDP('2.5%'),
        // backgroundColor: 'yellow'
    },
    entries:  {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        //position: 'absolute',
        //bottom: 10,
        // marginTop: heightPercentageToDP('29%')
        marginBottom: 10,
    }
})

export default RegistrationScreenTwo;