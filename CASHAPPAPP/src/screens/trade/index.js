import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import Header from "../../partials/header";

export default class Trade extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header title={"Trade"} />

        <Text>This is the Trade screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f52ba",
  },
});
