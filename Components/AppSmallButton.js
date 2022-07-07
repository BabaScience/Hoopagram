import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

import { colors } from '../assets/Themes/Colors'

function AppButton ({
    title='Get Started', 
    containerStyle={}, 
    textStyle={},
    onPress={onPress},
}){
    return(
        <TouchableOpacity 
            style={{
            ...styles.container, 
            ...containerStyle,
            // backgroundColor: colors.purple_color
            }}
            activeOpacity={0.9}
            onPress={onPress}
        >
            <Text style={{
                ...styles.text, 
                ...textStyle,
            }}
            >{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 0,
        paddingHorizontal: widthPercentageToDP('5%'),
        borderRadius: 5,
        height: heightPercentageToDP('4%'),
        borderWidth: .5,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        // backgroundColor: 'yellow',
    },
    text: {
        fontSize: 15,
    }
})

export default AppButton;