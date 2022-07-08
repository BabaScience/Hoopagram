import React from 'react';
import { View, StyleSheet, Text } from 'react-native';


function AppTitle ({title='Title', style={}}){
    return(
        <View style={styles.container}>
            <Text style={{
                ...styles.title,
                ...style
            }}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    },
    title: {
        fontSize: 50,
        fontFamily: 'Comfortaa-Bold',
        lineHeight: 60,
        letterSpacing: -5,
        //backgroundColor: 'red'
        //fontWeight: 'bold'
    }
})

export default AppTitle;