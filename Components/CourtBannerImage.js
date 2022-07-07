import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import AppBackgroundlessButton from './AppBackgroundlessButton'
import { colors } from '../assets/Themes/Colors'

const img = require('../assets/Images/court3.jpg')
function CourtBannerImage ({image=img}){
    return(
        <View style={styles.container}>
            <Image 
                source={image}
                style={{
                    ...styles.Image
                }}
            />
            <View style={styles.text}>
                {/* <AppBackgroundlessButton 
                    title='follow'
                    style={{
                        padding: 10,
                        justifyContent: 'center',
                        backgroundColor: colors.purple_color
                    }}
                    textColor='white'
                /> */}
                <Text
                    style={{
                        color: 'white',
                        fontSize: 17,
                        fontFamily: 'Roboto'
                    }}
                >California BeachBall, Avenue Paris 12</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: widthPercentageToDP('100%')
    },
    Image: {
        width: widthPercentageToDP('100%'),
        height: heightPercentageToDP('15%')
    },
    text: {
        //backgroundColor: 'lightblue',
        position: 'absolute',
        bottom: 3,
        paddingLeft: 10
        //alignSelf: 'center',
        //paddingLeft: 10,
        //paddingRight: 10,

    }
})

export default CourtBannerImage;