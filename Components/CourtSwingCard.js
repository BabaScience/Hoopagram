import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'


import {sizes} from '../assets/Themes/Sizes'
import AppSmallButton from './AppSmallButton'


const CourtSwingCard = ({data}) => {
  return (
    <View style={styles.container}>
        <Image 
            source={data.photo}
            style={{
                ...styles.image,
            }}
        />
        
        <View style={styles.description}>
            <View style={styles.info}>
                <Text style={styles.courtName}>{data.name}</Text>
                <Text style={styles.numPeople}>9 people</Text>
            </View>
            <AppSmallButton
                title='join'
            />
        </View>
    </View>
  )
}

export default CourtSwingCard

const styles = StyleSheet.create({
    container: {
        marginBottom: 30,
    },
    image: {
        width: widthPercentageToDP('100%'),
        height: sizes.court_size,

        borderWidth: .1,
        borderColor: 'black'
    },

    description: {
        marginBottom: 10,
        flexDirection: 'row',
        paddingTop: 5,
        //backgroundColor: 'dodgerblue',
        justifyContent: 'space-between',
        paddingHorizontal: widthPercentageToDP('3%'),
        marginTop: heightPercentageToDP('2%'),

    },

    info: {
        width: widthPercentageToDP('75%'),
        //backgroundColor: 'red'
    },
    courtName: {
        color: 'black',
        marginBottom: 5,
        fontWeight: '500',
        fontSize: 18

    },
    numPeople: {
        
    }
})