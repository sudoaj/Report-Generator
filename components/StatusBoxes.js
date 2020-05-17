import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';



const statusNameAndColor = [

    {
        name: "CURRENT",
        color: "blue"
    },
    {
        name: "DONE",
        color: "green"
    },
    {
        name: "INCOMPLETE",
        color: "grey"
    },
    {
        name: "MISSED",
        color: "red"
    },

]

export default function StatusBoxes(props) {

    return (
        <View style={[{ margin: 10 }, { padding: 10 }, styles.container2]}>
            {statusNameAndColor.map(({ name, color }) => {
                return <View style={[{ backgroundColor: color }, { margin: 10 }, { padding: 5 }]}><Text style={{ margin: 1 }, { padding: 1 }, { color: 'white' }}>{name}</Text></View>
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    container2: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignContent: 'center',
        flexWrap: 'wrap',
    }
})