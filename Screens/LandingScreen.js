import React from 'react';
import { View, StyleSheet, StatusBar, Text, SafeAreaView } from 'react-native';
// import { StatusBar } from 'expo-status-bar';

import AppButton from '../Components/AppButton'
import AppBackgroundlessButton from '../Components/AppBackgroundlessButton'
//import AppTitle from '../Components/AppTitle'

import { colors } from '../assets/Themes/Colors';


function LandingScreen ({navigation}){
    return(
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" backgroundColor={colors.purple_color} />
            <View>
                {/*<AppTitle 
                    style={{color: 'white'}}
                    title='hoopagram'
                />*/}
                <Text style={{color: 'white'}}>Hoopagram</Text>
            </View>
            <View style={styles.buttons}>
                <AppButton
                    title='Get Started'
                    style={{backgroundColor: 'white'}} 
                    textColor={colors.purple_color}
                    onPress={()=>navigation.navigate('RegistrationScreenOne')}
                />
                <AppBackgroundlessButton
                    title='Sign in' 
                    style={{backgroundColor: colors.purple_color}} 
                    textColor='white'
                    onPress={()=>navigation.navigate('LoginScreen')}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.purple_color,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttons: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 10
    }
})

export default LandingScreen;