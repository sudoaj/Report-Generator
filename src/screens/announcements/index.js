import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import Header from "../../partials/header";
import { ListItem } from "react-native-elements";

import { Input, ButtonInput, ErrorTxt } from "../../partials/form/input";
import { Actions } from "react-native-router-flux";
export default class Announcements extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header title={"Announcements"} left={() => Actions.pop()} />
        <View>
          <ListItem
            leftAvatar={{
              title: "name[0]",
              source: { uri: "https://randomuser.me/api/portraits/women/6.jpg" },
              showAccessory: true,
            }}
            title={"name"}
            subtitle={"role"}
            chevron
          />
          <ListItem
            leftAvatar={{
              title: "name[0]",
              source: { uri: "https://randomuser.me/api/portraits/women/6.jpg" },
              showAccessory: true,
            }}
            title={"name"}
            subtitle={"role"}
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

  buttonWrap: {
    margin: 5,
  },
});
