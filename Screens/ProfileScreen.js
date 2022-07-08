import React, { useContext } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';


//  LIBRARIES
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import auth from '@react-native-firebase/auth'




// STATIC DATA
import { colors } from '../assets/Themes/Colors';




// CONTEXTS 
import AuthContext from '../Contexts/AuthContext'; 


// COMPONENTS
import AppChangeablePhoto from '../Components/AppChangeablePhoto';
import AppMiniTitle from '../Components/AppMiniTitle'
import AppTextInput from '../Components/AppTextInput';
import AppButton from '../Components/AppButton';
import AppSmallButton from '../Components/AppSmallButton';





function ProfileScreen ({navigation}){
    const authContext = useContext(AuthContext)

    function handleSignOut() {
        auth()
            .signOut()
            .then(() => {
                console.log('User Signed Out!')
                authContext.setSignedIn(false)
            })
            .catch(error => {
                console.error(error)
            })
    }


    return(
        <View style={styles.container}>
            <View style={{
                width: widthPercentageToDP('100%'),
                alignItems: 'center',
            }}>

                <View  style={styles.image}>
                    <AppChangeablePhoto />
                    <View style={styles.profileDetails}>
                      <Text style={styles.name}>Bamba Ba</Text>
                      <Text style={styles.description}>Ball is life🏀</Text>
                      <AppSmallButton
                        title='sign out'
                        containerStyle={{
                            backgroundColor: 'white',
                            marginTop: heightPercentageToDP('3%')
                        }}
                        textColor='black'
                        onPress={handleSignOut}
                      />
                    </View>
                </View>
                <View style={styles.entries}>
                    
                </View>
            </View>
            <View style={styles.button}>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        width: '100%',
        justifyContent: 'space-between'
    },
    image: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: 'green',
        paddingTop: heightPercentageToDP('3%'),
        paddingBottom: 10,
        marginBottom: 15
    },
    title: {
        width: '90%',
        paddingTop: heightPercentageToDP('4%'),
        paddingBottom: heightPercentageToDP('5%'),
        paddingLeft: widthPercentageToDP('2.5%'),
        // backgroundColor: 'yellow'
    },
    profileDetails: {
      // backgroundColor: 'red',
      width: widthPercentageToDP('80%'),
      alignItems: 'center'
    },
    name: {
      color: 'black',
      fontSize: 18,
      marginTop: heightPercentageToDP('2%'),
      
    },
    description: {

    },
    button: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        //position: 'absolute',
        //bottom: 10,
        // marginTop: heightPercentageToDP('29%')
        marginBottom: 10,
    }
})

export default ProfileScreen;