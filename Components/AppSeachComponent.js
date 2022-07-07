import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
// import { AntDesign } from '@expo/vector-icons';
import { heightPercentageToDP } from 'react-native-responsive-screen';

function AppSeachComponent ({
    placeholder='Search Courts',
    onPressIn = () => {}
}){
    return(
        <View style={styles.container}>
            <View style={{
                //backgroundColor: 'red',
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 5,
            }}>
                {/*<AntDesign name="search1" size={20} color="grey" />*/}
            </View>
            <TextInput
                style={styles.title}
                placeholder={placeholder}
                onPressIn={onPressIn}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightgrey',
        width: '90%',
        //height: heightPercentageToDP('7%'),
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 5,
        marginBottom: 10,
        paddingTop: 0,
        overflow: 'hidden'
    },
    title:{
        fontSize: 18,
        //backgroundColor: 'yellow',
        paddingTop: heightPercentageToDP('0.5%'),
        paddingBottom: heightPercentageToDP('0.5%'),
        paddingRight: heightPercentageToDP('10%'),
    }
})

export default AppSeachComponent;