import * as React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import WavyHeader from "../../partials/wavy-header";
import Header from "../../partials/header";
import {Actions} from "react-native-router-flux"

export default class Report extends React.Component {
  render() {
    return (

        <View>
          <Header title={"Report"} left={() => Actions.pop()} />
          <View style={styles.container}>
            <Text style={styles.headerText}>SH</Text>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  boxContainer: {
    flex: 1,
    flexWrap: "wrap",
    padding: 10,
    marginTop: 50,
    margin: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "stretch",
  },

  svgCurve: {
    position: "absolute",
    width: Dimensions.get("window").width,
  },
  headerText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "left",
    padding: 10,
    marginTop: 60,
    elevation: 8,
  },
});
