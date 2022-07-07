import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


// SCREENS
import CourtScreen from '../Screens/CourtScreen'
import TournamentScreen from '../Screens/TournamentScreen'
import MatchScreen from '../Screens/MatchScreen'
import TrainingScreen from '../Screens/TrainingScreen'


const Stack = createNativeStackNavigator()

const CourtNavigation = () => {
  return (
        <Stack.Navigator
            initialRouteName='CourtMainScreen'
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="CourtMainScreen" component={CourtScreen} />
            <Stack.Screen name="TournamentScreen" component={TournamentScreen} />
            <Stack.Screen name="MatchScreen" component={MatchScreen} />
            <Stack.Screen name="TrainingScreen" component={TrainingScreen} />
        </Stack.Navigator>
  )
}

export default CourtNavigation

const styles = StyleSheet.create({})