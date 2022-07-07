import React from 'react';
import { View, StyleSheet } from 'react-native';
import CourtContainer from './CourtCard';
import TeamBaseCard from './TeamBaseCard';


const img = require('../assets/Images/court1.jpg')
function TeamCard (data){
    //console.log(data)
    return(
            <TeamBaseCard
                data={data.data}
            />
    );
}

const styles = StyleSheet.create({

})


export default TeamCard;