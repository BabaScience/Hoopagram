import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';



function AppTouchableText ({title='Text', color='blue', onPress}){
    return(
        <TouchableOpacity 
            style={styles.container}
            activeOpacity={0.9}
            onPress={onPress}
        >
            <Text 
                style={{
                    ...styles.text,
                    color
                }}
            >{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {

    },
    text: {
    }
})

export default AppTouchableText;