import * as React from "react";
import { StyleSheet, View, Text, Dimensions, Linking } from "react-native";
import Header from "../../partials/header";
import { ListItem } from "react-native-elements";
import { Actions } from "react-native-router-flux";
export default class Documents extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header title={"Documents"} left={() => Actions.pop()} />
        <View>
          <ListItem
            onPress={() => {
              Linking.openURL(
                "http://gahp.net/wp-content/uploads/2017/09/sample.pdf"
              );
            }}
            title={"Site rules"}
            subtitle={"siterule.docx"}
            chevron
          />
          <ListItem
            onPress={() => {
              Linking.openURL(
                "http://gahp.net/wp-content/uploads/2017/09/sample.pdf"
              );
            }}
            title={"Incident Report"}
            subtitle={"incident-report.pdf"}
            chevron
          />
          <ListItem
            onPress={() => {
              Linking.openURL(
                "http://gahp.net/wp-content/uploads/2017/09/sample.pdf"
              );
            }}
            title={"Vehicle checkout"}
            subtitle={"checkout.pdf"}
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
  pdf: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
