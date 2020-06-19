import * as React from "react";
import { StyleSheet, View } from "react-native";
import TopTime from "../../partials/top-time"
import IndividualTimeContainer from "../../partials/time-container";
import TopInput from "../../partials/top-input";

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TopTime></TopTime>
        <TopInput></TopInput>
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
