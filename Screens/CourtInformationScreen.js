import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { colors } from '../assets/Themes/Colors';
import AppLineChart from '../Components/AppLineChart';
import AppMiniTitle from '../Components/AppMiniTitle'
import InfoCard from '../Components/InfoCard';

function CourtInformation (props){
    return(
        <View style={styles.container}>
            <View style={{
                    alignSelf: 'flex-start',
                    paddingLeft: 10,
                    paddingTop: heightPercentageToDP('2%')
                }}>
                <InfoCard title='People Actually' color={colors.purple_color}/>
                <AppMiniTitle 
                    title='Last 7 Days'
                    style={{
                        color: 'black',
                        fontWeight: 'bold',
                    }}
                />
            </View>
            <AppLineChart 
                legend='Number of People'
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        width: widthPercentageToDP('100%')
    }
})

export default CourtInformation;