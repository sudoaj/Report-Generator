import React from "react";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import Routes from "./src/config/route";
import store from "./src/config/store";

export default class App extends React.Component {
  state = {
    user: null,
  };
  componentDidMount = async () => {};
  render() {
    return (
      <Provider store={store}>
        <Routes></Routes>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
});
