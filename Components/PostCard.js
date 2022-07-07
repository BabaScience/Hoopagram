import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
// import { Feather } from '@expo/vector-icons';
// import { AntDesign } from '@expo/vector-icons';
// import FlashComponent from './FlashComponent';

const img = require('../assets/Images/court1.jpg')
function PostCard ({data={}, type=0, style={}, onPress}){
    return(
            <TouchableOpacity 
                style={{
                    ...styles.container,
                    
                }}
                activeOpacity={0.9}
                onPress={onPress}
            >
                <Image 
                    source={data.post}
                    style={{
                        width: widthPercentageToDP('33%'),
                        height: heightPercentageToDP('30%'),
                        ...style
                    }}
                />
                {/*
                <View style={styles.views}>
                <AntDesign name="hearto" size={13} color="white" />
                    <Text style={{
                        fontSize: 13,
                        color: 'white',
                        paddingLeft: 2
                    }}>{data.views}</Text>
                </View>
                */}
            </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: widthPercentageToDP('33%'),
        height: heightPercentageToDP('30%'),
        overflow: 'hidden',
        margin: widthPercentageToDP('0.2%'),
        //marginBottom: widthPercentageToDP('1%')
    },
    views: {
        position: 'absolute',
        bottom: 5, 
        left: 5,
        flexDirection: 'row',
        alignItems: 'center',
        //backgroundColor: 'green'
    }
})

export default PostCard;