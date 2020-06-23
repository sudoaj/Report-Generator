import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Header from "../../partials/header";

export default class AppHomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* left={() => Actions.pop() */}
        <Header title={"Home"} />
        <View style={styles.container2}>
          <Image
            style={styles.stretch}
            source={require("../../assets/images/flag2.png")}
          />
          <Text style={styles.textStyle}>{"1,000"}</Text>
          <Image
            style={styles.stretch2}
            source={require("../../assets/images/flag.png")}
          />
        </View>
        <View style={styles.container3}>
          <Text style={styles.textStyle2}>{"N1,000"}</Text>
          <Text style={styles.textStyle3}>{"$352,000"}</Text>
        </View>
        <View style={styles.container4}>
          <Text style={styles.textStyle4}>{"1 NGN = 375 USD"}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f52ba",
  },
  container2: {
    backgroundColor: "white",
    flex: 1,
    margin: 10,
    maxHeight: 70,
    shadowRadius: 10,
    shadowColor: "#000",
    borderRadius: 50,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.65,

    elevation: 8,
  },
  container3: {
    backgroundColor: "white",
    flex: 1,
    margin: 10,
    maxHeight: 100,
    shadowRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.65,

    elevation: 8,
  },
  container4: {


    marginTop:-10,
    margin: 10,
    height:10,
    maxHeight:-10,
    shadowRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.65,

    elevation: 8,
  },
  textStyle: {
    textAlign: "center",
    marginTop: -50,
    fontSize: 30,
  },
  textStyle2: {
    padding: 30,
    textAlign: "left",
    fontSize: 30,
  },
  textStyle3: {
    marginTop: -95,
    padding: 30,
    textAlign: "right",
    fontSize: 30,
  },
  textStyle4: {
    backgroundColor: "#fafafa",
    padding: 15,
    textAlign: "center",
    fontSize: 10,
  },
  stretch: {
    margin: 10,
    maxHeight: 50,
    maxWidth: 50,
    shadowRadius: 10,
    shadowColor: "#000",
    borderRadius: 50,
    shadowOpacity: 0.2,
    shadowRadius: 0.65,
  },
  stretch2: {
    marginLeft: 335,
    marginTop: -49,
    borderRadius: 50,
    maxHeight: 50,
    maxWidth: 50,
  },
});
