import React from 'react';
import { View, StyleSheet, Text, FlatList, ScrollView, StatusBar } from 'react-native';

// STATIC DATA
import {lives} from '../assets/Data'
import {courts, posts, players} from '../assets/Data'


// COMPONENTS
import CourtCard from '../Components/CourtCard';
import SearchBar from '../Components/SearchBar';




import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import CourtSwingCard from '../Components/CourtSwingCard';

function HomeScreen (props){
    return(
        <ScrollView 
            style={styles.container}
            nestedScrollEnabled
            stickyHeaderIndices
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.searchb}>
                <SearchBar />
            </View>
            <View style={{marginTop: 20}} >
                <Text style={styles.title}>
                    Courts
                </Text>
                <FlatList
                    data={courts}
                    renderItem={({item})=>(
                        <CourtCard data={item}/>
                    )}
                    horizontal={true}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                />
            </View>   
            <View style={{marginTop: 20}} >
                <Text style={styles.title}>
                    Today
                </Text>
                <FlatList
                    data={courts}
                    renderItem={({item})=>(
                        <CourtSwingCard data={item}/>
                    )}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                />
            </View>   
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 10
    },
    title:{
        color: 'black',
        fontSize: 20,
        fontWeight: '700',
        paddingLeft: 5,
        marginBottom: heightPercentageToDP('3%')
    }
})

export default HomeScreen;