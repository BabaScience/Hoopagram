import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import AppMiniTitle from '../Components/AppMiniTitle';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import InterestComponent from '../Components/InterestComponent';
import {sports} from '../assets/Data'
import AppButton from '../Components/AppButton';
import { colors } from '../assets/Themes/Colors';
import AuthContext from '../Contexts/AuthContext'
function RegistrationScreenFinal ({navigation}){
    const auth = React.useContext(AuthContext)
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
                <InterestComponent data={item}/>
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
                onPress={()=>auth.setSignedIn(true)}
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