import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';


function AppButton ({
    title='Get Started', 
    containerStyle={}, 
    textStyle={},
    onPress={onPress},
    waiting=false
}){
    return(
        <TouchableOpacity 
            style={{
            ...styles.container, 
            ...containerStyle,
            }}
            activeOpacity={waiting ? 1 : 0.9}
            touchSoundDisabled={waiting}
            onPress={waiting ? () => {} : onPress}
        >
            {!waiting && (
                <Text style={{
                    ...styles.text, 
                    ...textStyle,
                }}
                >
                        {title}
                </Text>
            )}
            {waiting && (
                <ActivityIndicator 
                    size="small" 
                    color="#fff"
                />
            )}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: widthPercentageToDP('90%'),
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