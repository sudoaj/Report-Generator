import React from "react";
import { Provider } from "react-redux";
import * as Font from "expo-font";
import Routes from "./src/config/route";
import store from "./src/config/store";
export default class App extends React.Component {
  state = {};
  componentDidMount = async () => {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("native-base/Fonts/Ionicons.ttf"),
      Entypo: require("native-base/Fonts/Entypo.ttf"),
      FontAwesome: require("native-base/Fonts/FontAwesome.ttf"),
      FontAwesome5: require("native-base/Fonts/FontAwesome5_Regular.ttf"),
      Foundation: require("native-base/Fonts/Foundation.ttf"),
      Feather: require("native-base/Fonts/Feather.ttf"),
      SimpleLineIcons: require("native-base/Fonts/SimpleLineIcons.ttf"),
      AntDesign: require("native-base/Fonts/AntDesign.ttf"),
      GothamBold: require("./assets/font/gotham-rounded/GothamRounded-Bold.otf"),
      GothamMedium: require("./assets/font/gotham-rounded/GothamRounded-Medium.otf"),
      GothamBook: require("./assets/font/gotham-rounded/GothamRounded-Book.otf"),
      GothamLight: require("./assets/font/gotham-rounded/GothamRounded-Light.otf"),
    });
  };

  render() {
    return (
      <Provider store={store}>
        <Routes></Routes>
      </Provider>
    );
  }
}
