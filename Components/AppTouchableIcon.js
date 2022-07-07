import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

// import { FontAwesome } from '@expo/vector-icons';

function AppTouchableIcon ({children, style}){
    return(
        <TouchableOpacity 
            style={{
                ...styles.container,
                ...style
            }}
            activeOpacity={0.9}
        >
            {children}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
       
    }
})

export default AppTouchableIcon;