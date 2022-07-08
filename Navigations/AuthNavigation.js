import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import LandingScreen from '../Screens/LandingScreen'
import LoginScreen from '../Screens/LoginScreen'
import RegistrationScreenOne from '../Screens/RegistrationScreenOne'
import RegistrationScreenTwo from '../Screens/RegistrationScreenTwo'
import RegistrationScreenFinal from '../Screens/RegistrationScreenThree'


const Stack = createNativeStackNavigator();
function AuthNavigation (props){
    return(
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName='LandingScreen'
                screenOptions={{ headerShown: false}}
            >
                <Stack.Screen 
                    name="LandingScreen" 
                    component={LandingScreen} 
                    options={header}
                />
                <Stack.Screen
                    name="LoginScreen" 
                    component={LoginScreen} 
                    options={{headerTransparent: true, title: null}}
                    />
                <Stack.Screen 
                    name="RegistrationScreenOne" 
                    component={RegistrationScreenOne} 
                    options={header}
                    />
                <Stack.Screen 
                    name="RegistrationScreenTwo" 
                    component={RegistrationScreenTwo} 
                    options={header}
                />
                {/*<Stack.Screen 
                    name="RegistrationScreenFinal" 
                    component={RegistrationScreenFinal} 
                    options={header}
                />*/}
            </Stack.Navigator>
        </NavigationContainer>
  
    );
}

const header = {
        headerTransparent: true, 
        title: "",
}

export default AuthNavigation;