import React from 'react';
import { View, StyleSheet, Text, FlatList, ScrollView, StatusBar, TouchableOpacity } from 'react-native';

// STATIC DATA
import {lives} from '../assets/Data'
import {courts, posts, players} from '../assets/Data'


// COMPONENTS
import CourtCard from '../Components/CourtCard';
import AppSearchComponent from '../Components/AppSeachComponent';



import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import CourtSwingCard from '../Components/CourtSwingCard';
import Header from '../Components/Header';

function HomeScreen ({navigation}){
    return(
        <View 
            style={styles.container}
            nestedScrollEnabled
            stickyHeaderIndices
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.searchb}>
                <Header navigation={navigation} />
            </View>
               
            <View style={{marginTop: 20}} >
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