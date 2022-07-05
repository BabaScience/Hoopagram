import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
// import { Entypo } from '@expo/vector-icons';
import { colors } from '../assets/Themes/Colors';


function InterestComponent ({data}){
    const [check, setCheck] = React.useState(false)
    return(
        <TouchableOpacity 
            onPress={()=>setCheck(!check)}
            activeOpacity={0.8}
            style={{
                ...styles.container,
                backgroundColor: check ? colors.purple_color : 'white',
                borderColor: check ? 'white': 'black'
            }}
        >
            <Image 
                source={data.icon}
                style={{
                    width: widthPercentageToDP('10'),
                    height: widthPercentageToDP('10%')
                }}
            />
            <Text style={{
                    ...styles.title,
                    color: check ? 'white' : 'grey'
                }}
            >
                {data.name}
            </Text>
            <View style={{
                position: 'absolute',
                top: 2,
                right: 2
            }}>
                {/*
                    { check && (<Entypo name="check" size={24} color= {check ? 'white': 'black'} />)}
                    {!check && (<Entypo name="plus" size={24} color= {check ? 'white': 'black'} />)}
                */}    
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: widthPercentageToDP('30%'),
        height: widthPercentageToDP('30%'),
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1,
        margin: widthPercentageToDP('1.5%'),
    },
    title:{
        position: 'absolute',
        bottom: 3,
        alignSelf: 'center',
        color: 'grey',
        fontWeight: 'bold'
    }
})

export default InterestComponent;