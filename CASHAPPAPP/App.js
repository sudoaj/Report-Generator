import React from "react";
import Routes from "./src/config/route";
import { Provider } from "react-redux";
import store from "./src/config/store";

export class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

export default App;
