import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import AppButton from '../Components/AppButton';
import AppSeachComponent from '../Components/AppSeachComponent';
import {players, teams } from '../assets/Data'
import PlayerCard from '../Components/PlayerCard';
import TeamCard from '../Components/TeamCard';

function CourtRankingScreen (props){
    const [showPlayers, setShowPlayers] = React.useState(true)
    
    
    const handlePlayerPressButton =()=>{
        setShowPlayers (true)
        // console.log(showPlayers)
    }
    const handleTeamPressButton =()=>{
        setShowPlayers(false)
        // console.log(showPlayers)
    }
    
    return(
        <View style={{
            flex: 1, 
            backgroundColor: 'white', 
            ...styles.container,
            paddingTop: heightPercentageToDP('2%')
        }}
        >
            {/*<View style={{
                width: widthPercentageToDP('100%'),
                alignItems: 'center',
                marginTop: heightPercentageToDP('1%')
            }}>
                <AppSeachComponent placeholder={showPlayers ? 'Look for a player...' : 'Look for a team...'}/>
            </View>*/}
            <View style={{
                flexDirection: 'row',
                width: widthPercentageToDP('100%'),
                justifyContent: 'space-around',
                paddingBottom: heightPercentageToDP('2%')
            }}>
                <AppButton 
                    title={31+' Players'}
                    containerStyle={{
                        ...styles.button,
                        borderWidth: showPlayers ? 1 : .1,
                    }}
                    textStyle={{
                        color: 'black',
                    }}
                    onPress={handlePlayerPressButton}
                    
                />
                <AppButton 
                    title={15+' Teams'}
                    containerStyle={{
                        ...styles.button,
                        borderWidth: !showPlayers ? 1 : .1,
                    }}
                    textStyle={{
                        color: 'black'
                    }}
                    onPress={handleTeamPressButton}
                />
            </View>
            {showPlayers && <FlatList
                data={players}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item})=>(
                    <PlayerCard 
                        data={item}
                    />
                )}
            />}
            {!showPlayers && <FlatList
                data={teams}
                numColumns={2}
                renderItem={({item})=>(
                    <TeamCard
                        data={item}
                    />
                )}
            />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: widthPercentageToDP('100%'),
        alignItems: 'center'
    },
    button: {
        width: widthPercentageToDP('45%'),
        backgroundColor: 'white',
        borderWidth: .5,
        paddingTop: heightPercentageToDP('.5%'),
        paddingBottom: heightPercentageToDP('.5%'),


    }
})

export default CourtRankingScreen;