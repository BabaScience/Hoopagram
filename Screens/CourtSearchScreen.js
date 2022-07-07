import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import AppMoreOption from '../Components/AppMoreOption';
import SearchBar from '../Components/SearchBar';
import CourtContainer from '../Components/CourtCard';
import AppMiniTitle from '../Components/AppMiniTitle'
// import AppTouchableIcon from '../Components/AppTouchableIcon'
import { courts } from '../assets/Data'

// import { StatusBar } from 'expo-status-bar';
// import { MaterialIcons } from '@expo/vector-icons';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { sizes } from '../assets/Themes/Sizes';

function CourtSearchScreen ({ navigation }){
    console.log('COURTS ------------>', courts)
    const [refresh, setRefresh] = React.useState(false)
    const handleRefresh = () => {
        //setRefresh(True)
        console.log('refreshing...')
    }
    return(
        <View style={styles.container}>
            {/*<StatusBar style='light'  />*/}
            {/*<View style={{
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                //backgroundColor: 'green',
                //position: 'absolute',
                //top: 10,
            }}>
                <View style={{
                    flexDirection: 'row',
                    //backgroundColor: 'red',
                    width: '90%',
                    justifyContent: 'space-between',
                }}>
                    <AppMiniTitle title='Courts' style={{color:'black', fontSize: sizes.mini_title_size, lineHeight: sizes.mini_title_lineHeight, fontWeight: 'bold'}}/>
                    <View style={{
                        flexDirection: 'row',
                        width: widthPercentageToDP('20%'),
                        justifyContent: 'space-between',
                        //backgroundColor: 'yellow',
                        alignItems: 'center'
                    }}>
                        {/*<AppTouchableIcon>
                            <MaterialIcons name="favorite-border" size={30} color="black" />
                        </AppTouchableIcon>*
                        {/*<AppMoreOption />
                    </View>
                </View>
                <SearchBar />
            </View>
            */}
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                width: '95%',
                paddingTop: heightPercentageToDP('3%')
            }}>
               <FlatList 
                    numColumns={2}
                    data={courts}
                    ListHeaderComponent={<SearchBar />}
                    ListHeaderComponentStyle={{
                        paddingTop: 0,
                        paddingBottom: heightPercentageToDP('3%'),
                    }}
                    renderItem={({item}) => (
                        <CourtContainer 
                            data={item}
                            onPress={() => navigation.navigate('CourtScreen')}
                        />
                    )}
                    refreshing={refresh}
                    onRefresh={handleRefresh}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
               />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 10,
        backgroundColor: 'white'
        //justifyContent: 'center'
    },
})

export default CourtSearchScreen;