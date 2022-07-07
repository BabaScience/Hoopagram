import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

// import { Octicons } from '@expo/vector-icons';


function AppMoreOption (props){
    return(
        <TouchableOpacity 
            style={styles.container}
            activeOpacity={0.9}
        >
            <Text>text</Text>
            {/*<Octicons name="three-bars" size={30} color="black" />*/}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {

    }
})

export default AppMoreOption;