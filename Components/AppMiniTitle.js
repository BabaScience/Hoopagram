import React from 'react';
import { View, StyleSheet, Text } from 'react-native';


function AppMiniTitle ({title='Title', style={}}){
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
        fontSize: 20,
        lineHeight: 40,
        //letterSpacing: 0,
        //backgroundColor: 'red'
        //fontWeight: 'bold'
    }
})

export default AppMiniTitle;