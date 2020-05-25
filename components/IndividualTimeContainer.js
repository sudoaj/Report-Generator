
import React, { Component } from 'react';
import { StyleSheet, View,Text } from 'react-native';
import IndividualTimeButton from './IndividualTimeButton'

const timesNameAndColor = [
    {
        name: "0900",
        color: "green"
    },
    {
        name: "1000",
        color: "red"
    },
    {
        name: "1100",
        color: "blue"
    },
    {
        name: "1200",
        color: "grey"
    },
    {
        name: "1300",
        color: "grey"
    },
    {
        name: "1400",
        color: "grey"
    },{
        name: "1500",
        color: "grey"
    },{
        name: "1600",
        color: "grey"
    },{
        name: "1700",
        color: "grey"
    }

]
export default function IndividualTimeContainer(props) {

    return (
        <View style={styles.container}>
             {timesNameAndColor.map(({ name, color }) => {
                  return <IndividualTimeButton key={name} name={name} color={color}></IndividualTimeButton>
            })}
            

        </View>
        


    );

}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        margin: 5,
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignContent: 'center',
        flexWrap: 'wrap',
    },
});
