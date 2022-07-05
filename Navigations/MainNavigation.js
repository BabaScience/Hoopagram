import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialIcons  from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'


// SCREENS
import HomeScreen from '../Screens/HomeScreen'
import ProfileScreen from '../Screens/ProfileScreen'



// STYLES
import { colors } from '../assets/Themes/Colors';





const Tab = createMaterialBottomTabNavigator();


function MainNavigation (props){
    return(
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{
                    activeTintColor: colors.purple_color,
                    inactiveTintColor: 'grey',
                  }}
                  barStyle={{
                    backgroundColor: 'white'
                  }}
            >
                <Tab.Screen 
                    name="Home" 
                    component={HomeScreen} 
                    options={{
                        tabBarIcon: ({color, size}) => (
                            <Image 
                            source={require('../assets/Images/Sports/basketball-ball.png')}
                            style={{
                                width: 30,
                                height: 30,
                                borderRadius: 15,
                            }}
                        />
                        ),
                    }}
                />
                <Tab.Screen 
                    name="Profile" 
                    component={ProfileScreen} 
                    options={{
                        tabBarIcon: ({color, size}) => (
                            <Image 
                                source={require('../assets/Images/basketball.png')}
                                style={{
                                    width: 30,
                                    height: 30,
                                    borderRadius: 15,
                                }}
                            />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}



export default MainNavigation;