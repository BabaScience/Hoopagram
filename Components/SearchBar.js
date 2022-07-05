import React from 'react';
import { View, StyleSheet, Text } from 'react-native';


import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'


//Icons 
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'

function SearchBar (props){
    return(
        <View style={styles.container}>
            <GooglePlacesAutocomplete 
                placeholder='Luogo' 

                styles={{
                    textInput: {
                      backgroundColor: '#eee',
                      borderRadius: 20,
                      fontWeight: '700',
                      marginTop: 7,
                    },
                    textInputContainer: {
                      backgroundColor: '#eee',
                      borderRadius: 50,
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginRigh: 10,
                    },
                  }}
                renderLeftButton={()=>(
                    <View style={styles.locationIcon}>
                        <Ionicons name='location-sharp' size={24} />
                    </View>
                )}
                renderRightButton={() => (
                    <View style={styles.ricercaContainer}>
                        <AntDesign name='clockcircle' size={11} style={styles.clockIcon} />
                        <Text>Ricerca</Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        flexDirection: 'row',
        width: '90%',
        alignSelf: 'center',
        paddingBottom: 10,

    },
    locationIcon: {
        marginLeft: 10, 
    },
    ricercaContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 9,
        alignItems: 'center',
        marginRight: 8,
        borderRadius: 30,
        

    },
    clockIcon: {
        marginRight: 6,
    }
})

export default SearchBar;