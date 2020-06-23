import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import Header from "../../partials/header";

export default class TransactionHistory extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header title={"History"} />
        <Text>This is the TransactionHistory screen</Text>
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
