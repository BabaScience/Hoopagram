import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    Dimensions,
    TouchableOpacity,
  } from 'react-native';
import { createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import { NavigationContainer } from '@react-navigation/native';
import ReactNativeParallaxHeader from 'react-native-parallax-header';
// import StickyParallaxHeader from 'react-native-sticky-parallax-header'
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';


// STATIC DATA
import { colors } from '../assets/Themes/Colors';




// SCREENS
import CourtRankingScreen from './CourtRankingScreen'
import CourtPostsScreen from './CourtPostsScreen'
import CourtInformationScreen from './CourtInformationScreen'




// COMPONENTS
import CourtBannerImage from '../Components/CourtBannerImage'
import AppButton from '../Components/AppButton'
import AppSmallButton from '../Components/AppSmallButton'
// import AppLineChart from '../Components/AppLineChart'
import InfoCard from '../Components/InfoCard';



// CONSTANTS
const {height: SCREEN_HEIGHT} = Dimensions.get('window');
const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;




const renderNavBar = () => (
    <View style={styles.navContainer}>
      <View style={styles.statusBar} />
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.iconLeft} onPress={() => {}}>
          <Text style={{color: 'white'}}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconRight} onPress={() => {}}>
          <Text style={{color: 'white'}}>Me</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  
  const renderContent = () => {
    return (
      <View style={styles.body}>
        {/* {Array.from(Array(30).keys()).map((i) => (
          <View
            key={i}
            style={{padding: 15, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Item {i + 1}</Text>
          </View>
        ))} */}
        <TopTabs />
      </View>
    );
  };
  
  const title = () => {
    return (
      <View style={styles.body}>
        <Text style={{color: 'white', fontSize: 25}}>Parallax Header</Text>
      </View>
    );
  };

function CourtScreen ({navigation}){
    const [joined, setJoined] = React.useState(false)
    const handlleOnPress = () => {
        setJoined(true)
    }
    return(
        <View style={{
            flex: 1,
            backgroundColor: 'white',
            width: widthPercentageToDP('100%')
        }}>
            <View style={styles1.container}>
                <CourtBannerImage />
                <View style={{
                    flexDirection: 'row',
                    width: widthPercentageToDP('100%'),
                    justifyContent: 'space-around'
                }}>
                    {joined && 
                    (<View style={styles.buttons}>
                        <AppButton 
                            title='Training'
                            containerStyle ={styles.button}
                            textStyle = {{
                              color: 'black'
                            }}
                            onPress={() => navigation.navigate('TrainingScreen')}
                        />
                        <AppButton 
                            title='Match'
                            containerStyle ={{
                                ...styles.button,
                            }}
                            textStyle={{
                              color: 'black'
                            }}
                            onPress={() => navigation.navigate('MatchScreen')}
                        />
                        <AppButton 
                            title='Tournament'
                            containerStyle ={styles.button}
                            textStyle={{
                              color: 'black'
                            }}
                            onPress={() => navigation.navigate('TournamentScreen')}
                        />
                    </View>
                    )}
                    {!joined && 
                        <AppButton 
                            title='follow'
                            containerStyle ={{
                                ...styles.button,
                                backgroundColor: colors.purple_color
                            }}
                            textStyle= {{
                              color: 'white'
                            }}
                            onPress={handlleOnPress}
                        />}
                </View>
            </View>
            <TopTabs />
        </View>
    );
}

const App = () => {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <ReactNativeParallaxHeader
          headerMinHeight={HEADER_HEIGHT}
          headerMaxHeight={250}
          extraScrollHeight={20}
          navbarColor="#3498db"
          titleStyle={styles.titleStyle}
          title={title()}
          backgroundImage={require('../assets/Images/court1.jpg')}
          backgroundImageScale={1.2}
          renderNavBar={renderNavBar}
          renderContent={renderContent}
          containerStyle={styles.container}
          contentContainerStyle={styles.contentContainer}
          innerContainerStyle={styles.container}
          scrollViewProps={{
            onScrollBeginDrag: () => console.log('onScrollBeginDrag'),
            onScrollEndDrag: () => console.log('onScrollEndDrag'),
          }}
        />
      </>
    );
  };

const Tab = createMaterialTopTabNavigator() 
const TopTabs = () => {
    return(

            <Tab.Navigator
                initialRouteName="Images"
                options={{
                  activeTintColor: 'black',
                  inactiveTintColor: 'grey',
                  labelStyle: { fontSize: 12 },
                  style: { backgroundColor: 'white' },
                }}
                >
                <Tab.Screen name='Data' component={CourtInformationScreen}/>
                <Tab.Screen name='Images' component={CourtPostsScreen}/>
                <Tab.Screen name='People' component={CourtRankingScreen}/>
            </Tab.Navigator>

    )
}

const styles1 = StyleSheet.create({
    container: {
        //flex: 1,
        alignItems: 'center'
    },
    button: {
        width: widthPercentageToDP('30%'),
        backgroundColor: 'white',
        borderWidth: .5,
        paddingTop: heightPercentageToDP('.5%'),
        paddingBottom: heightPercentageToDP('.5%'),

    }
})
const styles = StyleSheet.create({
    button: {
      width: '30%',
      //backgroundColor: purple_color,
    },
    buttons: {
      flexDirection: 'row',
      width: widthPercentageToDP('100%'),
      justifyContent: 'center'
    },
    container: {
      flex: 1,
    },
    contentContainer: {
      flexGrow: 1,
    },
    navContainer: {
      height: HEADER_HEIGHT,
      marginHorizontal: 10,
    },
    statusBar: {
      height: STATUS_BAR_HEIGHT,
      backgroundColor: 'transparent',
    },
    navBar: {
      height: NAV_BAR_HEIGHT,
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: 'transparent',
    },
    titleStyle: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 18,
    },
  });

export default CourtScreen;