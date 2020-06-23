import { connect } from "react-redux";
import React, { Component, Fragment } from "react";
import { StyleSheet } from "react-native";
import { Root } from "native-base";
import TabIcon from "../../partials/tab-icon";
import { Router, Scene, Stack } from "react-native-router-flux";

// Screens
import AppHomeScreen from "../../screens/app-home-screen";
import CardScreen from "../../screens/card";
import SendReceive from "../../screens/send-receive";
import Trade from "../../screens/trade";
import TransactionsHistory from "../../screens/transactions-history";

class Routes extends Component {
  state = {
    loaded: true,
  };
  render() {
    return (
      <Fragment>
        <Root>
          <Router>
            {/* Root Scene */}
            <Stack key={"root"}>
              <Scene
                tabStyle={styles.tabStyle}
                key={"Menu"}
                tabs={true}
                showLabel={false}
                hideNavBar
              >
                <Scene
                  hideNavBar
                  key={"Home"}
                  icon={TabIcon}
                  name={"home"}
                  component={AppHomeScreen}
                />
                <Scene
                  hideNavBar
                  key={"card"}
                  icon={TabIcon}
                  name={"card"}
                  component={CardScreen}
                />
                <Scene
                  hideNavBar
                  key={"transact"}
                  icon={TabIcon}
                  name={"cash"}
                  component={SendReceive}
                />
                <Scene
                  hideNavBar
                  key={"trade"}
                  icon={TabIcon}
                  name={"md-stats"}
                  component={Trade}
                />
                <Scene
                  hideNavBar
                  key={"transactions"}
                  icon={TabIcon}
                  name={"clock"}
                  component={TransactionsHistory}
                />
              </Scene>
            </Stack>
          </Router>
        </Root>
      </Fragment>
    );
  }
}
const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#fff",
    borderTopColor: "rgba(0,0,0,0.09)",
    borderTopWidth: 1,
  },
  tabStyle: {
    // backgroundColor: "red",
  },
});

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Routes);
