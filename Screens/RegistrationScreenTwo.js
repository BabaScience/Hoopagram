import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import AppChangeablePhoto from '../Components/AppChangeablePhoto';
import AppMiniTitle from '../Components/AppMiniTitle'
import AppTextInput from '../Components/AppTextInput';
import AppButton from '../Components/AppButton';

import { colors } from '../assets/Themes/Colors';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
function RegistrationScreenTwo ({navigation}){
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
                        />
                    <AppTextInput 
                        title='Password'
                        placeholder='password'
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
                    onPress={()=>navigation.navigate('RegistrationScreenFinal')}
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