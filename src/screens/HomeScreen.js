import * as React from "react";
import { StyleSheet, View } from "react-native";
import TopTime from "../partials/TopTime";
import IndividualTimeContainer from "../partials/IndividualTimeContainer";
import TopInputs from "../partials/TopInputs";

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TopTime></TopTime>
        <TopInputs></TopInputs>
        <IndividualTimeContainer></IndividualTimeContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    textAlign: "center",
  },
  submit: {
    marginRight: 70,
    marginLeft: 70,
    marginTop: 15,
    marginBottom: 15,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: "grey",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#fff",
  },
  submitText: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
  },
});
