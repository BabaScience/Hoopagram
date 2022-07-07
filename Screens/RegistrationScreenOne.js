import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import AppMiniTitle from '../Components/AppMiniTitle'
import AppTextInput from '../Components/AppTextInput'

// import SexCheckerComponent from '../Components/SexCheckerComponent'
import AppButton from '../Components/AppButton'
import { colors } from '../assets/Themes/Colors';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
// import DatePicker from 'react-native-datepicker'

function AppRegistrationScreenOne ({navigation}){
    const [date, setDate] = useState('')
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
                    />
                    <AppTextInput
                        title='Last Name'
                        placeholder="Obama"
                    />
                    <AppTextInput
                        title='Email'
                        placeholder="user@gmail.com"
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
                    onPress={()=>navigation.navigate('RegistrationScreenTwo')}
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
        bottom: 10,
        marginTop: heightPercentageToDP('23%')
    },
    subTitle:{
        fontSize: 15,
        alignSelf: 'flex-start',
        paddingLeft: widthPercentageToDP('6%'),
        color: 'black',
    }
})

export default AppRegistrationScreenOne;