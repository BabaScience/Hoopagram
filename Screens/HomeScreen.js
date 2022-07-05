import React from 'react';
import { View, StyleSheet, Text, FlatList, ScrollView, StatusBar } from 'react-native';

import {lives} from '../assets/Data'

import {courts, posts, players} from '../assets/Data'



import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
function HomeScreen (props){
    return(
        <ScrollView 
            style={styles.container}
            nestedScrollEnabled
            stickyHeaderIndices
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
        >
            <Text>Homw Page</Text>         
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    title:{
        color: 'black',
        fontSize: 20,
        fontWeight: '700',
        paddingLeft: 5,
    }
})

export default HomeScreen;