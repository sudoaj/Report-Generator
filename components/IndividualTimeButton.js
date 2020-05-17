
import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';



export default function IndividualTimeButton(props) {

    return (


            <TouchableHighlight
                style={[styles.container, {backgroundColor:props.color}]}
                onPress={() => launchIndividualTimeEntry()}
                underlayColor='#fff'
                >
                <Text style={styles.bigTimeButton}>{props.name}</Text>

            </TouchableHighlight>




    );

}
const launchIndividualTimeEntry = () => {

    console.log("Time");
}
const styles = StyleSheet.create({
    container: {
        padding: 25,
        margin: 1,

        justifyContent: 'center',
    },
    bigTimeButton: {
        textAlign: "left",
        padding: 1,
        fontSize: 20,
        color: "white"

    },

});
