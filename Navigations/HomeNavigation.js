import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// SCREENS
import HomeScreen from '../Screens/HomeScreen'
import CourtScreen from '../Screens/CourtScreen'
import CourtSearchScreen from '../Screens/CourtSearchScreen'


// NAVIGATIONS
import CourtNavigation from './CourtNavigation'

const Stack = createNativeStackNavigator()

const HomeNavigation = () => {
  return (

        <Stack.Navigator
          initialRouteName='HomeScreen'
          screenOptions={{ headerShown: false}}
        >
            <Stack.Screen  name='HomeScreen' component={HomeScreen} />
            <Stack.Screen  name='CourtScreen' component={CourtNavigation} />
            <Stack.Screen  name='CourtSearchScreen' component={CourtSearchScreen} />
        </Stack.Navigator>

  )
}

export default HomeNavigation

const styles = StyleSheet.create({})