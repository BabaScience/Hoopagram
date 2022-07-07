import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import AppButton from './Components/AppButton'
import AppBackgroundlessButton from './Components/AppBackgroundlessButton'


// SCREENS
import LandingScreen from './Screens/LandingScreen'
import RegistrationScreenOne from './Screens/RegistrationScreenOne'
import RegistrationScreenTwo from './Screens/RegistrationScreenTwo'
import RegistrationScreenThree from './Screens/RegistrationScreenThree'
import LoginScreen from './Screens/LoginScreen'

import HomeScreen from './Screens/HomeScreen'
import ProfileScreen from './Screens/ProfileScreen'
import CourtPostScreen from './Screens/CourtPostsScreen'
import CourtInformation from './Screens/CourtInformationScreen'
import CourtRankingScreen from './Screens/CourtRankingScreen'
import CourtScreen from './Screens/CourtScreen'


// NAVIGATIONS
import AuthNavigation  from './Navigations/AuthNavigation' 
import MainNavigation from './Navigations/MainNavigation'
import AppNavigation from './Navigations/AppNavigation'
import CourtNavigation from './Navigations/CourtNavigation'


const App = () => {
  return (
    <AppNavigation />
  )
}

export default App

const styles = StyleSheet.create({
  container: {

  }
})