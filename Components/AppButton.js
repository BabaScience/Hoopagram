import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';


function AppButton ({
    title='Get Started', 
    containerStyle={}, 
    textStyle={},
    onPress={onPress}
}){
    return(
        <TouchableOpacity 
            style={{
            ...styles.container, 
            ...containerStyle,
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
        width: '90%',
        padding: 14,
        borderRadius: 5,
        borderWidth: .5,
        paddingLeft: 15,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        //backgroundColor: 'yellow',
    },
    text: {
        fontSize: 17,
    }
})

export default AppButton;