import React from 'react';
import { View, StyleSheet, Text, FlatList, ToastAndroid } from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';

import { courts,  posts} from '../assets/Data'
import PostCard from '../Components/PostCard';

function CourtPosts (props){
    return(
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <FlatList
                data={posts} 
                renderItem ={({ item }) =>(
                    <PostCard 
                        data={item}
                        style={{
                            width: widthPercentageToDP('45%')
                        }}
                        onPress={() => ToastAndroid.show('image not clikable!', 2000)}
                    />
                )}
                keyExtractor={(item) => item.id.toString()}
                numColumns={3}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: widthPercentageToDP('100%'),
        alignItems: 'center',
        backgroundColor: 'yellow'
    }
})

export default CourtPosts;