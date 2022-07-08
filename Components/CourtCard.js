import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, ToastAndroid } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

import {sizes} from '../assets/Themes/Sizes'


//const img = require('../assets/Images/court1.jpg')
function CourtCard ({data, onPress}){
    return(
        <TouchableOpacity 
            activeOpacity={0.9}
            style={styles.container}
            onPress={onPress}
        
        >
            <Image 
                source={{uri: data.photo}}
                style={{
                    ...styles.image,
                }}
            />
            <View style={{
                height: heightPercentageToDP('3%'),
                //backgroundColor: 'yellow',
                paddingLeft: 7
            }}>
                <Text style={styles.title}>
                    {data.name}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: sizes.court_size,
        height: sizes.court_size + heightPercentageToDP('3%'),
        //backgroundColor: 'lightblue',
        borderRadius: 7,
        //overflow: 'hidden',
        marginBottom: heightPercentageToDP('1%'),
        margin: widthPercentageToDP('1%')
        //justifyContent: 'center'    
    },
    image: {
        width: sizes.court_size,
        height: sizes.court_size,
        borderRadius: 7,
        borderWidth: .1,
        borderColor: 'black'
    },
    title: {
    }
})

export default CourtCard;