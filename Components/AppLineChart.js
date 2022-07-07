import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;

import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";
import { widthPercentageToDP } from 'react-native-responsive-screen';

  
function AppLineChart ({legend='Legend'}){
    const data = {
        labels: ["Mond.", "Tues.", "Wen.", "Thur", "Fri", "Sat", "Sun"],
        datasets: [
        {
            data: [3, 6 , 1, 8, 15, 0, 1],
            color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
            strokeWidth: 2 // optional
        }
        ],
        legend: [legend] // optional

    };
    const chartConfig = {
        //backgroundGradientFrom: "#0000ff",
        backgroundGradientFrom: "white",
        backgroundGradientFromOpacity: 1,
        //backgroundGradientTo: "#0000ff",
        backgroundGradientTo: 'white',
        backgroundGradientToOpacity: 0.8,
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
    };
    return(
        <LineChart
            style={{
                borderRadius: 10,
            }}
            data={data}
            width={widthPercentageToDP('99%')}
            height={180}
            //verticalLabelRotation={30}
            chartConfig={chartConfig}
            bezier
        />
    );
}

const styles = StyleSheet.create({
    container: {

    }
})

export default AppLineChart;