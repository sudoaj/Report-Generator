import * as React from "react";
import { StyleSheet, View, Text, Linking } from "react-native";
import Header from "../../partials/header";
import { ListItem } from "react-native-elements";

import { Input, ButtonInput, ErrorTxt } from "../../partials/form/input";
import { Actions } from "react-native-router-flux";
import { color } from "react-native-reanimated";
export default class PhoneBook extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header title={"Phone book"} left={() => Actions.pop()} />
        <View style={styles.viewContainer}>
          <ListItem
            titleStyle={styles.title}
            title={"Police"}
            subtitle={"911"}
            onPress={() => {
              Linking.openURL("tel:911");
            }}
            chevron
          />
          <ListItem
            titleStyle={styles.title2}
            title={"Supervisor"}
            subtitle={"1-800-111-111"}
            onPress={() => {
              Linking.openURL("tel:404-980-7539");
            }}
            chevron
          />
          <ListItem
            titleStyle={styles.title2}
            title={"Woodland ct phone"}
            subtitle={"1-800-111-111"}
            onPress={() => {
              Linking.openURL("tel:1-800-111-111");
            }}
            chevron
          />
          <ListItem
            titleStyle={styles.title2}
            title={"Elevator phone"}
            subtitle={"1-800-111-111"}
            onPress={() => {
              Linking.openURL("tel:1-800-111-111");
            }}
            chevron
          />
          <ListItem
            titleStyle={styles.title2}
            title={"Front gate phone"}
            subtitle={"1-800-111-111"}
            onPress={() => {
              Linking.openURL("tel:1-800-111-111");
            }}
            chevron
          />
          <ListItem
            titleStyle={styles.title2}
            title={"back gate phone"}
            subtitle={"1-800-111-111"}
            onPress={() => {
              Linking.openURL("tel:1-800-111-111");
            }}
            chevron
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewContainer: {
      margin:10
  },
  buttonWrap: {
    margin: 5,
  },
  title: {
    fontFamily: "GothamBold",
    color: "red",
  },
  title2: {
    fontFamily: "GothamBold",
    color: "#2ed397",
  },
});
