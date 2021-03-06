import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';


function AppBackgroundlessButton ({
    title='Get Started', 
    style={}, 
    textColor = 'blue',
    onPress=onPress
}){
    return(
        <TouchableOpacity 
            style={{
            ...styles.container, 
            ...style,
            }}
            activeOpacity={0.9}
            onPress={onPress}
        >
            <Text style={{
                ...styles.text, 
                color: textColor,
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
        paddingLeft: 15,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        backgroundColor: 'yellow',
    },
    text: {
        fontSize: 18,
    }
})

export default AppBackgroundlessButton;