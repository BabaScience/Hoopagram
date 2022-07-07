import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { sizes } from '../assets/Themes/Sizes';

function PlayerCard ({data, textStyle={}, iconSize=50}){
    console.log(data)
    return(
        <TouchableOpacity 
            style={styles.container}
            activeOpacity={0.9}
        >
            <View style={{
                justifyContent: 'center',
                paddingLeft: widthPercentageToDP('2%')
                }}
            >
                <Image 
                    source={data.image}
                    style={{
                        width: iconSize,
                        height: iconSize,
                        borderRadius: iconSize/2
                    }}
                />
            </View>
            <View style={{
                justifyContent: 'center',
                paddingLeft: widthPercentageToDP('2%')
                }}
            >
                <Text style={{
                    color: 'black',
                    fontSize: 17,
                    ...textStyle
                }}>{data.name}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: widthPercentageToDP('90%'),
        //backgroundColor: 'green',
        //paddingLeft: widthPercentageToDP('3%'),
        paddingTop: widthPercentageToDP('1%'),
        paddingBottom: widthPercentageToDP('1%'),
        margin: 3
    }
})

export default PlayerCard;