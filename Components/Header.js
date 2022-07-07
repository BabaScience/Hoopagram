import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { widthPercentageToDP } from 'react-native-responsive-screen'


import { colors } from '../assets/Themes/Colors'

function  Header({ navigation })  {
  return (
             <View>
                <View style={{
                    flexDirection: 'row', 
                    //backgroundColor: "red",
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}
                >
                    <View style={{
                        justifyContent : 'center', 
                        // width: widthPercentageToDP("70%"), 
                        height: 45,
                        //backgroundColor: 'green',
                    }}>
                        {/*<Image
                        style={{ width: wp("70%"), height: 45, marginLeft: -wp("7%")}}
                        source={require("../")}
                        />*/}
                        <Text style={styles.logo}>Hoopagram</Text>
                    </View>
                    <TouchableOpacity
                    style={{
                        borderWidth:1,
                        borderColor:'rgba(0,0,0,0.2)',
                        alignItems:'center',
                        justifyContent:'center',
                        width:45,
                        height:45,
                        backgroundColor:'#fff',
                        borderRadius:100,
                        marginRight: widthPercentageToDP('3%')
                        }}
                        onPress={()=>navigation.navigate("CourtSearchScreen")}
                    >
                        <Text>O</Text>
                    {/*<Ionicons name={"search"}  size={25} color={color.defaultColor} />*/}
                    </TouchableOpacity>
                    {/*<View style={{width: 8}}></View>*/}
                    {/*<RoundedImage profile_image={profile_image}/>*/}
                </View>
                {/*<View style={{height: 2, backgroundColor: 'grey', marginTop: 1}}/>*/}
            </View>
  )
}

export default Header

const styles = StyleSheet.create({
    logo: {
        paddingLeft: widthPercentageToDP('3%')
    }
})