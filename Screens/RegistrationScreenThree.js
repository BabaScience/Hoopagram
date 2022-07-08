import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

// LIBRARIES
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';



// STATIC DATA
import { colors } from '../assets/Themes/Colors';
import {sports} from '../assets/Data'



// CONTEXTS
import AuthContext from '../Contexts/AuthContext'



// COMPONENTS
import AppButton from '../Components/AppButton';
import AppMiniTitle from '../Components/AppMiniTitle';
import InterestComponent from '../Components/InterestComponent';








function RegistrationScreenFinal ({navigation}){
    const authContext = React.useContext(AuthContext)

    const [interests, setInterests] = useState([])

    function handleIconPressed(icon){
        let currInterests = interests
        currInterests.push(icon.name)

        setInterests(currInterests)
    }

    function handleLogin() {
        console.log(interests)

        // auth.setSignedIn(true)
    }

    return(
        <View style={styles.container}>
            
            <View style={styles.title}>
                <AppMiniTitle 
                    title='Choose your interests'
                    style={{
                        //fontSize: 20,
                        color: 'black',
                    }}
                />
            </View>
           <FlatList 
            data={sports}
            renderItem={({item})=>(
                <InterestComponent 
                    data={item}
                    onPress={() => handleIconPressed(item)}
                />
            )}
            numColumns={3}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
           />
           <AppButton 
                title='Finish'
                containerStyle={{
                    backgroundColor: colors.purple_color
                }}
                textStyle={{
                    color: 'white'
                }}
                onPress={handleLogin}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        //justifyContent: 'center'
    },
    title:{
        width: '90%',
        // backgroundColor: 'yellow',
        paddingTop: heightPercentageToDP('4%'),
        paddingBottom: heightPercentageToDP('5%'),
        paddingLeft: widthPercentageToDP('2.5%'),
    },
})

export default RegistrationScreenFinal;