import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import AppTextInput from '../Components/AppTextInput';
import AppSecuredTextInput from '../Components/AppSecuredTextInput';
import AppMiniTitle from '../Components/AppMiniTitle';
import AppTouchableText from '../Components/AppTouchableText'
import AppButton from '../Components/AppButton';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { colors } from '../assets/Themes/Colors';
import AuthContext from '../Contexts/AuthContext'

function LoginScreen ({navigation}){
    const auth = React.useContext(AuthContext)
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
                    />
                    <AppSecuredTextInput 
                        title='Password'
                        placeholder='*********'
                    />
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
                        style={{
                            backgroundColor: colors.purple_color
                        }}
                        textColor='white'
                        onPress={()=>{auth.setSignedIn(true)}}
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
    }
})

export default LoginScreen;