import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, FlatList, ScrollView, StatusBar, TouchableOpacity } from 'react-native';

// LIBRARIES
import firestore from '@react-native-firebase/firestore'


// STATIC DATA
import {lives} from '../assets/Data'
import { posts, players} from '../assets/Data'


// COMPONENTS
import CourtCard from '../Components/CourtCard';
import AppSearchComponent from '../Components/AppSeachComponent';



import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import CourtSwingCard from '../Components/CourtSwingCard';
import Header from '../Components/Header';

function HomeScreen ({navigation}){
    const [courts, setCourts] = useState([])

    useEffect(async() => {
        firestore()
            .collection('Courts')
            .get()
            .then(querySnapShot => {
                // setCourts(availableCourts)
                const availableCourts = []
                querySnapShot.forEach(doc => {
                    availableCourts.push({
                        'id': doc.id,
                        'name': doc._data.name,
                        'photo': doc._data.photo
                    })
                    console.log(doc._data)
                })
                setCourts(availableCourts)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])

    return(
        <View 
            style={styles.container}
        >
            <View style={styles.header}>
                <Header navigation={navigation} />
            </View>
               
            <View style={{marginTop: heightPercentageToDP('1%')}} >
                <FlatList
                    data={courts}
                    renderItem={({item})=>(
                        <CourtSwingCard 
                            data={item}
                            onPress={() => navigation.navigate('CourtScreen')}
                        />
                    )}
                    ListHeaderComponent={<HorizontalFlatlist navigation={navigation} />}
                    ListHeaderComponentStyle={{
                        // backgroundColor: 'red',
                        paddingTop: 0,
                        marginTop: 0,
                    }}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                />
            </View>   
        </View>
    );
}



function HorizontalFlatlist({ navigation }) {
    const [courts, setCourts] = useState([])

    useEffect(async() => {
        firestore()
            .collection('Courts')
            .get()
            .then(querySnapShot => {
                // setCourts(availableCourts)
                const availableCourts = []
                querySnapShot.forEach(doc => {
                    availableCourts.push({
                        'id': doc.id,
                        'name': doc._data.name,
                        'photo': doc._data.photo
                    })
                    console.log(doc._data)
                })
                setCourts(availableCourts)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])
    return (
        <>
            <View style={{}} >
                    <Text style={styles.title}>
                        Courts
                    </Text>
                    <FlatList
                        data={courts}
                        renderItem={({item})=>(
                            <CourtCard 
                                data={item}
                                onPress={()=>navigation.navigate('CourtScreen')}
                            />
                        )}
                        
                        horizontal={true}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                    />
            </View>
            <Text style={styles.title}>
                        Today
            </Text>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: heightPercentageToDP('1%')
    },
    title:{
        color: 'black',
        fontSize: 20,
        fontWeight: '700',
        paddingLeft: 5,
        marginBottom: heightPercentageToDP('3%')
    },
    header:  {
        margin: 0,
        padding: 0,
        // backgroundColor: 'red'
    }
})

export default HomeScreen;