import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AppMiniTitle from './AppMiniTitle';
import AppTouchableIcon from '../Components/AppTouchableIcon'
import {sizes} from '../assets/Themes/Sizes'
// import { Entypo } from '@expo/vector-icons';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { colors } from '../assets/Themes/Colors';

function InfoCard ({title='Tile', color=colors.purple_color, sub_title='SubTitle'}){
    return(
        <View style={styles.container}>
            <View style={{
                paddingLeft: 15,
                borderRadius: 10
            }}>
                <AppMiniTitle
                    title={title}
                    style={{
                        color: 'black',
                        //fontWeight: 'bold',
                        letterSpacing: -1,
                        fontFamily: 'Roboto'
                    }}
                    />
            </View>
            <View style={styles.subTitle}>
                {/*<Entypo 
                    name="dot-single" 
                    size={50} 
                    color={color} 
                />*/}
                <Text style={{
                    fontSize: 15,
                    fontFamily: 'Roboto'
                }}>12 people</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5f5f0',
        width: widthPercentageToDP('95%'),
        height: heightPercentageToDP('13%'),
        borderRadius: 10,
        justifyContent: 'center',
        marginBottom: heightPercentageToDP('1%'),
        marginTop: heightPercentageToDP('1%'),
        paddingTop: 15,
        paddingBottom: 15,
    },
    subTitle: {
        flexDirection: 'row', 
        alignItems: 'center',
        //backgroundColor: 'yellow',
        paddingLeft: 0
    }
})

export default InfoCard;