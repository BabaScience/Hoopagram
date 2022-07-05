import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
// import { MaterialIcons } from '@expo/vector-icons';


const img = require('../assets/Images/basketball.png')
function AppChangeablePhoto ({image=img, size=150}){
    return(
        <TouchableOpacity style={{
                ...styles.container,
                borderRadius: size/2
            }}
            activeOpacity={0.9}
        >
            <Image
                source={image}
                style={{
                    ...styles.image,
                    width: size,
                    height: size
                }}
            />
            <View style={{
                ...styles.change,
                width: size/4,
                height: size/4,
                borderRadius: size/8
            }}>
                {/*<MaterialIcons name="photo-camera" size={26} color="white" />*/}
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightblue',
    },
    image: {
        
    },
    change: {
        backgroundColor: 'lightblue',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 1,
        right: 1
    }
})

export default AppChangeablePhoto;