import React from "react";
import {StyleSheet, Text, TouchableHighlight} from "react-native";

export default function IndividualTimeButton(props) {
    return (
        <TouchableHighlight style={
                [
                    styles.container, {
                        backgroundColor: props.color
                    }
                ]
            }
            onPress={
                props.onPress
            }
            underlayColor="#fff">
            <Text style={
                styles.bigTimeButton
            }>
                {
                props.name
            }</Text>
        </TouchableHighlight>
    );
}
const styles = StyleSheet.create({
    container: {
        padding: 30,
        margin: 5,
        borderRadius: 3,
        justifyContent: "center",
        flexDirection: "column",
        alignContent: "center",
        shadowOpacity: 0.95,
        shadowRadius: 10,
        shadowColor: "#f6f6f6",
        shadowOffset: {
            height: 10,
            width: 0
        }
    },
    bigTimeButton: {
        textAlign: "left",
        padding: 1,
        fontSize: 20,
        color: "white",
        fontWeight: "bold"
    }
});
