import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';
import { colors } from '../assets/Themes/Colors';


function AppTextInput ({
    placeholder='Enter Something',
    title="Title",
    onChangeText=() => {},
    value = '',
    showErrMessage=false,
    errMessage='bla bla bla'
}){
    const [borderColor, setBorderColor] = React.useState('black')
    const [borderWidth, setBorderWidth] = React.useState(.5)
    
    // const [text, onChangeText] = useState('')
    
    const HandleFocus = () => {
        setBorderColor(colors.purple_color),
        setBorderWidth(1.5)
    }
    const HandleBlur = () => {
        setBorderColor('black'),
        setBorderWidth(.5)
    }
    return(
        <View style={styles.container}>
            <Text style={{
                ...styles.title,
                color: borderColor
            }}>
                {title}
            </Text>
            <View style={
                {
                    ...styles.input_view,
                    borderColor,
                    borderWidth
                }}>
                <TextInput 
                    onFocus={HandleFocus}
                    onBlur={HandleBlur}
                    style={styles.text_input}
                    placeholder={placeholder}
                    onChangeText={onChangeText}
                    value={value}
                    />
            </View>
            {showErrMessage && (
                <Text style={styles.errorMessage}>
                    {errMessage}
                </Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        marginBottom: 10
        //backgroundColor: 'yellow'
    },
    input_view: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        width: '100%',
        paddingLeft: 15,
        marginBottom: 7,
    },
    text_input: {
        fontSize: 17
    },
    title:{
        fontSize: 14,
        paddingLeft: 1,
        paddingBottom: 1,
        color: 'black'
    },
    errorMessage: {
        color: 'red',
        fontSize: 14
    }
})

export default AppTextInput;