import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Header from "../../partials/header";
import { Actions } from "react-native-router-flux";
import TopTime from "../../partials/top-time";
import ReportBox from "../../partials/report-box/index";

export default class Report extends React.Component {
  handleSignOut = () => {
    console.log("hi there");
    Actions.pop();
  };
  render() {
    return (
      <View style={styles.container}>
        <Header title={"Report"} left={() => Actions.pop()} />
        <View style={styles.boxContainer}>
          {/* <TopTime></TopTime> */}
        
          <ReportBox></ReportBox>
            {/* Top Button Start */}
            <View style={styles.topBtnContainer}>
            <TouchableOpacity
              style={styles.addTimeBtn}
              onPress={() => this.handleSignOut()}
            >
              <Text style={styles.plusBtnText}>+</Text>
            </TouchableOpacity>
          </View>
          {/* End top buttons */}
          <View style={styles.genBtnContainer}>
            <TouchableOpacity
              style={styles.genBtn}
              onPress={() => this.handleSignOut()}
            >
              <Text>GENERATE REPORT</Text>
            </TouchableOpacity>
          </View>
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
    flexDirection: "column",
    margin: 1,
    marginBottom: 50,
  },

  headerText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
    textAlign: "left",
    padding: 10,
    marginTop: 60,
    elevation: 8,
  },
  genBtnContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  genBtn: {
    width: "80%",
    backgroundColor: "#2ed397",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },

  topBtnContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom:50,
  },

  addTimeBtn: {
    backgroundColor: "#2ed397",
    borderRadius: 50,
    height: 50,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    margin: 10,

    marginBottom: 10,
  },
  plusBtnText:{
    fontSize:30,
    fontWeight:"bold"
  }
});
